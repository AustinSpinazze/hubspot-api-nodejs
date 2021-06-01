// TODO: better import syntax?
import { BaseAPIRequestFactory, RequiredError } from './baseapi';
import {Configuration} from '../configuration';
import { RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import * as FormData from "form-data";
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {isCodeInRange} from '../util';

import { PublicPerformanceResponse } from '../models/PublicPerformanceResponse';

/**
 * no description
 */
export class DefaultApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Returns time series data website performance data for the given domain and/or path.
     * View your website's performance.
     * @param domain The domain to search return data for.
     * @param path The url path of the domain to return data for.
     * @param pad Specifies whether the time series data should have empty intervals if performance data is not present to create a continuous set.
     * @param sum Specifies whether the time series data should be summated for the given period. Defaults to false.
     * @param period A relative period to return time series data for. This value is ignored if start and/or end are provided. Valid periods: [15m, 30m, 1h, 4h, 12h, 1d, 1w]
     * @param interval The time series interval to group data by. Valid intervals: [1m, 5m, 15m, 30m, 1h, 4h, 12h, 1d, 1w]
     * @param start A timestamp in milliseconds that indicates the start of the time period.
     * @param end A timestamp in milliseconds that indicates the end of the time period.
     */
    public async getPage(domain?: string, path?: string, pad?: boolean, sum?: boolean, period?: string, interval?: string, start?: number, end?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;









        // Path Params
        const localVarPath = '/cms/v3/performance/';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (domain !== undefined) {
            requestContext.setQueryParam("domain", ObjectSerializer.serialize(domain, "string", ""));
        }
        if (path !== undefined) {
            requestContext.setQueryParam("path", ObjectSerializer.serialize(path, "string", ""));
        }
        if (pad !== undefined) {
            requestContext.setQueryParam("pad", ObjectSerializer.serialize(pad, "boolean", ""));
        }
        if (sum !== undefined) {
            requestContext.setQueryParam("sum", ObjectSerializer.serialize(sum, "boolean", ""));
        }
        if (period !== undefined) {
            requestContext.setQueryParam("period", ObjectSerializer.serialize(period, "string", ""));
        }
        if (interval !== undefined) {
            requestContext.setQueryParam("interval", ObjectSerializer.serialize(interval, "string", ""));
        }
        if (start !== undefined) {
            requestContext.setQueryParam("start", ObjectSerializer.serialize(start, "number", "int64"));
        }
        if (end !== undefined) {
            requestContext.setQueryParam("end", ObjectSerializer.serialize(end, "number", "int64"));
        }

        // Header Params

        // Form Params


        // Body Params

        let authMethod = null;
        // Apply auth methods
        authMethod = _config.authMethods["hapikey"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Returns uptime time series website performance data for the given domain.
     * View your website's uptime.
     * @param domain The domain to search return data for.
     * @param path 
     * @param pad Specifies whether the time series data should have empty intervals if performance data is not present to create a continuous set.
     * @param sum Specifies whether the time series data should be summated for the given period. Defaults to false.
     * @param period A relative period to return time series data for. This value is ignored if start and/or end are provided. Valid periods: [15m, 30m, 1h, 4h, 12h, 1d, 1w]
     * @param interval The time series interval to group data by. Valid intervals: [1m, 5m, 15m, 30m, 1h, 4h, 12h, 1d, 1w]
     * @param start A timestamp in milliseconds that indicates the start of the time period.
     * @param end A timestamp in milliseconds that indicates the end of the time period.
     */
    public async getUptime(domain?: string, path?: string, pad?: boolean, sum?: boolean, period?: string, interval?: string, start?: number, end?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;









        // Path Params
        const localVarPath = '/cms/v3/performance/uptime';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (domain !== undefined) {
            requestContext.setQueryParam("domain", ObjectSerializer.serialize(domain, "string", ""));
        }
        if (path !== undefined) {
            requestContext.setQueryParam("path", ObjectSerializer.serialize(path, "string", ""));
        }
        if (pad !== undefined) {
            requestContext.setQueryParam("pad", ObjectSerializer.serialize(pad, "boolean", ""));
        }
        if (sum !== undefined) {
            requestContext.setQueryParam("sum", ObjectSerializer.serialize(sum, "boolean", ""));
        }
        if (period !== undefined) {
            requestContext.setQueryParam("period", ObjectSerializer.serialize(period, "string", ""));
        }
        if (interval !== undefined) {
            requestContext.setQueryParam("interval", ObjectSerializer.serialize(interval, "string", ""));
        }
        if (start !== undefined) {
            requestContext.setQueryParam("start", ObjectSerializer.serialize(start, "number", "int64"));
        }
        if (end !== undefined) {
            requestContext.setQueryParam("end", ObjectSerializer.serialize(end, "number", "int64"));
        }

        // Header Params

        // Form Params


        // Body Params

        let authMethod = null;
        // Apply auth methods
        authMethod = _config.authMethods["hapikey"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class DefaultApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getPage
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getPage(response: ResponseContext): Promise<PublicPerformanceResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PublicPerformanceResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PublicPerformanceResponse", ""
            ) as PublicPerformanceResponse;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: Error = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Error", ""
            ) as Error;
            throw new ApiException<Error>(0, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: PublicPerformanceResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PublicPerformanceResponse", ""
            ) as PublicPerformanceResponse;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getUptime
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getUptime(response: ResponseContext): Promise<PublicPerformanceResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PublicPerformanceResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PublicPerformanceResponse", ""
            ) as PublicPerformanceResponse;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: Error = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Error", ""
            ) as Error;
            throw new ApiException<Error>(0, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: PublicPerformanceResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PublicPerformanceResponse", ""
            ) as PublicPerformanceResponse;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

}
