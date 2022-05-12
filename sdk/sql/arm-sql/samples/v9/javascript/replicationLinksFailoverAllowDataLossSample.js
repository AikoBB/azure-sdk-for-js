/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { SqlManagementClient } = require("@azure/arm-sql");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Sets which replica database is primary by failing over from the current primary replica database. This operation might result in data loss.
 *
 * @summary Sets which replica database is primary by failing over from the current primary replica database. This operation might result in data loss.
 * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/stable/2014-04-01-legacy/examples/ReplicationLinkFailover.json
 */
async function failoverAReplicationLink() {
  const subscriptionId = "00000000-1111-2222-3333-444444444444";
  const resourceGroupName = "sqlcrudtest-8931";
  const serverName = "sqlcrudtest-2137";
  const databaseName = "testdb";
  const linkId = "f0550bf5-07ce-4270-8e4b-71737975973a";
  const credential = new DefaultAzureCredential();
  const client = new SqlManagementClient(credential, subscriptionId);
  const result = await client.replicationLinks.beginFailoverAllowDataLossAndWait(
    resourceGroupName,
    serverName,
    databaseName,
    linkId
  );
  console.log(result);
}

failoverAReplicationLink().catch(console.error);
