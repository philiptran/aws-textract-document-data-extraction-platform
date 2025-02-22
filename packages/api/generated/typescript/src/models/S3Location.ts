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
/**
 * A location in s3
 * @export
 * @interface S3Location
 */
export interface S3Location {
    /**
     * 
     * @type {string}
     * @memberof S3Location
     */
    bucket: string;
    /**
     * 
     * @type {string}
     * @memberof S3Location
     */
    objectKey: string;
}


export function S3LocationFromJSON(json: any): S3Location {
    return S3LocationFromJSONTyped(json, false);
}

export function S3LocationFromJSONTyped(json: any, ignoreDiscriminator: boolean): S3Location {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'bucket': json['bucket'],
        'objectKey': json['objectKey'],
    };
}

export function S3LocationToJSON(value?: S3Location | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'bucket': value.bucket,
        'objectKey': value.objectKey,
    };
}

