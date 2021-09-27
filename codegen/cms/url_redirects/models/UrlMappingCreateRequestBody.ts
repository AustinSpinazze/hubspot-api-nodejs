/**
 * URL redirects
 * URL redirect operations
 *
 * OpenAPI spec version: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export class UrlMappingCreateRequestBody {
    'routePrefix': string;
    'destination': string;
    'redirectStyle': number;
    'precedence'?: number;
    'isOnlyAfterNotFound'?: boolean;
    'isMatchFullUrl'?: boolean;
    'isMatchQueryString'?: boolean;
    'isPattern'?: boolean;
    'isTrailingSlashOptional'?: boolean;
    'isProtocolAgnostic'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "routePrefix",
            "baseName": "routePrefix",
            "type": "string",
            "format": ""
        },
        {
            "name": "destination",
            "baseName": "destination",
            "type": "string",
            "format": ""
        },
        {
            "name": "redirectStyle",
            "baseName": "redirectStyle",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "precedence",
            "baseName": "precedence",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "isOnlyAfterNotFound",
            "baseName": "isOnlyAfterNotFound",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "isMatchFullUrl",
            "baseName": "isMatchFullUrl",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "isMatchQueryString",
            "baseName": "isMatchQueryString",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "isPattern",
            "baseName": "isPattern",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "isTrailingSlashOptional",
            "baseName": "isTrailingSlashOptional",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "isProtocolAgnostic",
            "baseName": "isProtocolAgnostic",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return UrlMappingCreateRequestBody.attributeTypeMap;
    }

    public constructor() {
    }
}

