/**
 * Properties
 * All HubSpot objects store data in default and custom properties. These endpoints provide access to read and modify object properties in HubSpot.
 *
 * OpenAPI spec version: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

/**
* An ID for a group of properties
*/
export class PropertyGroup {
    /**
    * The internal property group name, which must be used when referencing the property group via the API.
    */
    'name': string;
    /**
    * A human-readable label that will be shown in HubSpot.
    */
    'label': string;
    /**
    * Property groups are displayed in order starting with the lowest positive integer value. Values of -1 will cause the property group to be displayed after any positive values.
    */
    'displayOrder': number;
    'archived': boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "label",
            "baseName": "label",
            "type": "string",
            "format": ""
        },
        {
            "name": "displayOrder",
            "baseName": "displayOrder",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "archived",
            "baseName": "archived",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PropertyGroup.attributeTypeMap;
    }

    public constructor() {
    }
}

