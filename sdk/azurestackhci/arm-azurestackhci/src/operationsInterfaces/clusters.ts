/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { PollerLike, PollOperationState } from "@azure/core-lro";
import {
  Cluster,
  ClustersListBySubscriptionOptionalParams,
  ClustersListByResourceGroupOptionalParams,
  ClustersGetOptionalParams,
  ClustersGetResponse,
  ClustersCreateOptionalParams,
  ClustersCreateResponse,
  ClusterPatch,
  ClustersUpdateOptionalParams,
  ClustersUpdateResponse,
  ClustersDeleteOptionalParams,
  UploadCertificateRequest,
  ClustersUploadCertificateOptionalParams,
  ClustersCreateIdentityOptionalParams,
  ClustersCreateIdentityResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Clusters. */
export interface Clusters {
  /**
   * List all HCI clusters in a subscription.
   * @param options The options parameters.
   */
  listBySubscription(
    options?: ClustersListBySubscriptionOptionalParams
  ): PagedAsyncIterableIterator<Cluster>;
  /**
   * List all HCI clusters in a resource group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  listByResourceGroup(
    resourceGroupName: string,
    options?: ClustersListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<Cluster>;
  /**
   * Get HCI cluster.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the cluster.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    clusterName: string,
    options?: ClustersGetOptionalParams
  ): Promise<ClustersGetResponse>;
  /**
   * Create an HCI cluster.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the cluster.
   * @param cluster Details of the HCI cluster.
   * @param options The options parameters.
   */
  create(
    resourceGroupName: string,
    clusterName: string,
    cluster: Cluster,
    options?: ClustersCreateOptionalParams
  ): Promise<ClustersCreateResponse>;
  /**
   * Update an HCI cluster.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the cluster.
   * @param cluster Details of the HCI cluster.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    clusterName: string,
    cluster: ClusterPatch,
    options?: ClustersUpdateOptionalParams
  ): Promise<ClustersUpdateResponse>;
  /**
   * Delete an HCI cluster.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the cluster.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    clusterName: string,
    options?: ClustersDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Delete an HCI cluster.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the cluster.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    clusterName: string,
    options?: ClustersDeleteOptionalParams
  ): Promise<void>;
  /**
   * Upload certificate.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the cluster.
   * @param uploadCertificateRequest Upload certificate request.
   * @param options The options parameters.
   */
  beginUploadCertificate(
    resourceGroupName: string,
    clusterName: string,
    uploadCertificateRequest: UploadCertificateRequest,
    options?: ClustersUploadCertificateOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Upload certificate.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the cluster.
   * @param uploadCertificateRequest Upload certificate request.
   * @param options The options parameters.
   */
  beginUploadCertificateAndWait(
    resourceGroupName: string,
    clusterName: string,
    uploadCertificateRequest: UploadCertificateRequest,
    options?: ClustersUploadCertificateOptionalParams
  ): Promise<void>;
  /**
   * Create cluster identity.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the cluster.
   * @param options The options parameters.
   */
  beginCreateIdentity(
    resourceGroupName: string,
    clusterName: string,
    options?: ClustersCreateIdentityOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<ClustersCreateIdentityResponse>,
      ClustersCreateIdentityResponse
    >
  >;
  /**
   * Create cluster identity.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the cluster.
   * @param options The options parameters.
   */
  beginCreateIdentityAndWait(
    resourceGroupName: string,
    clusterName: string,
    options?: ClustersCreateIdentityOptionalParams
  ): Promise<ClustersCreateIdentityResponse>;
}
