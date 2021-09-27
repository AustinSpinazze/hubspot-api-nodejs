/**
 * Calling Extensions API
 * Provides a way for apps to add custom calling options to a contact record. This works in conjunction with the [Calling SDK](#), which is used to build your phone/calling UI. The endpoints here allow your service to appear as an option to HubSpot users when they access the *Call* action on a contact record. Once accessed, your custom phone/calling UI will be displayed in an iframe at the specified URL with the specified dimensions on that record.
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
* Current settings state
*/
export class SettingsResponse {
    /**
    * The name of your calling service to display to users.
    */
    'name': string;
    /**
    * The URL to your phone/calling UI, built with the [Calling SDK](#).
    */
    'url': string;
    /**
    * The target height of the iframe that will contain your phone/calling UI.
    */
    'height': number;
    /**
    * The target width of the iframe that will contain your phone/calling UI.
    */
    'width': number;
    /**
    * When true, your service will appear as an option under the *Call* action in contact records of connected accounts.
    */
    'isReady': boolean;
    /**
    * When true, you are indicating that your service is compatible with engagement v2 service and can be used with custom objects.
    */
    'supportsCustomObjects': boolean;
    /**
    * When this calling extension was created.
    */
    'createdAt': Date;
    /**
    * The last time the settings for this calling extension were modified.
    */
    'updatedAt': Date;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "url",
            "baseName": "url",
            "type": "string",
            "format": ""
        },
        {
            "name": "height",
            "baseName": "height",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "width",
            "baseName": "width",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "isReady",
            "baseName": "isReady",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "supportsCustomObjects",
            "baseName": "supportsCustomObjects",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "updatedAt",
            "baseName": "updatedAt",
            "type": "Date",
            "format": "date-time"
        }    ];

    static getAttributeTypeMap() {
        return SettingsResponse.attributeTypeMap;
    }

    public constructor() {
    }
}

