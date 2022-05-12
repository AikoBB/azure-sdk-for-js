/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { ServerConnectionPolicies } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { SqlManagementClient } from "../sqlManagementClient";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  ServerConnectionPolicy,
  ServerConnectionPoliciesListByServerNextOptionalParams,
  ServerConnectionPoliciesListByServerOptionalParams,
  ConnectionPolicyName,
  ServerConnectionPoliciesGetOptionalParams,
  ServerConnectionPoliciesGetResponse,
  ServerConnectionPoliciesCreateOrUpdateOptionalParams,
  ServerConnectionPoliciesCreateOrUpdateResponse,
  ServerConnectionPoliciesListByServerResponse,
  ServerConnectionPoliciesListByServerNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing ServerConnectionPolicies operations. */
export class ServerConnectionPoliciesImpl implements ServerConnectionPolicies {
  private readonly client: SqlManagementClient;

  /**
   * Initialize a new instance of the class ServerConnectionPolicies class.
   * @param client Reference to the service client
   */
  constructor(client: SqlManagementClient) {
    this.client = client;
  }

  /**
   * Lists connection policy
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param options The options parameters.
   */
  public listByServer(
    resourceGroupName: string,
    serverName: string,
    options?: ServerConnectionPoliciesListByServerOptionalParams
  ): PagedAsyncIterableIterator<ServerConnectionPolicy> {
    const iter = this.listByServerPagingAll(
      resourceGroupName,
      serverName,
      options
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listByServerPagingPage(
          resourceGroupName,
          serverName,
          options
        );
      }
    };
  }

  private async *listByServerPagingPage(
    resourceGroupName: string,
    serverName: string,
    options?: ServerConnectionPoliciesListByServerOptionalParams
  ): AsyncIterableIterator<ServerConnectionPolicy[]> {
    let result = await this._listByServer(
      resourceGroupName,
      serverName,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listByServerNext(
        resourceGroupName,
        serverName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listByServerPagingAll(
    resourceGroupName: string,
    serverName: string,
    options?: ServerConnectionPoliciesListByServerOptionalParams
  ): AsyncIterableIterator<ServerConnectionPolicy> {
    for await (const page of this.listByServerPagingPage(
      resourceGroupName,
      serverName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Gets a server connection policy
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param connectionPolicyName The name of the connection policy.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serverName: string,
    connectionPolicyName: ConnectionPolicyName,
    options?: ServerConnectionPoliciesGetOptionalParams
  ): Promise<ServerConnectionPoliciesGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serverName, connectionPolicyName, options },
      getOperationSpec
    );
  }

  /**
   * Updates a server connection policy
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param connectionPolicyName The name of the connection policy.
   * @param parameters The required parameters for updating a server connection policy.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    serverName: string,
    connectionPolicyName: ConnectionPolicyName,
    parameters: ServerConnectionPolicy,
    options?: ServerConnectionPoliciesCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<ServerConnectionPoliciesCreateOrUpdateResponse>,
      ServerConnectionPoliciesCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<ServerConnectionPoliciesCreateOrUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      {
        resourceGroupName,
        serverName,
        connectionPolicyName,
        parameters,
        options
      },
      createOrUpdateOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Updates a server connection policy
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param connectionPolicyName The name of the connection policy.
   * @param parameters The required parameters for updating a server connection policy.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    serverName: string,
    connectionPolicyName: ConnectionPolicyName,
    parameters: ServerConnectionPolicy,
    options?: ServerConnectionPoliciesCreateOrUpdateOptionalParams
  ): Promise<ServerConnectionPoliciesCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      serverName,
      connectionPolicyName,
      parameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Lists connection policy
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param options The options parameters.
   */
  private _listByServer(
    resourceGroupName: string,
    serverName: string,
    options?: ServerConnectionPoliciesListByServerOptionalParams
  ): Promise<ServerConnectionPoliciesListByServerResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serverName, options },
      listByServerOperationSpec
    );
  }

  /**
   * ListByServerNext
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param nextLink The nextLink from the previous successful call to the ListByServer method.
   * @param options The options parameters.
   */
  private _listByServerNext(
    resourceGroupName: string,
    serverName: string,
    nextLink: string,
    options?: ServerConnectionPoliciesListByServerNextOptionalParams
  ): Promise<ServerConnectionPoliciesListByServerNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serverName, nextLink, options },
      listByServerNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/connectionPolicies/{connectionPolicyName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ServerConnectionPolicy
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.connectionPolicyName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/connectionPolicies/{connectionPolicyName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.ServerConnectionPolicy
    },
    201: {
      bodyMapper: Mappers.ServerConnectionPolicy
    },
    202: {
      bodyMapper: Mappers.ServerConnectionPolicy
    },
    204: {
      bodyMapper: Mappers.ServerConnectionPolicy
    },
    default: {}
  },
  requestBody: Parameters.parameters88,
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.connectionPolicyName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listByServerOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/connectionPolicies",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ServerConnectionPolicyListResult
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByServerNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ServerConnectionPolicyListResult
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
