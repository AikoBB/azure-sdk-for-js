let nock = require('nock');

module.exports.hash = "072ffcc80609cb05570495546aeff4b5";

module.exports.testInfo = {"uniqueName":{},"newDate":{}}

nock('https://login.microsoftonline.com:443', {"encodedQueryParams":true})
  .post('/azure_tenant_id/oauth2/v2.0/token', "response_type=token&grant_type=client_credentials&client_id=azure_client_id&client_secret=azure_client_secret&scope=https%3A%2F%2Fsanitized%2F")
  .reply(200, {"token_type":"Bearer","expires_in":86399,"ext_expires_in":86399,"access_token":"access_token"}, [
  'Cache-Control',
  'no-store, no-cache',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'P3P',
  'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'x-ms-request-id',
  '9a129b30-e83f-42f3-ba29-ed20fe48b100',
  'x-ms-ests-server',
  '2.1.12197.4 - SCUS ProdSlices',
  'Set-Cookie',
  'fpc=AmaPItG6DBZLhHBL9Nd38Qw; expires=Wed, 08-Dec-2021 09:38:01 GMT; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'x-ms-gateway-slice=estsfd; path=/; secure; samesite=none; httponly',
  'Set-Cookie',
  'stsservicecookie=estsfd; path=/; secure; samesite=none; httponly',
  'Date',
  'Mon, 08 Nov 2021 09:38:00 GMT',
  'Content-Length',
  '1331'
]);

nock('https://endpoint:443', {"encodedQueryParams":true})
  .post('/metricsadvisor/v1.0/enrichment/anomalyDetection/configurations/26ece682-80a6-4415-89a2-05903dd9a640/incidents/query', {"startTime":"2021-05-05T00:00:00.000Z","endTime":"2021-11-01T00:00:00.000Z","filter":{}})
  .query(true)
  .reply(200, {"value":[{"incidentId":"4870d7d23fff4463f1e55f48cbcedc37-17cd3a55400","startTime":"2021-10-31T00:00:00Z","lastTime":"2021-10-31T00:00:00Z","rootNode":{"dimension":{"region":"Tianjin","category":"__SUM__"}},"property":{"maxSeverity":"Medium","incidentStatus":"Active","valueOfRootNode":900770.6000000001,"expectedValueOfRootNode":1645160.8108448838}},{"incidentId":"55e8821f21cb799db557b0e7c9eb7dd9-17cd3a55400","startTime":"2021-10-30T00:00:00Z","lastTime":"2021-10-31T00:00:00Z","rootNode":{"dimension":{"region":"__SUM__","category":"Electronics (Accessories)"}},"property":{"maxSeverity":"Low","incidentStatus":"Active","valueOfRootNode":12.6,"expectedValueOfRootNode":7.66378372884321}}],"@nextLink":"https://endpoint:443/metricsadvisor/v1.0/enrichment/anomalyDetection/configurations/26ece682-80a6-4415-89a2-05903dd9a640/incidents/query?$maxpagesize=2&$token=eyJtZXRyaWNJZCI6IjM5MGQxMTM5LTk4ZmItNDVhZi1iODMxLThkNWFkNjFiMTUwYSIsImRldGVjdENvbmZpZ0lkIjoiZWZhZWUzMDUtZjA0OS00M2VjLTlmOWItNzYwMjZkNTVjMTRhIiwic3RhcnRUaW1lIjoiMjAyMS0wNS0wNVQwMDowMDowMFoiLCJlbmRUaW1lIjoiMjAyMS0xMS0wMVQwMDowMDowMFoiLCJuZXh0IjoiTWpBeU1TMHhNUzB3TVZRd01Eb3dNRG93TUZvakl5TTFOV1U0T0RJeFpqSXhZMkkzT1Rsa1lqVTFOMkl3WlRkak9XVmlOMlJrT1E9PSIsImxpbWl0IjoyLCJmaWx0ZXIiOnt9fQ=="}, [
  'Content-Length',
  '1285',
  'Content-Type',
  'application/json; charset=utf-8',
  'x-request-id',
  '8c163a18-f8f9-4e17-a42a-4dd0b518a04c',
  'x-envoy-upstream-service-time',
  '203',
  'apim-request-id',
  '8c163a18-f8f9-4e17-a42a-4dd0b518a04c',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains; preload',
  'x-content-type-options',
  'nosniff',
  'Date',
  'Mon, 08 Nov 2021 09:38:01 GMT'
]);

nock('https://endpoint:443', {"encodedQueryParams":true})
  .get('/metricsadvisor/v1.0/enrichment/anomalyDetection/configurations/26ece682-80a6-4415-89a2-05903dd9a640/incidents/query')
  .query(true)
  .reply(200, {"value":[{"incidentId":"9eacfa65b7c794522d388fcf5bf0a463-17cd3a55400","startTime":"2021-10-29T00:00:00Z","lastTime":"2021-10-31T00:00:00Z","rootNode":{"dimension":{"region":"__SUM__","category":"Electronics (Consumer)"}},"property":{"maxSeverity":"Medium","incidentStatus":"Active","valueOfRootNode":4329.599999999999,"expectedValueOfRootNode":134.62624814792417}},{"incidentId":"18044bf3e7152862074c3d177f9114fe-17cc9589c00","startTime":"2021-10-29T00:00:00Z","lastTime":"2021-10-29T00:00:00Z","rootNode":{"dimension":{"region":"Miami","category":"Office Products"}},"property":{"maxSeverity":"Medium","incidentStatus":"Active","valueOfRootNode":69544.4,"expectedValueOfRootNode":34437.434069116425}}],"@nextLink":"https://endpoint:443/metricsadvisor/v1.0/enrichment/anomalyDetection/configurations/26ece682-80a6-4415-89a2-05903dd9a640/incidents/query?$maxpagesize=2&$token=eyJtZXRyaWNJZCI6IjM5MGQxMTM5LTk4ZmItNDVhZi1iODMxLThkNWFkNjFiMTUwYSIsImRldGVjdENvbmZpZ0lkIjoiZWZhZWUzMDUtZjA0OS00M2VjLTlmOWItNzYwMjZkNTVjMTRhIiwic3RhcnRUaW1lIjoiMjAyMS0wNS0wNVQwMDowMDowMFoiLCJlbmRUaW1lIjoiMjAyMS0xMS0wMVQwMDowMDowMFoiLCJuZXh0IjoiTWpBeU1TMHhNQzB6TUZRd01Eb3dNRG93TUZvakl5TXhPREEwTkdKbU0yVTNNVFV5T0RZeU1EYzBZek5rTVRjM1pqa3hNVFJtWlE9PSIsImxpbWl0IjoyLCJmaWx0ZXIiOnt9fQ=="}, [
  'Content-Length',
  '1296',
  'Content-Type',
  'application/json; charset=utf-8',
  'x-request-id',
  'e24bcf11-5360-4b24-922f-19ad1adfe527',
  'x-envoy-upstream-service-time',
  '230',
  'apim-request-id',
  'e24bcf11-5360-4b24-922f-19ad1adfe527',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains; preload',
  'x-content-type-options',
  'nosniff',
  'Date',
  'Mon, 08 Nov 2021 09:38:01 GMT'
]);
