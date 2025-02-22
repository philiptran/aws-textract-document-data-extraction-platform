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

/**
 * 
 * @export
 * @enum {string}
 */
export type ExecutionStatus =
  'IN_PROGRESS' | 
  'SUCCEEDED' | 
  'FAILED'


export function ExecutionStatusFromJSON(json: any): ExecutionStatus {
    return ExecutionStatusFromJSONTyped(json, false);
}

export function ExecutionStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExecutionStatus {
    return json as ExecutionStatus;
}

export function ExecutionStatusToJSON(value?: ExecutionStatus | null): any {
    return value as any;
}

