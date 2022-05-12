// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/**
 * @summary Exchange an AAD access token of a Teams user for a new Communication Identity access token.
 */

import {
  CommunicationAccessToken,
  CommunicationIdentityClient,
} from "@azure/communication-identity";
import { PublicClientApplication } from "@azure/msal-node";

// Load the .env file if it exists
import * as dotenv from "dotenv";
dotenv.config();

// You will need to set this environment variables or edit the following values
const connectionString =
  process.env["COMMUNICATION_CONNECTION_STRING"] || "<communication service connection string>";
const aadTenant =
  process.env["COMMUNICATION_M365_AAD_TENANT"] || "<azure active directory tenant id>";
const aadAppId = process.env["COMMUNICATION_M365_APP_ID"] || "<azure active directory app id>";
const aadScope = process.env["COMMUNICATION_M365_SCOPE"] || "<azure active directory scope>";
const aadAuthority =
  process.env["COMMUNICATION_M365_AAD_AUTHORITY"] || "<azure active directory authority>";
const msalUsername = process.env["COMMUNICATION_MSAL_USERNAME"] || "<msal username>";
const msalPassword = process.env["COMMUNICATION_MSAL_PASSWORD"] || "<msal password>";

export async function main() {
  if (process.env["SKIP_INT_IDENTITY_EXCHANGE_TOKEN_TEST"] === "true") {
    console.log("Skipping the Get Access Token for Teams User sample");
    return;
  }
  console.log("\n== Get Access Token for Teams User sample ==\n");

  const client = new CommunicationIdentityClient(connectionString);

  // Get an AAD token and object ID of a Teams user
  console.log("Getting an AAD token and an object ID of a Teams user");

  // Use MSAL to get the AAD token and object ID of a Teams user
  // Create configuration object for PublicClientApplication
  const msalConfig = {
    auth: {
      clientId: aadAppId,
      authority: aadAuthority + "/" + aadTenant,
    },
  };

  // Create an instance of PublicClientApplication
  const msalInstance = new PublicClientApplication(msalConfig);

  // Create request parameters object for acquiring the AAD token and object ID of a Teams user
  const usernamePasswordRequest = {
    scopes: [aadScope],
    username: msalUsername,
    password: msalPassword,
  };

  // Retrieve the AAD token and object ID of a Teams user
  const response = await msalInstance.acquireTokenByUsernamePassword(usernamePasswordRequest);
  let teamsToken = response!.accessToken;
  console.log(`Retrieved a token with the expiration: ${response!.extExpiresOn}`);

  // Extract the object ID from the homeAccountId which is an identifier for the account object
  // that stands from object ID and tenant ID separated by a dot
  let userId = response!.account!.homeAccountId.split(".")[0];

  console.log("Exchanging the AAD access token for a Communication access token");

  // Exchange the AAD access token of a Teams user for a new Communication Identity access token
  const communicationAccessToken: CommunicationAccessToken = await client.getTokenForTeamsUser({
    teamsUserAadToken: teamsToken,
    appId: aadAppId,
    userId: userId,
  });

  console.log(`Exchanged Communication access token: ${communicationAccessToken.token}`);
}

main().catch((error) => {
  console.error("Encountered an error while exchanging token: ");
  console.error("Request: \n", error.request);
  console.error("\nResponse: \n", error.response);
  console.error(error);
});
