# AWS Document Data Extraction Platform

This is the source code for the Document Data Extraction Platform prototype. It is an extensible platform that performs intelligent document processing with AWS Textract. Users are able to extend the platform by creating generic schemas that define documents that they want to process. The schemas are used to coerce extracted values from documents into the correct types. After data extraction, users are able to live edit the extracted values via the web application. Once the document has been reviewed, metrics will be updated on the dashboard to give latency, accuracy and confidence metrics for each form.

Tech:

- Amazon Textract
- Amazon DynamoDB
- Amazon S3
- AWS Step Functions
- AWS Lambda
- Amazon API Gateway
- Amazon Cloudfront

---

## Solution Architecture

![Solution Design](/readme//solution.png)

The solution includes a front-end web interface implemented as a single page React web application, hosted on S3 and delivered via CloudFront (a content distribution network service) and a disclosure data extraction platform accessed via a collection of secured REST APIs. This platform provides:

- a serverless ML data extraction pipeline
- document & form processing/review state management
- storage of uploaded documents
- storage of forms extracted from those documents
- a registry of form description schemas
- storage of data extracted from those forms mapped to the form structure schema

## Solution Web Application

On the home page, you will see a dashboard that has metrics that give clarity about the platform's performance in general. For example, `Average Extraction Accuracy` reflects the average accuracy of all forms processed by the platform.

Central to the application is the schema registry where you can register schemas that you want textract data to map to. It also tracks a Average Accuracy metric which is the average accuracy of all forms that belong to this schema type.
![Schemas](/readme//document-schemas.png)

Once a document has been uploaded, it will automatically appear to be extracted in the `form` tab. There are tags which you can add and use as a filter in the search. Clicking the status will send you to the review page and set the form to be in "In Review" status.
![Forms](/readme//forms.png)

The review page shows a list of extracted fields where the **fields defined originate from the schema**, and the **values of a field are extracted from textract**. The right hand side is a pdf viewer. You can make edits to the individual fields, it will also draw a bounding box on where that field has been identified in the form. As part of the extraction metadata, you can tell which textract api was used to find the value of that field, whether it was query, form or table.
![Review](/readme//editable-review.png)

### Extraction, Review and Storage Backend:

1. An upload of a document in the frontend webapp stores it in s3 prior to processing and triggers the Document Processing Step Functions Workflow.
2. As part of the Classification Workflow, the document will be classified into a form by matching it to the selected schema type (selected from the UI) and its' metadata will be stored in DynamoDB.
3. Finally the Form Extraction Workflow\* will make an API call to Textract to extract data from the form. Fields from the selected schema type will be matched with Textract's results. If Textract's results identifies a key that contains results from Textract's QUERY, FORM and TABLE API, preference for selecting the value of the key will be given in the order of QUERY, FORM AND then TABLE. DynamoDB will be updated to store the correlated results between keys defined in the schema definition and Textract.

- Note: For the platform's extensibility, the Form Extraction Workflow can be invoked in parallel if the platform is extended to support extracting multiple forms within one document. Currently the platform is limited to one form per document and hence the Form Extraction workflow will only run once per document.

### Lifecycle of an uploaded file:

1. Uploaded files are recorded as a single instance of 'document'
2. After extraction state machine is run, it will be stored as a 'form'. There is a distinction between form and document as a document may contain multiple forms. However that is not supported by this platform at the moment. See more in the section `Limitations of the platform`

---

## Using the Platform

### Crafting schemas

**Before you begin uploading a document, you must craft a schema definition** that is a JSON representation of the data types expected to be extracted. The schemas will store in a schema registry that the platform maintains as a table in DynamoDB. First level of nesting in the json representation will be to identify the different parts that a form contains. These are essentially sections of a form.

The next level of nesting will be to identify the different fields that make up a particular section. For each field you must define the `order` in which it appears in the form from top to bottom as an integer, `title`, `type` being one of the following [array, boolean, integer, number, object, string] and an optional `extractionMetadata` object enriches the fields so that further information can be used when running textract. For example, the `textractQuery` property adds a query that Textract Query should run when trying to extract that field. `formKey` is used to help Textract Forms identify the title of the field. For fields found in a table, it is best to use the properties `tablePosition`, `rowPosition`, `columnPosition` when referring to tables in a form.

For more information refer to the spec.yaml's `FormJSONSchema`.

```
{
  "title": "W-8BEN",
  "required": [
    "part1"
  ],
  "type": "object",
  "properties": {
    "part1": {
      "order": 1,
      "required": [
        "name",
        "countryOfCitizenship",
        "address",
        "city",
        "residenceAddressCountry",
        "ssn",
        "foreignTaxID",
        "referenceNumber",
        "dateOfBirth"
      ],
      "type": "object",
      "properties": {
        "name": {
          "order": 1,
          "extractionMetadata": {
            "formKey": "Name of individual who is the beneficial owner",
            "textractQuery": "What is the Name of individual who is the beneficial owner?"
          },
          "title": "Name of individual who is the beneficial owner",
          "type": "string"
        },
        "countryOfCitizenship": {
          "order": 2,
          "extractionMetadata": {
            "formKey": "Country of citizenship",
            "textractQuery": "What is the Country of citizenship?"
          },
          "title": "Country of citizenship",
          "type": "string"
        },
        "address": {
          "order": 3,
          "extractionMetadata": {
            "formKey": "Permanent residence address",
            "textractQuery": "What is the permanent residence address?"
          },
          "title": "Permanent residence address",
          "type": "string"
        },
        "city": {
          "order": 4,
          "extractionMetadata": {
            "formKey": "City or town, state or province. Include postal code where appropriate.",
            "textractQuery": "What is the City or town, state or province below the permanent residence address?"
          },
          "title": "City or town, state or province. Include postal code where appropriate.",
          "type": "string"
        },
        "residenceAddressCountry": {
          "order": 5,
          "extractionMetadata": {
            "formKey": "Country",
            "textractQuery": "What is the residence address country?"
          },
          "title": "Country",
          "type": "string"
        },
        "mailingAddress": {
          "order": 6,
          "extractionMetadata": {
            "formKey": "Mailing address (if different from above)",
            "textractQuery": "What is the Mailing address?"
          },
          "title": "Mailing address",
          "type": "string"
        },
        "mailingAddressCity": {
          "order": 7,
          "extractionMetadata": {
            "formKey": "City or town, state or province. Include postal code where appropriate.",
            "textractQuery": "What is the City or town, state or province below the mailing address?"
          },
          "title": "City or town, state or province. Include postal code where appropriate.",
          "type": "string"
        },
        "mailingAddressCountry": {
          "order": 8,
          "extractionMetadata": {
            "formKey": "Country",
            "textractQuery": "What is the Country of the mailing address?"
          },
          "title": "Country",
          "type": "string"
        },
        "ssn": {
          "order": 9,
          "extractionMetadata": {
            "formKey": "U.S taxpayer identification number(SSN or ITIN), if required (see instructions)",
            "textractQuery": "What is the U.S taxpayer identification number(SSN or ITIN)?"
          },
          "title": "U.S taxpayer identification number(SSN or ITIN)",
          "type": "string"
        },
        "checkFTIN": {
          "order": 10,
          "extractionMetadata": {
            "formKey": "Check if FTIN not legally required"
          },
          "title": "Check if FTIN not legally required",
          "type": "boolean"
        },
        "foreignTaxID": {
          "order": 10,
          "extractionMetadata": {
            "formKey": "Foreign tax identifying number (see instructions)",
            "textractQuery": "What is the Foreign tax identifying number?"
          },
          "title": "Foreign tax identifying number (see instructions)",
          "type": "string"
        },
        "referenceNumber": {
          "order": 11,
          "extractionMetadata": {
            "formKey": "Reference number(s)",
            "textractQuery": "What is the Reference number(s)?"
          },
          "title": "Reference number(s) (see instructions)",
          "type": "string"
        },
        "dateOfBirth": {
          "order": 12,
          "extractionMetadata": {
            "formKey": "Date of birth",
            "textractQuery": "What is the Date of birth?"
          },
          "title": "Date of birth (see instructions)",
          "type": "string",
          "format": "date"
        }
      }
    },
    "part2": {
      "order": 2,
      "type": "object",
      "properties": {
        "beneficialOwnerResident": {
          "order": 1,
          "extractionMetadata": {
            "formKey": "I certify that the beneficial owner is a resident of",
            "textractQuery": "Which country is the beneficial owner a resident of?"
          },
          "title": "I certify that the beneficial owner is a resident of",
          "type": "string"
        },
        "specialRatesConditions": {
          "order": 2,
          "extractionMetadata": {
            "formKey": "The beneficial owner is claiming the provisions of Article and paragraph",
            "textractQuery": "Which provisions of Article and paragraph is the beneficial owner claiming?"
          },
          "title": "The beneficial owner is claiming the provisions of Article and paragraph",
          "type": "string"
        },
        "specialRatesPercent": {
          "order": 3,
          "extractionMetadata": {
            "formKey": "of the treaty identified on line 9 above to claim a",
            "textractQuery": "What % rate is the beneficial owner withholding?"
          },
          "title": "of the treaty identified on line 9 above to claim a",
          "type": "string"
        },
        "specialRatesTypeOfIncome": {
          "order": 4,
          "extractionMetadata": {
            "formKey": "% rate of withholding on (specify type of income)",
            "textractQuery": "What is the type of income withholding?"
          },
          "title": "% rate of withholding on (specify type of income)",
          "type": "integer"
        },
        "specialRatesAdditionalConditions": {
          "order": 5,
          "extractionMetadata": {
            "formKey": "Explain the additional conditions in the Article and paragraph the beneficial owner meets to be eligible for the rate of withholding",
            "textractQuery": "What additional conditions are eligible for the rate of withholding?"
          },
          "title": "Explain the additional conditions in the Article and paragraph the beneficial owner meets to be eligible for the rate of withholding",
          "type": "string"
        }
      }
    }
  },
  "description": "The W-8 form is a legal US Treasury document required by the Internal Revenue Service (IRS) that allows foreign investors to claim concessional tax treaty benefits, including a reduced rate of withholding tax"
}
```

### Heuristics for Textract Query, Forms, and Tables

- Use query if the form contains a sentence structure with gaps in the text as user input to fill out.
- If Forms could not identify a particular field, it is recommended to add a query to the `extractionMetadata` of the field.
- For checkboxes found in forms, it is best to let Forms handle whether it is SELECTED or NOT SELECTED.
- For any table structures, enrich the schema's definition with the appropriate `extractionMetadata` to help identify which table, column and row a particular field is found.
- Confidence metrics for Forms are particularly low despite correctly determining the value and should be interpreted with caution.

### Limitations of the platform

- You can only extract a document once the appropriate schema has been added to the schema registry
- In the real world, documents can contain multiple forms but the platform is limited to only extracting one document per form. Each page included in the document must be relevant to the schema defined. Do not include an illustrative cover for example as no meaningful data can be extracted.
- There is no frontend component built to add tags on the webapp. However tags are supported in the backend.

### Adding workflow tags

- You can add tags to a form in review and default tags are defined in the REVIEW_WORKFLOW_TAGS const.

---

## Project Structure

This is an [NX](https://nx.dev/) monorepo project, which uses [projen](https://github.com/projen/projen) to manage project files and dependencies. Infrastructure is
defined using the [AWS Cloud Development Kit (CDK)](https://aws.amazon.com/cdk/).

- `.projenrc.ts` - The entry point for projen, defining the high level projects and their dependencies in the monorepo.
- `packages/infra` - Contains the CDK infrastructure for the prototype.
- `packages/api/core` - Contains the OpenAPI specification (`spec.yaml`), code generation tooling, and CDK construct for creating API infrastructure based on the specification.
- `packages/lambdas` - Python project containing all lambda handlers for serving API requests, or executing as Step Functions state machine steps.
- `packages/webapp` - The user interface written using [React](https://reactjs.org/)

## Development

### Prerequisites

- `node` version 14+
- `yarn` (`npm install -g yarn`)
- `npx` (`npm install -g npx`)
- Python 3.9
  - Your `python` command must point to Python 3.9 prior to your first build. (Test with `python --version`)
  - You can use [`pyenv`](https://github.com/pyenv/pyenv) to manage python versions, eg: `pyenv install 3.9.11 && pyenv global 3.9.11 && eval "$(pyenv init --path)"`)
- [AWS CLI](https://aws.amazon.com/cli/)
- [CDK version 2](https://github.com/aws/aws-cdk#getting-started)
- [`git-remote-codecommit`](https://github.com/aws/git-remote-codecommit#step-3-install-git-remote-codecommit)
- Java 11 (used by OpenAPI generator), (eg [Amazon Correto 11](https://docs.aws.amazon.com/corretto/latest/corretto-11-ug/what-is-corretto-11.html))

### Getting Started

#### First Build

To build the prototype from scratch, use the following command:

```bash
yarn
```

This will install all dependencies for packages except for the generated package `api_python_client`. This package needs the .env to be able to install. So if there is an error,
Error: Invalid projects: api_python_client, just continue with npx projen to create the .env necessary. Installation of api_python_client will be a few steps later.

```bash
npx projen
```

Once a .env directory is created in the root of the project, run the following command:

```bash
source .env/bin/activate
```

This will activate the python virtual environment that contains python 3.9 that's required for this repository.

To build all packages in this repository

```bash
yarn build
```

For subsequent builds, `yarn` need not be run. `npx projen` need only be run when the `.projenrc.ts` file (or files in the `projenrc` folder) is changed.

#### Deploy the CI/CD Pipeline

Ensure you have an AWS profile set up with the region in which the CI/CD pipeline should be deployed,
and credentials for your target AWS account. This can be a named profile, or the default profile (omit the `--profile` argument).

```bash
aws configure [--profile <AWS_PROFILE>]
```

Next, bootstrap CDK and deploy the pipeline from the `packages/infra` directory:

```bash
cd packages/infra
npx cdk bootstrap [--profile <AWS_PROFILE>]
npx cdk deploy [--profile <AWS_PROFILE>]
cd ../..
```

#### Deploying locally to a sandbox environment

- note you need bootstrap CDK to have been run before deploying in your aws account

```bash
npx cdk bootstrap [--profile <AWS_PROFILE>]
```

If CDK boostrap stack has already been deployed, run the following command from the root of the project:

```bash
cd packages/infra && yarn build && yarn deploy-sandbox --profile <AWS_PROFILE>
```

#### Configure the Pipeline Source

The pipeline includes creation of a CodeCommit repository named `monorepo`.

Make sure you have [`git-remote-codecommit`](https://github.com/aws/git-remote-codecommit#step-3-install-git-remote-codecommit) installed.

From the **root directory**:

```bash
git checkout -b mainline && git add --all && git commit -m "Initial Commit"
git remote add awscodecommit codecommit://<AWS_PROFILE>@monorepo
git push awscodecommit mainline -u
```

You can now visit the AWS console to find the CodePipeline and track its progress.

#### [OPTIONAL] Configure the Pipeline Source with SonarQube

`packages/infra/cdk.context.json` file must include your sonarqube settings like so. This will add `sonarqubeScannerConfig` to the cdk context.

```
{
  "sonarqubeScannerConfig": {
    "sonarqubeEndpoint": "https://www.example.sonar.qube.com",
    "sonarqubeAuthorizedGroup": "<YOUR_AUTHORIZED_GROUP_NAME>",
    "sonarqubeDefaultProfileOrGateName": "<YOUR_DEFAULT_PROFILE>",
    "sonarqubeSpecificProfileOrGateName": "<YOUR_SPECIFIC_PROFILE>",
    "sonarqubeProjectName": "<YOUR_DESIRED_SONARQUBE_PROJECT_NAME>",
    "sonarqubeTags": [
      "example_tag1",
      "example_tag2",
      "example_tag3"
    ],
    "preArchiveCommands": [
      "cd packages/infra && cat cdk.context.json | jq 'del(.sonarqubeScannerConfig)' > cdk.context.json"
    ]
  }
}
```

Add the following snippet to the PDKPipeline construct to get sonarqube configured in `packages/infra/src/pipeline-stack.ts`. This will grab the object `sonarqubeScannerConfig` from the cdk context.

```
this.pipeline = new pipeline.PDKPipeline(this, "ApplicationPipeline", {
      ...
      // Optional: if you use SonarQube, you can provide config to execute a code scan here
      sonarCodeScannerConfig: this.node.tryGetContext("sonarqubeScannerConfig"),
    });
```

### Useful Commands

- `npx projen` - Regenerate the project configuration files from the `.projenrc` file.
- `npx nx run @aws/infra:build` - Build the CDK infrastructure package and all its dependencies.
- `npx nx run @aws/infra:deploy-sandbox [--profile <AWS_PROFILE>]` Deploy a standalone instance of the application, useful for development/testing.
- `npx nx run @aws/webapp:dev` - Run the local webapp dev server (prior to first run please read instructions in `packages/webapp/README.md`)

---

## FAQ

### Why are so many files read-only?

This project uses [projen](https://github.com/projen/projen) to manage project configuration files. They should not be manually edited, and instead are
synthesized by code in `.projenrc.ts`.

## Security

See [CONTRIBUTING](CONTRIBUTING.md#security-issue-notifications) for more information.

## License

This library is licensed under the MIT-0 License. See the LICENSE file.
