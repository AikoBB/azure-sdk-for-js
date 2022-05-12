/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
/**
 * This sample demonstrates how to Creates or updates a managed cluster.
 *
 * @summary Creates or updates a managed cluster.
 * x-ms-original-file: specification/containerservice/resource-manager/Microsoft.ContainerService/stable/2022-01-01/examples/ManagedClustersCreate_NodePublicIPPrefix.json
 */
import {
  ManagedCluster,
  ContainerServiceClient
} from "@azure/arm-containerservice";
import { DefaultAzureCredential } from "@azure/identity";

async function createManagedClusterWithNodePublicIPPrefix() {
  const subscriptionId = "subid1";
  const resourceGroupName = "rg1";
  const resourceName = "clustername1";
  const parameters: ManagedCluster = {
    addonProfiles: {},
    agentPoolProfiles: [
      {
        name: "nodepool1",
        type: "VirtualMachineScaleSets",
        count: 3,
        enableNodePublicIP: true,
        mode: "System",
        nodePublicIPPrefixID:
          "/subscriptions/subid1/resourcegroups/rg1/providers/Microsoft.Network/publicIPPrefixes/public-ip-prefix",
        osType: "Linux",
        vmSize: "Standard_DS2_v2"
      }
    ],
    autoScalerProfile: { scaleDownDelayAfterAdd: "15m", scanInterval: "20s" },
    diskEncryptionSetID:
      "/subscriptions/subid1/resourceGroups/rg1/providers/Microsoft.Compute/diskEncryptionSets/des",
    dnsPrefix: "dnsprefix1",
    enablePodSecurityPolicy: true,
    enableRbac: true,
    kubernetesVersion: "",
    linuxProfile: {
      adminUsername: "azureuser",
      ssh: { publicKeys: [{ keyData: "keydata" }] }
    },
    location: "location1",
    networkProfile: {
      loadBalancerProfile: { managedOutboundIPs: { count: 2 } },
      loadBalancerSku: "standard",
      outboundType: "loadBalancer"
    },
    servicePrincipalProfile: { clientId: "clientid", secret: "secret" },
    sku: { name: "Basic", tier: "Free" },
    tags: { archv2: "", tier: "production" },
    windowsProfile: {
      adminPassword: "replacePassword1234$",
      adminUsername: "azureuser"
    }
  };
  const credential = new DefaultAzureCredential();
  const client = new ContainerServiceClient(credential, subscriptionId);
  const result = await client.managedClusters.beginCreateOrUpdateAndWait(
    resourceGroupName,
    resourceName,
    parameters
  );
  console.log(result);
}

createManagedClusterWithNodePublicIPPrefix().catch(console.error);
