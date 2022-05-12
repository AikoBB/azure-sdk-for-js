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
 * This sample demonstrates how to Gets all public IP prefixes in a resource group.
 *
 * @summary Gets all public IP prefixes in a resource group.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2021-05-01/examples/PublicIpPrefixList.json
 */
async function listResourceGroupPublicIPPrefixes() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.publicIPPrefixes.list(resourceGroupName)) {
    resArray.push(item);
  }
  console.log(resArray);
}

listResourceGroupPublicIPPrefixes().catch(console.error);
