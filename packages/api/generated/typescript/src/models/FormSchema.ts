/* tslint:disable */
/* eslint-disable */
/**
 * AWS Docs API
 * API for AWS Docs
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    CreateUpdateDetails,
    CreateUpdateDetailsFromJSON,
    CreateUpdateDetailsFromJSONTyped,
    CreateUpdateDetailsToJSON,
} from './CreateUpdateDetails';
import {
    FormJSONSchema,
    FormJSONSchemaFromJSON,
    FormJSONSchemaFromJSONTyped,
    FormJSONSchemaToJSON,
} from './FormJSONSchema';
import {
    FormSchemaInput,
    FormSchemaInputFromJSON,
    FormSchemaInputFromJSONTyped,
    FormSchemaInputToJSON,
} from './FormSchemaInput';

/**
 * A schema defining the structured data expected for a form
 * @export
 * @interface FormSchema
 */
export interface FormSchema {
    /**
     * 
     * @type {string}
     * @memberof FormSchema
     */
    schemaId: string;
    /**
     * The title of the form, as it appears in the form
     * @type {string}
     * @memberof FormSchema
     */
    title: string;
    /**
     * A description of the form and schema
     * @type {string}
     * @memberof FormSchema
     */
    description?: string;
    /**
     * 
     * @type {FormJSONSchema}
     * @memberof FormSchema
     */
    schema: FormJSONSchema;
    /**
     * 
     * @type {string}
     * @memberof FormSchema
     */
    createdBy?: string;
    /**
     * 
     * @type {string}
     * @memberof FormSchema
     */
    updatedBy?: string;
    /**
     * 
     * @type {string}
     * @memberof FormSchema
     */
    createdTimestamp?: string;
    /**
     * 
     * @type {string}
     * @memberof FormSchema
     */
    updatedTimestamp?: string;
}


export function FormSchemaFromJSON(json: any): FormSchema {
    return FormSchemaFromJSONTyped(json, false);
}

export function FormSchemaFromJSONTyped(json: any, ignoreDiscriminator: boolean): FormSchema {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schemaId': json['schemaId'],
        'title': json['title'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'schema': FormJSONSchemaFromJSON(json['schema']),
        'createdBy': !exists(json, 'createdBy') ? undefined : json['createdBy'],
        'updatedBy': !exists(json, 'updatedBy') ? undefined : json['updatedBy'],
        'createdTimestamp': !exists(json, 'createdTimestamp') ? undefined : json['createdTimestamp'],
        'updatedTimestamp': !exists(json, 'updatedTimestamp') ? undefined : json['updatedTimestamp'],
    };
}

export function FormSchemaToJSON(value?: FormSchema | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schemaId': value.schemaId,
        'title': value.title,
        'description': value.description,
        'schema': FormJSONSchemaToJSON(value.schema),
        'createdBy': value.createdBy,
        'updatedBy': value.updatedBy,
        'createdTimestamp': value.createdTimestamp,
        'updatedTimestamp': value.updatedTimestamp,
    };
}

