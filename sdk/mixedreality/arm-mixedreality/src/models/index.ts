/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";

/** Result of the request to list Resource Provider operations. It contains a list of operations and a URL link to get the next set of results. */
export interface OperationPage {
  /** List of operations supported by the Resource Provider. */
  value?: Operation[];
  /** URL to get the next set of operation list results if there are any. */
  nextLink?: string;
}

/** REST API operation */
export interface Operation {
  /** Operation name: {provider}/{resource}/{operation} */
  name?: string;
  /** The object that represents the operation. */
  display?: OperationDisplay;
  /** Whether or not this is a data plane operation */
  isDataAction?: boolean;
  /** The origin */
  origin?: string;
  /** Properties of the operation */
  properties?: OperationProperties;
}

/** The object that represents the operation. */
export interface OperationDisplay {
  /** Service provider: Microsoft.ResourceProvider */
  provider: string;
  /** Resource on which the operation is performed: Profile, endpoint, etc. */
  resource: string;
  /** Operation type: Read, write, delete, etc. */
  operation: string;
  /** Description of operation */
  description: string;
}

/** Operation properties. */
export interface OperationProperties {
  /** Service specification. */
  serviceSpecification?: ServiceSpecification;
}

/** Service specification payload */
export interface ServiceSpecification {
  /** Specifications of the Log for Azure Monitoring */
  logSpecifications?: LogSpecification[];
  /** Specifications of the Metrics for Azure Monitoring */
  metricSpecifications?: MetricSpecification[];
}

/** Specifications of the Log for Azure Monitoring */
export interface LogSpecification {
  /** Name of the log */
  name?: string;
  /** Localized friendly display name of the log */
  displayName?: string;
  /** Blob duration of the log */
  blobDuration?: string;
}

/** Specifications of the Metrics for Azure Monitoring */
export interface MetricSpecification {
  /** Name of the metric */
  name?: string;
  /** Localized friendly display name of the metric */
  displayName?: string;
  /** Localized friendly description of the metric */
  displayDescription?: string;
  /** Unit that makes sense for the metric */
  unit?: string;
  /** Only provide one value for this field. Valid values: Average, Minimum, Maximum, Total, Count. */
  aggregationType?: string;
  /** Supported aggregation types. Valid values: Average, Minimum, Maximum, Total, Count. */
  supportedAggregationTypes?: string[];
  /** Supported time grains. Valid values: PT1M, PT5M, PT15M, PT30M, PT1H, PT6H, PT12H, P1D */
  supportedTimeGrainTypes?: string[];
  /** Flag to indicate use of regional Mdm accounts */
  enableRegionalMdmAccount?: boolean;
  /** Source mdm account */
  sourceMdmAccount?: string;
  /** Source mdm namespace */
  sourceMdmNamespace?: string;
  /** Metric filter regex pattern */
  metricFilterPattern?: string;
  /** Flag to determine is Zero is returned for time duration where no metric is emitted */
  fillGapWithZero?: boolean;
  /** Metric category */
  category?: string;
  /** Internal metric name. */
  internalMetricName?: string;
  /** Dimensions of the metric */
  dimensions?: MetricDimension[];
  /** Locked aggregation type of the metric */
  lockedAggregationType?: string;
}

/** Specifications of the Dimension of metrics */
export interface MetricDimension {
  /** Name of the dimension */
  name?: string;
  /** Localized friendly display name of the dimension */
  displayName?: string;
  /** Internal name of the dimension. */
  internalName?: string;
  /** Flag to indicate export for Shoebox */
  toBeExportedForShoebox?: boolean;
}

/** An Error response. */
export interface CloudError {
  /** An Error response. */
  error?: CloudErrorBody;
}

/** An error response from Azure. */
export interface CloudErrorBody {
  /** An identifier for the error. Codes are invariant and are intended to be consumed programmatically. */
  code?: string;
  /** A message describing the error, intended to be suitable for displaying in a user interface. */
  message?: string;
  /** The target of the particular error. For example, the name of the property in error. */
  target?: string;
  /** A list of additional details about the error. */
  details?: CloudErrorBody[];
}

/** Check Name Availability Request */
export interface CheckNameAvailabilityRequest {
  /** Resource Name To Verify */
  name: string;
  /** Fully qualified resource type which includes provider namespace */
  type: string;
}

