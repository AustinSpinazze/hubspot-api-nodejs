/**
 * Custom Workflow Actions
 * Create custom workflow actions
 *
 * OpenAPI spec version: v4
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

/**
* User-facing labels for this custom workflow action.
*/
export class ActionLabels {
    /**
    * A map of input field names to the user-facing labels.
    */
    'inputFieldLabels'?: { [key: string]: string; };
    /**
    * A map of input field names to descriptions for the fields. These will show up as tooltips when users are editing your action.
    */
    'inputFieldDescriptions'?: { [key: string]: string; };
    /**
    * The name of this custom action. This is what will show up when users are selecting an action in the workflows app.
    */
    'actionName': string;
    /**
    * A description for this custom action. This will show up in the action editor along with the input fields.
    */
    'actionDescription'?: string;
    /**
    * The name to be displayed at the top of the action editor in the workflows app.
    */
    'appDisplayName'?: string;
    /**
    * The label to be displayed in the action card of the workflow editor once this custom action has been added to a workflow.
    */
    'actionCardContent'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "inputFieldLabels",
            "baseName": "inputFieldLabels",
            "type": "{ [key: string]: string; }",
            "format": ""
        },
        {
            "name": "inputFieldDescriptions",
            "baseName": "inputFieldDescriptions",
            "type": "{ [key: string]: string; }",
            "format": ""
        },
        {
            "name": "actionName",
            "baseName": "actionName",
            "type": "string",
            "format": ""
        },
        {
            "name": "actionDescription",
            "baseName": "actionDescription",
            "type": "string",
            "format": ""
        },
        {
            "name": "appDisplayName",
            "baseName": "appDisplayName",
            "type": "string",
            "format": ""
        },
        {
            "name": "actionCardContent",
            "baseName": "actionCardContent",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ActionLabels.attributeTypeMap;
    }

    public constructor() {
    }
}

