/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { AzureMigrateV2 } = require("@azure/arm-migrate");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Get a Hyper-V collector.
 *
 * @summary Get a Hyper-V collector.
 * x-ms-original-file: specification/migrate/resource-manager/Microsoft.Migrate/stable/2019-10-01/examples/HyperVCollectors_Get.json
 */
async function hyperVCollectorsGet() {
  const subscriptionId = "8c3c936a-c09b-4de3-830b-3f5f244d72e9";
  const resourceGroupName = "contosoithyperv";
  const projectName = "migrateprojectce73project";
  const hyperVCollectorName = "migrateprojectce73collector";
  const credential = new DefaultAzureCredential();
  const client = new AzureMigrateV2(credential, subscriptionId);
  const result = await client.hyperVCollectors.get(
    resourceGroupName,
    projectName,
    hyperVCollectorName
  );
  console.log(result);
}

hyperVCollectorsGet().catch(console.error);
