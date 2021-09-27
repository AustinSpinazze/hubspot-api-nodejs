/**
 * Blog Post endpoints
 * \"Use these endpoints for interacting with Blog Posts, Blog Authors, and Blog Tags\"
 *
 * OpenAPI spec version: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export class ContentCloneRequestVNext {
    /**
    * The ID of the object to be cloned.
    */
    'id': string;
    /**
    * The name of the cloned object.
    */
    'cloneName'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "cloneName",
            "baseName": "cloneName",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ContentCloneRequestVNext.attributeTypeMap;
    }

    public constructor() {
    }
}

