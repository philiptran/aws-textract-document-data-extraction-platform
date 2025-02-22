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
    AggregateDocumentMetrics,
    AggregateDocumentMetricsFromJSON,
    AggregateDocumentMetricsFromJSONTyped,
    AggregateDocumentMetricsToJSON,
} from './AggregateDocumentMetrics';
import {
    AggregateFormMetrics,
    AggregateFormMetricsFromJSON,
    AggregateFormMetricsFromJSONTyped,
    AggregateFormMetricsToJSON,
} from './AggregateFormMetrics';

/**
 * Aggregated metrics for disclosure data extraction
 * @export
 * @interface AggregateMetrics
 */
export interface AggregateMetrics {
    /**
     * 
     * @type {{ [key: string]: AggregateFormMetrics; }}
     * @memberof AggregateMetrics
     */
    bySchemaId: { [key: string]: AggregateFormMetrics; };
    /**
     * 
     * @type {number}
     * @memberof AggregateMetrics
     */
    averageClassificationTimeMilliseconds?: number;
    /**
     * 
     * @type {number}
     * @memberof AggregateMetrics
     */
    averageClassificationTimePerPageMilliseconds?: number;
    /**
     * 
     * @type {number}
     * @memberof AggregateMetrics
     */
    totalProcessedDocumentCount?: number;
    /**
     * 
     * @type {number}
     * @memberof AggregateMetrics
     */
    totalSuccessfulDocumentCount?: number;
    /**
     * 
     * @type {number}
     * @memberof AggregateMetrics
     */
    totalFailedDocumentCount?: number;
    /**
     * 
     * @type {number}
     * @memberof AggregateMetrics
     */
    averageExtractionAccuracyDistance?: number;
    /**
     * 
     * @type {number}
     * @memberof AggregateMetrics
     */
    averageExtractionAccuracyCorrectness?: number;
    /**
     * 
     * @type {number}
     * @memberof AggregateMetrics
     */
    averageConfidence?: number;
    /**
     * 
     * @type {number}
     * @memberof AggregateMetrics
     */
    averageExtractionTimeMilliseconds?: number;
    /**
     * 
     * @type {number}
     * @memberof AggregateMetrics
     */
    averageExtractionTimePerPageMilliseconds?: number;
    /**
     * 
     * @type {number}
     * @memberof AggregateMetrics
     */
    averageProcessingTimeMilliseconds?: number;
    /**
     * 
     * @type {number}
     * @memberof AggregateMetrics
     */
    averageProcessingTimePerPageMilliseconds?: number;
    /**
     * 
     * @type {number}
     * @memberof AggregateMetrics
     */
    averageWaitForReviewTimeMilliseconds?: number;
    /**
     * 
     * @type {number}
     * @memberof AggregateMetrics
     */
    averageWaitForReviewTimePerPageMilliseconds?: number;
    /**
     * 
     * @type {number}
     * @memberof AggregateMetrics
     */
    averageReviewTimeMilliseconds?: number;
    /**
     * 
     * @type {number}
     * @memberof AggregateMetrics
     */
    averageReviewTimePerPageMilliseconds?: number;
    /**
     * 
     * @type {number}
     * @memberof AggregateMetrics
     */
    averageEndToEndTimeMilliseconds?: number;
    /**
     * 
     * @type {number}
     * @memberof AggregateMetrics
     */
    averageEndToEndTimePerPageMilliseconds?: number;
    /**
     * 
     * @type {number}
     * @memberof AggregateMetrics
     */
    totalProcessedFormCount?: number;
    /**
     * 
     * @type {number}
     * @memberof AggregateMetrics
     */
    totalSuccessfulFormCount?: number;
    /**
     * 
     * @type {number}
     * @memberof AggregateMetrics
     */
    totalFailedFormCount?: number;
}


export function AggregateMetricsFromJSON(json: any): AggregateMetrics {
    return AggregateMetricsFromJSONTyped(json, false);
}

