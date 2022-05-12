/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { NetworkManagementClient } from "@azure/arm-network";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Deletes the specified custom IP prefix.
 *
 * @summary Deletes the specified custom IP prefix.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2021-05-01/examples/CustomIpPrefixDelete.json
 */
async function deleteCustomIPPrefix() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const customIpPrefixName = "test-customipprefix";
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.customIPPrefixes.beginDeleteAndWait(
    resourceGroupName,
    customIpPrefixName
  );
  console.log(result);
}

deleteCustomIPPrefix().catch(console.error);