/** Check Name Availability Response */
export interface CheckNameAvailabilityResponse {
  /** if name Available */
  nameAvailable: boolean;
  /** Resource Name To Verify */
  reason?: NameUnavailableReason;
  /** detail message */
  message?: string;
}

/** Result of the request to get resource collection. It contains a list of resources and a URL link to get the next set of results. */
export interface SpatialAnchorsAccountPage {
  /** List of resources supported by the Resource Provider. */
  value?: SpatialAnchorsAccount[];
  /** URL to get the next set of resource list results if there are any. */
  nextLink?: string;
}

/** Identity for the resource. */
export interface Identity {
  /**
   * The principal ID of resource identity.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly principalId?: string;
  /**
   * The tenant ID of resource.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly tenantId?: string;
  /** The identity type. */
  type?: "SystemAssigned";
}

/** The resource model definition representing SKU */
export interface Sku {
  /** The name of the SKU. Ex - P3. It is typically a letter+number code */
  name: string;
  /** This field is required to be implemented by the Resource Provider if the service has more than one tier, but is not required on a PUT. */
  tier?: SkuTier;
  /** The SKU size. When the name field is the combination of tier and some other value, this would be the standalone code. */
  size?: string;
  /** If the service has different generations of hardware, for the same SKU, then that can be captured here. */
  family?: string;
  /** If the SKU supports scale out/in then the capacity integer should be included. If scale out/in is not possible for the resource this may be omitted. */
  capacity?: number;
}

/** Metadata pertaining to creation and last modification of the resource. */
export interface SystemData {
  /** The identity that created the resource. */
  createdBy?: string;
  /** The type of identity that created the resource. */
  createdByType?: CreatedByType;
  /** The timestamp of resource creation (UTC). */
  createdAt?: Date;
  /** The identity that last modified the resource. */
  lastModifiedBy?: string;
  /** The type of identity that last modified the resource. */
  lastModifiedByType?: CreatedByType;
  /** The timestamp of resource last modification (UTC) */
  lastModifiedAt?: Date;
}

