/**
 * Accounting Extension
 * These APIs allow you to interact with HubSpot's Accounting Extension. It allows you to: * Specify the URLs that HubSpot will use when making webhook requests to your external accounting system. * Respond to webhook calls made to your external accounting system by HubSpot 
 *
 * OpenAPI spec version: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { AccountingExtensionInvoice } from './AccountingExtensionInvoice';
import { HttpFile } from '../http/http';

/**
* A response to a search for invoices.
*/
export class InvoiceSearchResponse {
    /**
    * Designates if the response is a success ('OK') or failure ('ERR').
    */
    'result'?: InvoiceSearchResponseResultEnum;
    /**
    * The list of invoices that matched the search criteria.
    */
    'invoices': Array<AccountingExtensionInvoice>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "result",
            "baseName": "@result",
            "type": "InvoiceSearchResponseResultEnum",
            "format": ""
        },
        {
            "name": "invoices",
            "baseName": "invoices",
            "type": "Array<AccountingExtensionInvoice>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return InvoiceSearchResponse.attributeTypeMap;
    }
    
    public constructor() {
    }
}


export type InvoiceSearchResponseResultEnum = "OK" | "ERR" ;

