/**
 * HubSpot Events API
 * API for accessing CRM object events.
 *
 * OpenAPI spec version: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { NextPage } from './NextPage';
import { HttpFile } from '../http/http';

export class Paging {
    'next'?: NextPage;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "next",
            "baseName": "next",
            "type": "NextPage",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Paging.attributeTypeMap;
    }

    public constructor() {
    }
}

