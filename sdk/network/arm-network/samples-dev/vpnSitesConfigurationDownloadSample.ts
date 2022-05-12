/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import {
  GetVpnSitesConfigurationRequest,
  NetworkManagementClient
} from "@azure/arm-network";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Gives the sas-url to download the configurations for vpn-sites in a resource group.
 *
 * @summary Gives the sas-url to download the configurations for vpn-sites in a resource group.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2021-05-01/examples/VpnSitesConfigurationDownload.json
 */
async function vpnSitesConfigurationDownload() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const virtualWANName = "wan1";
  const request: GetVpnSitesConfigurationRequest = {
    outputBlobSasUrl:
      "https://blobcortextesturl.blob.core.windows.net/folderforconfig/vpnFile?sp=rw&se=2018-01-10T03%3A42%3A04Z&sv=2017-04-17&sig=WvXrT5bDmDFfgHs%2Brz%2BjAu123eRCNE9BO0eQYcPDT7pY%3D&sr=b",
    vpnSites: [
      "/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/vpnSites/abc"
    ]
  };
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.vpnSitesConfiguration.beginDownloadAndWait(
    resourceGroupName,
    virtualWANName,
    request
  );
  console.log(result);
}

vpnSitesConfigurationDownload().catch(console.error);