/** Common fields that are returned in the response for all Azure Resource Manager resources */
export interface Resource {
  /**
   * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly id?: string;
  /**
   * The name of the resource
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly name?: string;
  /**
   * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly type?: string;
}

/** Developer Keys of account */
export interface AccountKeys {
  /**
   * value of primary key.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly primaryKey?: string;
  /**
   * value of secondary key.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly secondaryKey?: string;
}

/** Request for account key regeneration */
export interface AccountKeyRegenerateRequest {
  /** Serial of key to be regenerated */
  serial?: Serial;
}

/** Result of the request to get resource collection. It contains a list of resources and a URL link to get the next set of results. */
export interface RemoteRenderingAccountPage {
  /** List of resources supported by the Resource Provider. */
  value?: RemoteRenderingAccount[];
  /** URL to get the next set of resource list results if there are any. */
  nextLink?: string;
}

/** Result of the request to get resource collection. It contains a list of resources and a URL link to get the next set of results. */
export interface ObjectAnchorsAccountPage {
  /** List of resources supported by the Resource Provider. */
  value?: ObjectAnchorsAccount[];
  /** URL to get the next set of resource list results if there are any. */
  nextLink?: string;
}

export type ObjectAnchorsAccountIdentity = Identity & {};

/** The resource model definition for an Azure Resource Manager tracked top level resource which has 'tags' and a 'location' */
export type TrackedResource = Resource & {
  /** Resource tags. */
  tags?: { [propertyName: string]: string };
  /** The geo-location where the resource lives */
  location: string;
};

/** SpatialAnchorsAccount Response. */
export type SpatialAnchorsAccount = TrackedResource & {
  /** The identity associated with this account */
  identity?: Identity;
  /** The plan associated with this account */
  plan?: Identity;
  /** The sku associated with this account */
  sku?: Sku;
  /** The kind of account, if supported */
  kind?: Sku;
  /**
   * System metadata for this account
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly systemData?: SystemData;
  /** The name of the storage account associated with this accountId */
  storageAccountName?: string;
  /**
   * unique id of certain account.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly accountId?: string;
  /**
   * Correspond domain name of certain Spatial Anchors Account
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly accountDomain?: string;
};

/** RemoteRenderingAccount Response. */
export type RemoteRenderingAccount = TrackedResource & {
  /** The identity associated with this account */
  identity?: Identity;
  /** The plan associated with this account */
  plan?: Identity;
  /** The sku associated with this account */
  sku?: Sku;
  /** The kind of account, if supported */
  kind?: Sku;
  /**
   * System metadata for this account
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly systemData?: SystemData;
  /** The name of the storage account associated with this accountId */
  storageAccountName?: string;
  /**
   * unique id of certain account.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly accountId?: string;
  /**
   * Correspond domain name of certain Spatial Anchors Account
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly accountDomain?: string;
};

/** ObjectAnchorsAccount Response. */
export type ObjectAnchorsAccount = TrackedResource & {
  identity?: ObjectAnchorsAccountIdentity;
  /** The plan associated with this account */
  plan?: Identity;
  /** The sku associated with this account */
  sku?: Sku;
  /** The kind of account, if supported */
  kind?: Sku;
  /**
   * The system metadata related to an object anchors account.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly systemData?: SystemData;
  /** The name of the storage account associated with this accountId */
  storageAccountName?: string;
  /**
   * unique id of certain account.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly accountId?: string;
  /**
   * Correspond domain name of certain Spatial Anchors Account
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly accountDomain?: string;
};

/** Known values of {@link NameUnavailableReason} that the service accepts. */
export enum KnownNameUnavailableReason {
  Invalid = "Invalid",
  AlreadyExists = "AlreadyExists"
}

/**
 * Defines values for NameUnavailableReason. \
 * {@link KnownNameUnavailableReason} can be used interchangeably with NameUnavailableReason,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Invalid** \
 * **AlreadyExists**
 */
export type NameUnavailableReason = string;

/** Known values of {@link CreatedByType} that the service accepts. */
export enum KnownCreatedByType {
  User = "User",
  Application = "Application",
  ManagedIdentity = "ManagedIdentity",
  Key = "Key"
}

/**
 * Defines values for CreatedByType. \
 * {@link KnownCreatedByType} can be used interchangeably with CreatedByType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **User** \
 * **Application** \
 * **ManagedIdentity** \
 * **Key**
 */
export type CreatedByType = string;
/** Defines values for SkuTier. */
export type SkuTier = "Free" | "Basic" | "Standard" | "Premium";
/** Defines values for Serial. */
export type Serial = 1 | 2;

/** Optional parameters. */
export interface OperationsListOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the list operation. */
export type OperationsListResponse = OperationPage;

/** Optional parameters. */
export interface OperationsListNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listNext operation. */
export type OperationsListNextResponse = OperationPage;

/** Optional parameters. */
export interface CheckNameAvailabilityLocalOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the checkNameAvailabilityLocal operation. */
export type CheckNameAvailabilityLocalResponse = CheckNameAvailabilityResponse;

/** Optional parameters. */
export interface SpatialAnchorsAccountsListBySubscriptionOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listBySubscription operation. */
export type SpatialAnchorsAccountsListBySubscriptionResponse = SpatialAnchorsAccountPage;

/** Optional parameters. */
export interface SpatialAnchorsAccountsListByResourceGroupOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listByResourceGroup operation. */
export type SpatialAnchorsAccountsListByResourceGroupResponse = SpatialAnchorsAccountPage;

/** Optional parameters. */
export interface SpatialAnchorsAccountsDeleteOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface SpatialAnchorsAccountsGetOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type SpatialAnchorsAccountsGetResponse = SpatialAnchorsAccount;

/** Optional parameters. */
export interface SpatialAnchorsAccountsUpdateOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the update operation. */
export type SpatialAnchorsAccountsUpdateResponse = SpatialAnchorsAccount;

/** Optional parameters. */
export interface SpatialAnchorsAccountsCreateOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the create operation. */
export type SpatialAnchorsAccountsCreateResponse = SpatialAnchorsAccount;

/** Optional parameters. */
export interface SpatialAnchorsAccountsListKeysOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listKeys operation. */
export type SpatialAnchorsAccountsListKeysResponse = AccountKeys;

/** Optional parameters. */
export interface SpatialAnchorsAccountsRegenerateKeysOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the regenerateKeys operation. */
export type SpatialAnchorsAccountsRegenerateKeysResponse = AccountKeys;

/** Optional parameters. */
export interface SpatialAnchorsAccountsListBySubscriptionNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listBySubscriptionNext operation. */
export type SpatialAnchorsAccountsListBySubscriptionNextResponse = SpatialAnchorsAccountPage;

/** Optional parameters. */
export interface SpatialAnchorsAccountsListByResourceGroupNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listByResourceGroupNext operation. */
export type SpatialAnchorsAccountsListByResourceGroupNextResponse = SpatialAnchorsAccountPage;

/** Optional parameters. */
export interface RemoteRenderingAccountsListBySubscriptionOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listBySubscription operation. */
export type RemoteRenderingAccountsListBySubscriptionResponse = RemoteRenderingAccountPage;

/** Optional parameters. */
export interface RemoteRenderingAccountsListByResourceGroupOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listByResourceGroup operation. */
export type RemoteRenderingAccountsListByResourceGroupResponse = RemoteRenderingAccountPage;

/** Optional parameters. */
export interface RemoteRenderingAccountsDeleteOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface RemoteRenderingAccountsGetOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type RemoteRenderingAccountsGetResponse = RemoteRenderingAccount;

/** Optional parameters. */
export interface RemoteRenderingAccountsUpdateOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the update operation. */
export type RemoteRenderingAccountsUpdateResponse = RemoteRenderingAccount;

/** Optional parameters. */
export interface RemoteRenderingAccountsCreateOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the create operation. */
export type RemoteRenderingAccountsCreateResponse = RemoteRenderingAccount;

/** Optional parameters. */
export interface RemoteRenderingAccountsListKeysOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listKeys operation. */
export type RemoteRenderingAccountsListKeysResponse = AccountKeys;

/** Optional parameters. */
export interface RemoteRenderingAccountsRegenerateKeysOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the regenerateKeys operation. */
export type RemoteRenderingAccountsRegenerateKeysResponse = AccountKeys;

/** Optional parameters. */
export interface RemoteRenderingAccountsListBySubscriptionNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listBySubscriptionNext operation. */
export type RemoteRenderingAccountsListBySubscriptionNextResponse = RemoteRenderingAccountPage;

/** Optional parameters. */
export interface RemoteRenderingAccountsListByResourceGroupNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listByResourceGroupNext operation. */
export type RemoteRenderingAccountsListByResourceGroupNextResponse = RemoteRenderingAccountPage;

/** Optional parameters. */
export interface ObjectAnchorsAccountsListBySubscriptionOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listBySubscription operation. */
export type ObjectAnchorsAccountsListBySubscriptionResponse = ObjectAnchorsAccountPage;

/** Optional parameters. */
export interface ObjectAnchorsAccountsListByResourceGroupOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listByResourceGroup operation. */
export type ObjectAnchorsAccountsListByResourceGroupResponse = ObjectAnchorsAccountPage;

/** Optional parameters. */
export interface ObjectAnchorsAccountsDeleteOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface ObjectAnchorsAccountsGetOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type ObjectAnchorsAccountsGetResponse = ObjectAnchorsAccount;

/** Optional parameters. */
export interface ObjectAnchorsAccountsUpdateOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the update operation. */
export type ObjectAnchorsAccountsUpdateResponse = ObjectAnchorsAccount;

/** Optional parameters. */
export interface ObjectAnchorsAccountsCreateOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the create operation. */
export type ObjectAnchorsAccountsCreateResponse = ObjectAnchorsAccount;

/** Optional parameters. */
export interface ObjectAnchorsAccountsListKeysOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listKeys operation. */
export type ObjectAnchorsAccountsListKeysResponse = AccountKeys;

/** Optional parameters. */
export interface ObjectAnchorsAccountsRegenerateKeysOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the regenerateKeys operation. */
export type ObjectAnchorsAccountsRegenerateKeysResponse = AccountKeys;

/** Optional parameters. */
export interface ObjectAnchorsAccountsListBySubscriptionNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listBySubscriptionNext operation. */
export type ObjectAnchorsAccountsListBySubscriptionNextResponse = ObjectAnchorsAccountPage;

/** Optional parameters. */
export interface ObjectAnchorsAccountsListByResourceGroupNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listByResourceGroupNext operation. */
export type ObjectAnchorsAccountsListByResourceGroupNextResponse = ObjectAnchorsAccountPage;

/** Optional parameters. */
export interface MixedRealityClientOptionalParams
  extends coreClient.ServiceClientOptions {
  /** server parameter */
  $host?: string;
  /** Api Version */
  apiVersion?: string;
  /** Overrides client endpoint. */
  endpoint?: string;
}
