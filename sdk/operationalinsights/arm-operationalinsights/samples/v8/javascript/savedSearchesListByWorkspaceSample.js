/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { OperationalInsightsManagementClient } = require("@azure/arm-operationalinsights");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Gets the saved searches for a given Log Analytics Workspace
 *
 * @summary Gets the saved searches for a given Log Analytics Workspace
 * x-ms-original-file: specification/operationalinsights/resource-manager/Microsoft.OperationalInsights/stable/2020-08-01/examples/SavedSearchesListByWorkspace.json
 */
async function savedSearchesList() {
  const subscriptionId = "00000000-0000-0000-0000-00000000000";
  const resourceGroupName = "TestRG";
  const workspaceName = "TestWS";
  const credential = new DefaultAzureCredential();
  const client = new OperationalInsightsManagementClient(credential, subscriptionId);
  const result = await client.savedSearches.listByWorkspace(resourceGroupName, workspaceName);
  console.log(result);
}

savedSearchesList().catch(console.error);
