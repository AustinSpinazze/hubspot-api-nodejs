/**
 * CRM Imports
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ForwardPaging } from './ForwardPaging';
import { PublicImportError } from './PublicImportError';
import { HttpFile } from '../http/http';

export class CollectionResponsePublicImportErrorForwardPaging {
    'results': Array<PublicImportError>;
    'paging'?: ForwardPaging;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "results",
            "baseName": "results",
            "type": "Array<PublicImportError>",
            "format": ""
        },
        {
            "name": "paging",
            "baseName": "paging",
            "type": "ForwardPaging",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CollectionResponsePublicImportErrorForwardPaging.attributeTypeMap;
    }
    
    public constructor() {
    }
}