export function AggregateMetricsFromJSONTyped(json: any, ignoreDiscriminator: boolean): AggregateMetrics {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'bySchemaId': (mapValues(json['bySchemaId'], AggregateFormMetricsFromJSON)),
        'averageClassificationTimeMilliseconds': !exists(json, 'averageClassificationTimeMilliseconds') ? undefined : json['averageClassificationTimeMilliseconds'],
        'averageClassificationTimePerPageMilliseconds': !exists(json, 'averageClassificationTimePerPageMilliseconds') ? undefined : json['averageClassificationTimePerPageMilliseconds'],
        'totalProcessedDocumentCount': !exists(json, 'totalProcessedDocumentCount') ? undefined : json['totalProcessedDocumentCount'],
        'totalSuccessfulDocumentCount': !exists(json, 'totalSuccessfulDocumentCount') ? undefined : json['totalSuccessfulDocumentCount'],
        'totalFailedDocumentCount': !exists(json, 'totalFailedDocumentCount') ? undefined : json['totalFailedDocumentCount'],
        'averageExtractionAccuracyDistance': !exists(json, 'averageExtractionAccuracyDistance') ? undefined : json['averageExtractionAccuracyDistance'],
        'averageExtractionAccuracyCorrectness': !exists(json, 'averageExtractionAccuracyCorrectness') ? undefined : json['averageExtractionAccuracyCorrectness'],
        'averageConfidence': !exists(json, 'averageConfidence') ? undefined : json['averageConfidence'],
        'averageExtractionTimeMilliseconds': !exists(json, 'averageExtractionTimeMilliseconds') ? undefined : json['averageExtractionTimeMilliseconds'],
        'averageExtractionTimePerPageMilliseconds': !exists(json, 'averageExtractionTimePerPageMilliseconds') ? undefined : json['averageExtractionTimePerPageMilliseconds'],
        'averageProcessingTimeMilliseconds': !exists(json, 'averageProcessingTimeMilliseconds') ? undefined : json['averageProcessingTimeMilliseconds'],
        'averageProcessingTimePerPageMilliseconds': !exists(json, 'averageProcessingTimePerPageMilliseconds') ? undefined : json['averageProcessingTimePerPageMilliseconds'],
        'averageWaitForReviewTimeMilliseconds': !exists(json, 'averageWaitForReviewTimeMilliseconds') ? undefined : json['averageWaitForReviewTimeMilliseconds'],
        'averageWaitForReviewTimePerPageMilliseconds': !exists(json, 'averageWaitForReviewTimePerPageMilliseconds') ? undefined : json['averageWaitForReviewTimePerPageMilliseconds'],
        'averageReviewTimeMilliseconds': !exists(json, 'averageReviewTimeMilliseconds') ? undefined : json['averageReviewTimeMilliseconds'],
        'averageReviewTimePerPageMilliseconds': !exists(json, 'averageReviewTimePerPageMilliseconds') ? undefined : json['averageReviewTimePerPageMilliseconds'],
        'averageEndToEndTimeMilliseconds': !exists(json, 'averageEndToEndTimeMilliseconds') ? undefined : json['averageEndToEndTimeMilliseconds'],
        'averageEndToEndTimePerPageMilliseconds': !exists(json, 'averageEndToEndTimePerPageMilliseconds') ? undefined : json['averageEndToEndTimePerPageMilliseconds'],
        'totalProcessedFormCount': !exists(json, 'totalProcessedFormCount') ? undefined : json['totalProcessedFormCount'],
        'totalSuccessfulFormCount': !exists(json, 'totalSuccessfulFormCount') ? undefined : json['totalSuccessfulFormCount'],
        'totalFailedFormCount': !exists(json, 'totalFailedFormCount') ? undefined : json['totalFailedFormCount'],
    };
}

export function AggregateMetricsToJSON(value?: AggregateMetrics | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'bySchemaId': (mapValues(value.bySchemaId, AggregateFormMetricsToJSON)),
        'averageClassificationTimeMilliseconds': value.averageClassificationTimeMilliseconds,
        'averageClassificationTimePerPageMilliseconds': value.averageClassificationTimePerPageMilliseconds,
        'totalProcessedDocumentCount': value.totalProcessedDocumentCount,
        'totalSuccessfulDocumentCount': value.totalSuccessfulDocumentCount,
        'totalFailedDocumentCount': value.totalFailedDocumentCount,
        'averageExtractionAccuracyDistance': value.averageExtractionAccuracyDistance,
        'averageExtractionAccuracyCorrectness': value.averageExtractionAccuracyCorrectness,
        'averageConfidence': value.averageConfidence,
        'averageExtractionTimeMilliseconds': value.averageExtractionTimeMilliseconds,
        'averageExtractionTimePerPageMilliseconds': value.averageExtractionTimePerPageMilliseconds,
        'averageProcessingTimeMilliseconds': value.averageProcessingTimeMilliseconds,
        'averageProcessingTimePerPageMilliseconds': value.averageProcessingTimePerPageMilliseconds,
        'averageWaitForReviewTimeMilliseconds': value.averageWaitForReviewTimeMilliseconds,
        'averageWaitForReviewTimePerPageMilliseconds': value.averageWaitForReviewTimePerPageMilliseconds,
        'averageReviewTimeMilliseconds': value.averageReviewTimeMilliseconds,
        'averageReviewTimePerPageMilliseconds': value.averageReviewTimePerPageMilliseconds,
        'averageEndToEndTimeMilliseconds': value.averageEndToEndTimeMilliseconds,
        'averageEndToEndTimePerPageMilliseconds': value.averageEndToEndTimePerPageMilliseconds,
        'totalProcessedFormCount': value.totalProcessedFormCount,
        'totalSuccessfulFormCount': value.totalSuccessfulFormCount,
        'totalFailedFormCount': value.totalFailedFormCount,
    };
}

