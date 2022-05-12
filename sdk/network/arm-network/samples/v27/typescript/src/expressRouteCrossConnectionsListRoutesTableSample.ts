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
 * This sample demonstrates how to Gets the currently advertised routes table associated with the express route cross connection in a resource group.
 *
 * @summary Gets the currently advertised routes table associated with the express route cross connection in a resource group.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2021-05-01/examples/ExpressRouteCrossConnectionsRouteTable.json
 */
async function getExpressRouteCrossConnectionsRouteTable() {
  const subscriptionId = "subid";
  const resourceGroupName = "CrossConnection-SiliconValley";
  const crossConnectionName = "<circuitServiceKey>";
  const peeringName = "AzurePrivatePeering";
  const devicePath = "primary";
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.expressRouteCrossConnections.beginListRoutesTableAndWait(
    resourceGroupName,
    crossConnectionName,
    peeringName,
    devicePath
  );
  console.log(result);
}

getExpressRouteCrossConnectionsRouteTable().catch(console.error);
