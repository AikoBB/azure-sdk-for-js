let nock = require('nock');

module.exports.hash = "12cf2ec9875ad64a61d21412ff3f1b11";

module.exports.testInfo = {"uniqueName":{},"newDate":{}}

nock('https://endpoint:443', {"encodedQueryParams":true})
  .post('/metricsadvisor/v1.0/dataFeeds/52b0c20c-cb7c-43f0-9507-2a33170342db/ingestionStatus/query', {"startTime":"2020-10-30T00:00:00.000Z","endTime":"2021-11-01T00:00:00.000Z"})
  .reply(200, {"value":[{"timestamp":"2021-10-31T00:00:00Z","status":"Succeeded","message":""},{"timestamp":"2021-10-30T00:00:00Z","status":"Succeeded","message":""},{"timestamp":"2021-10-29T00:00:00Z","status":"Succeeded","message":""},{"timestamp":"2021-10-28T00:00:00Z","status":"Succeeded","message":""},{"timestamp":"2021-10-27T00:00:00Z","status":"Succeeded","message":""},{"timestamp":"2021-10-26T00:00:00Z","status":"Succeeded","message":""},{"timestamp":"2021-10-25T00:00:00Z","status":"Succeeded","message":""},{"timestamp":"2021-10-24T00:00:00Z","status":"Succeeded","message":""},{"timestamp":"2021-10-23T00:00:00Z","status":"Succeeded","message":""},{"timestamp":"2021-10-22T00:00:00Z","status":"Succeeded","message":""},{"timestamp":"2021-10-21T00:00:00Z","status":"Succeeded","message":""},{"timestamp":"2021-10-20T00:00:00Z","status":"Succeeded","message":""},{"timestamp":"2021-10-19T00:00:00Z","status":"Succeeded","message":""},{"timestamp":"2021-10-18T00:00:00Z","status":"Succeeded","message":""},{"timestamp":"2021-10-17T00:00:00Z","status":"Succeeded","message":""},{"timestamp":"2021-10-16T00:00:00Z","status":"Succeeded","message":""},{"timestamp":"2021-10-15T00:00:00Z","status":"Succeeded","message":""},{"timestamp":"2021-10-14T00:00:00Z","status":"Succeeded","message":""},{"timestamp":"2021-10-13T00:00:00Z","status":"Succeeded","message":""},{"timestamp":"2021-10-12T00:00:00Z","status":"Succeeded","message":""},{"timestamp":"2021-10-11T00:00:00Z","status":"Succeeded","message":""},{"timestamp":"2021-10-10T00:00:00Z","status":"Succeeded","message":""},{"timestamp":"2021-10-09T00:00:00Z","status":"Succeeded","message":""},{"timestamp":"2021-10-08T00:00:00Z","status":"Succeeded","message":""},{"timestamp":"2021-10-07T00:00:00Z","status":"Succeeded","message":""},{"timestamp":"2021-10-06T00:00:00Z","status":"Succeeded","message":""},{"timestamp":"2021-10-05T00:00:00Z","status":"Succeeded","message":""},{"timestamp":"2021-10-04T00:00:00Z","status":"Succeeded","message":""},{"timestamp":"2021-10-03T00:00:00Z","status":"Succeeded","message":""},{"timestamp":"2021-10-02T00:00:00Z","status":"Succeeded","message":""},{"timestamp":"2021-10-01T00:00:00Z","status":"Succeeded","message":""},{"timestamp":"2021-09-30T00:00:00Z","status":"Succeeded","message":""},{"timestamp":"2021-09-29T00:00:00Z","status":"Succeeded","message":""},{"timestamp":"2021-09-28T00:00:00Z","status":"Succeeded","message":""},{"timestamp":"2021-09-27T00:00:00Z","status":"Succeeded","message":""},{"timestamp":"2021-09-26T00:00:00Z","status":"Succeeded","message":""},{"timestamp":"2021-09-25T00:00:00Z","status":"Succeeded","message":""},{"timestamp":"2021-09-24T00:00:00Z","status":"Succeeded","message":""},{"timestamp":"2021-09-23T00:00:00Z","status":"Succeeded","message":""},{"timestamp":"2021-09-22T00:00:00Z","status":"Succeeded","message":""},{"timestamp":"2021-09-21T00:00:00Z","status":"Succeeded","message":""},{"timestamp":"2021-09-20T00:00:00Z","status":"Succeeded","message":""},{"timestamp":"2021-09-19T00:00:00Z","status":"Succeeded","message":""},{"timestamp":"2021-09-18T00:00:00Z","status":"Error","message":"Duplicate metric values are found on the same dimension combination within one metric interval. Please use aggregation function to aggregate your metrics by its dimensions. "},{"timestamp":"2021-09-17T00:00:00Z","status":"Error","message":"Duplicate metric values are found on the same dimension combination within one metric interval. Please use aggregation function to aggregate your metrics by its dimensions. "},{"timestamp":"2021-09-16T00:00:00Z","status":"Succeeded","message":""},{"timestamp":"2021-09-15T00:00:00Z","status":"Succeeded","message":""},{"timestamp":"2021-09-14T00:00:00Z","status":"Succeeded","message":""},{"timestamp":"2021-09-13T00:00:00Z","status":"Error","message":"Duplicate metric values are found on the same dimension combination within one metric interval. Please use aggregation function to aggregate your metrics by its dimensions. "},{"timestamp":"2021-09-12T00:00:00Z","status":"Succeeded","message":""},{"timestamp":"2021-09-11T00:00:00Z","status":"Succeeded","message":""},{"timestamp":"2021-09-10T00:00:00Z","status":"Succeeded","message":""},{"timestamp":"2021-09-09T00:00:00Z","status":"Succeeded","message":""},{"timestamp":"2021-09-08T00:00:00Z","status":"Succeeded","message":""},{"timestamp":"2021-09-07T00:00:00Z","status":"Succeeded","message":""},{"timestamp":"2021-09-06T00:00:00Z","status":"Succeeded","message":""},{"timestamp":"2021-09-05T00:00:00Z","status":"Succeeded","message":""},{"timestamp":"2021-09-04T00:00:00Z","status":"Succeeded","message":""},{"timestamp":"2021-09-03T00:00:00Z","status":"Succeeded","message":""},{"timestamp":"2021-09-02T00:00:00Z","status":"Succeeded","message":""},{"timestamp":"2021-09-01T00:00:00Z","status":"Succeeded","message":""},{"timestamp":"2021-08-31T00:00:00Z","status":"Succeeded","message":""},{"timestamp":"2021-08-30T00:00:00Z","status":"Succeeded","message":""},{"timestamp":"2021-08-29T00:00:00Z","status":"Succeeded","message":""},{"timestamp":"2021-08-28T00:00:00Z","status":"Succeeded","message":""},{"timestamp":"2021-08-27T00:00:00Z","status":"Succeeded","message":""},{"timestamp":"2021-08-26T00:00:00Z","status":"Succeeded","message":""},{"timestamp":"2021-08-25T00:00:00Z","status":"Succeeded","message":""},{"timestamp":"2021-08-24T00:00:00Z","status":"Succeeded","message":""},{"timestamp":"2021-08-23T00:00:00Z","status":"Succeeded","message":""},{"timestamp":"2021-08-22T00:00:00Z","status":"Succeeded","message":""},{"timestamp":"2021-08-21T00:00:00Z","status":"Succeeded","message":""},{"timestamp":"2021-08-20T00:00:00Z","status":"Succeeded","message":""},{"timestamp":"2021-08-19T00:00:00Z","status":"Succeeded","message":""},{"timestamp":"2021-08-18T00:00:00Z","status":"Succeeded","message":""},{"timestamp":"2021-08-17T00:00:00Z","status":"Succeeded","message":""},{"timestamp":"2021-08-16T00:00:00Z","status":"Succeeded","message":""},{"timestamp":"2021-08-15T00:00:00Z","status":"Succeeded","message":""},{"timestamp":"2021-08-14T00:00:00Z","status":"Succeeded","message":""},{"timestamp":"2021-08-13T00:00:00Z","status":"Succeeded","message":""},{"timestamp":"2021-08-12T00:00:00Z","status":"Succeeded","message":""},{"timestamp":"2021-08-11T00:00:00Z","status":"Succeeded","message":""},{"timestamp":"2021-08-10T00:00:00Z","status":"Succeeded","message":""},{"timestamp":"2021-08-09T00:00:00Z","status":"Succeeded","message":""},{"timestamp":"2021-08-08T00:00:00Z","status":"Succeeded","message":""},{"timestamp":"2021-08-07T00:00:00Z","status":"Succeeded","message":""},{"timestamp":"2021-08-06T00:00:00Z","status":"Succeeded","message":""},{"timestamp":"2021-08-05T00:00:00Z","status":"Succeeded","message":""},{"timestamp":"2021-08-04T00:00:00Z","status":"Succeeded","message":""},{"timestamp":"2021-08-03T00:00:00Z","status":"Succeeded","message":""},{"timestamp":"2021-08-02T00:00:00Z","status":"Succeeded","message":""},{"timestamp":"2021-08-01T00:00:00Z","status":"Succeeded","message":""},{"timestamp":"2021-07-31T00:00:00Z","status":"Succeeded","message":""},{"timestamp":"2021-07-30T00:00:00Z","status":"Succeeded","message":""},{"timestamp":"2021-07-29T00:00:00Z","status":"Succeeded","message":""},{"timestamp":"2021-07-28T00:00:00Z","status":"Succeeded","message":""},{"timestamp":"2021-07-27T00:00:00Z","status":"Succeeded","message":""},{"timestamp":"2021-07-26T00:00:00Z","status":"Succeeded","message":""},{"timestamp":"2021-07-25T00:00:00Z","status":"Succeeded","message":""},{"timestamp":"2021-07-24T00:00:00Z","status":"Succeeded","message":""}],"@nextLink":"https://endpoint:443/metricsadvisor/v1.0/dataFeeds/52b0c20c-cb7c-43f0-9507-2a33170342db/ingestionStatus/query?$maxpagesize=100&$skip=100"}, [
  'Content-Length',
  '7807',
  'Content-Type',
  'application/json; charset=utf-8',
  'x-request-id',
  '87b1dae8-651d-4179-a5cb-fa7022df021f',
  'x-envoy-upstream-service-time',
  '207',
  'apim-request-id',
  '87b1dae8-651d-4179-a5cb-fa7022df021f',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains; preload',
  'x-content-type-options',
  'nosniff',
  'Date',
  'Mon, 08 Nov 2021 09:37:54 GMT'
]);
