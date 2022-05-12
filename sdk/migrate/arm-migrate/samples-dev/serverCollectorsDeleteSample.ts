/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { AzureMigrateV2 } from "@azure/arm-migrate";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Delete a Server collector from the project.
 *
 * @summary Delete a Server collector from the project.
 * x-ms-original-file: specification/migrate/resource-manager/Microsoft.Migrate/stable/2019-10-01/examples/ServerCollectors_Delete.json
 */
async function serverCollectorsDelete() {
  const subscriptionId = "4bd2aa0f-2bd2-4d67-91a8-5a4533d58600";
  const resourceGroupName = "pajindtest";
  const projectName = "app11141project";
  const serverCollectorName = "app23df4collector";
  const credential = new DefaultAzureCredential();
  const client = new AzureMigrateV2(credential, subscriptionId);
  const result = await client.serverCollectors.delete(
    resourceGroupName,
    projectName,
    serverCollectorName
  );
  console.log(result);
}

serverCollectorsDelete().catch(console.error);
