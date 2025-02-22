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
    ExtractionExecutionStatus,
    ExtractionExecutionStatusFromJSON,
    ExtractionExecutionStatusFromJSONTyped,
    ExtractionExecutionStatusToJSON,
} from './ExtractionExecutionStatus';

/**
 * Describes the execution of the form data extraction pipeline
 * @export
 * @interface ExtractionExecution
 */
export interface ExtractionExecution {
    /**
     * 
     * @type {string}
     * @memberof ExtractionExecution
     */
    executionId: string;
    /**
     * 
     * @type {ExtractionExecutionStatus}
     * @memberof ExtractionExecution
     */
    status: ExtractionExecutionStatus;
    /**
     * 
     * @type {string}
     * @memberof ExtractionExecution
     */
    statusReason?: string;
}


export function ExtractionExecutionFromJSON(json: any): ExtractionExecution {
    return ExtractionExecutionFromJSONTyped(json, false);
}

export function ExtractionExecutionFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExtractionExecution {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'executionId': json['executionId'],
        'status': ExtractionExecutionStatusFromJSON(json['status']),
        'statusReason': !exists(json, 'statusReason') ? undefined : json['statusReason'],
    };
}

export function ExtractionExecutionToJSON(value?: ExtractionExecution | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'executionId': value.executionId,
        'status': ExtractionExecutionStatusToJSON(value.status),
        'statusReason': value.statusReason,
    };
}

