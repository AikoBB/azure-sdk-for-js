let nock = require('nock');

module.exports.hash = "4a4b0814a34dad1764d3ebea6e43e496";

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
  '25e0704b-bf39-4446-b5a1-0be34c789700',
  'x-ms-ests-server',
  '2.1.12197.4 - NCUS ProdSlices',
  'Set-Cookie',
  'fpc=Ahl_sVQQzdhImO_kwSnmBAs; expires=Wed, 08-Dec-2021 09:38:08 GMT; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'x-ms-gateway-slice=estsfd; path=/; secure; samesite=none; httponly',
  'Set-Cookie',
  'stsservicecookie=estsfd; path=/; secure; samesite=none; httponly',
  'Date',
  'Mon, 08 Nov 2021 09:38:07 GMT',
  'Content-Length',
  '1331'
]);

nock('https://endpoint:443', {"encodedQueryParams":true})
  .post('/metricsadvisor/v1.0/metrics/189ff959-d9f4-45c7-a1e0-f87c9c7ca80f/data/query', {"startTime":"2021-08-05T00:00:00.000Z","endTime":"2021-12-05T00:00:00.000Z","series":[{"region":"Delhi","category":"Handmade"},{"region":"Cairo","category":"Home & Garden"}]})
  .reply(200, {"value":[{"id":{"metricId":"189ff959-d9f4-45c7-a1e0-f87c9c7ca80f","dimension":{"category":"Handmade","region":"Delhi"}},"timestampList":["2021-08-05T00:00:00Z","2021-08-06T00:00:00Z","2021-08-07T00:00:00Z","2021-08-08T00:00:00Z","2021-08-09T00:00:00Z","2021-08-10T00:00:00Z","2021-08-11T00:00:00Z","2021-08-12T00:00:00Z","2021-08-13T00:00:00Z","2021-08-14T00:00:00Z","2021-08-15T00:00:00Z","2021-08-16T00:00:00Z","2021-08-17T00:00:00Z","2021-08-18T00:00:00Z","2021-08-19T00:00:00Z","2021-08-20T00:00:00Z","2021-08-21T00:00:00Z","2021-08-22T00:00:00Z","2021-08-23T00:00:00Z","2021-08-24T00:00:00Z","2021-08-25T00:00:00Z","2021-08-26T00:00:00Z","2021-08-27T00:00:00Z","2021-08-28T00:00:00Z","2021-08-29T00:00:00Z","2021-08-30T00:00:00Z","2021-08-31T00:00:00Z","2021-09-01T00:00:00Z","2021-09-02T00:00:00Z","2021-09-03T00:00:00Z","2021-09-04T00:00:00Z","2021-09-05T00:00:00Z","2021-09-06T00:00:00Z","2021-09-07T00:00:00Z","2021-09-08T00:00:00Z","2021-09-09T00:00:00Z","2021-09-10T00:00:00Z","2021-09-11T00:00:00Z","2021-09-12T00:00:00Z","2021-09-14T00:00:00Z","2021-09-15T00:00:00Z","2021-09-16T00:00:00Z","2021-09-19T00:00:00Z","2021-09-20T00:00:00Z","2021-09-21T00:00:00Z","2021-09-22T00:00:00Z","2021-09-23T00:00:00Z","2021-09-24T00:00:00Z","2021-09-25T00:00:00Z","2021-09-26T00:00:00Z","2021-09-27T00:00:00Z","2021-09-28T00:00:00Z","2021-09-29T00:00:00Z","2021-09-30T00:00:00Z","2021-10-01T00:00:00Z","2021-10-02T00:00:00Z","2021-10-03T00:00:00Z","2021-10-04T00:00:00Z","2021-10-05T00:00:00Z","2021-10-06T00:00:00Z","2021-10-07T00:00:00Z","2021-10-08T00:00:00Z","2021-10-09T00:00:00Z","2021-10-10T00:00:00Z","2021-10-11T00:00:00Z","2021-10-12T00:00:00Z","2021-10-13T00:00:00Z","2021-10-14T00:00:00Z","2021-10-15T00:00:00Z","2021-10-16T00:00:00Z","2021-10-17T00:00:00Z","2021-10-18T00:00:00Z","2021-10-19T00:00:00Z","2021-10-20T00:00:00Z","2021-10-21T00:00:00Z","2021-10-22T00:00:00Z","2021-10-23T00:00:00Z","2021-10-24T00:00:00Z","2021-10-25T00:00:00Z","2021-10-26T00:00:00Z","2021-10-27T00:00:00Z","2021-10-28T00:00:00Z","2021-10-29T00:00:00Z","2021-10-30T00:00:00Z","2021-10-31T00:00:00Z","2021-11-01T00:00:00Z","2021-11-02T00:00:00Z","2021-11-03T00:00:00Z","2021-11-04T00:00:00Z","2021-11-05T00:00:00Z","2021-11-06T00:00:00Z","2021-11-07T00:00:00Z"],"valueList":[459545,414403,354572.8,387233,469817.6,459650.6,447956,474810.6,459115.6,397607.8,429022.4,499379.8,492416.4,514459.2,467188.6,480571.8,399395.8,427462,487330.8,535930.2,488107.8,514313.4,476014.4,387363.4,395853.8,427890,485441.2,521631.2,517050.6,493736,414592.8,444527.4,544983.4,564547.4,566280,584022.8,545745.8,896612,965005.6,614035.2,1251050,1225344.4,471577,1307361.2,1344017.2,1298722.4,639418.4,585613.6,392077.2,939665.2,1254930.8,670567.6,638765.8,646400.8,1183397.6,787345.6,922032.8,671330,663083.8,1304348,1305294.4,602663.2,405481.2,921651.2,648188.4,1279568.4,629455,622654.2,575832.6,376714.8,423373.6,1191936.8,1182105.2,585573.4,591703.2,1070486.4,385288.2,391302.2,527925.6,543222.8,545699.2,513455.6,1006212.8,403239.4,429867,635928.8,640843.2,1274260,1279589.2,581859.4,810264,430847.2]},{"id":{"metricId":"189ff959-d9f4-45c7-a1e0-f87c9c7ca80f","dimension":{"category":"Home & Garden","region":"Cairo"}},"timestampList":["2021-08-05T00:00:00Z","2021-08-06T00:00:00Z","2021-08-07T00:00:00Z","2021-08-08T00:00:00Z","2021-08-09T00:00:00Z","2021-08-10T00:00:00Z","2021-08-11T00:00:00Z","2021-08-12T00:00:00Z","2021-08-13T00:00:00Z","2021-08-14T00:00:00Z","2021-08-15T00:00:00Z","2021-08-16T00:00:00Z","2021-08-17T00:00:00Z","2021-08-18T00:00:00Z","2021-08-19T00:00:00Z","2021-08-20T00:00:00Z","2021-08-21T00:00:00Z","2021-08-22T00:00:00Z","2021-08-23T00:00:00Z","2021-08-24T00:00:00Z","2021-08-25T00:00:00Z","2021-08-26T00:00:00Z","2021-08-27T00:00:00Z","2021-08-28T00:00:00Z","2021-08-29T00:00:00Z","2021-08-30T00:00:00Z","2021-08-31T00:00:00Z","2021-09-01T00:00:00Z","2021-09-02T00:00:00Z","2021-09-03T00:00:00Z","2021-09-04T00:00:00Z","2021-09-05T00:00:00Z","2021-09-06T00:00:00Z","2021-09-07T00:00:00Z","2021-09-08T00:00:00Z","2021-09-09T00:00:00Z","2021-09-10T00:00:00Z","2021-09-11T00:00:00Z","2021-09-12T00:00:00Z","2021-09-14T00:00:00Z","2021-09-15T00:00:00Z","2021-09-16T00:00:00Z","2021-09-19T00:00:00Z","2021-09-20T00:00:00Z","2021-09-21T00:00:00Z","2021-09-22T00:00:00Z","2021-09-23T00:00:00Z","2021-09-24T00:00:00Z","2021-09-25T00:00:00Z","2021-09-26T00:00:00Z","2021-09-27T00:00:00Z","2021-09-28T00:00:00Z","2021-09-29T00:00:00Z","2021-09-30T00:00:00Z","2021-10-01T00:00:00Z","2021-10-02T00:00:00Z","2021-10-03T00:00:00Z","2021-10-04T00:00:00Z","2021-10-05T00:00:00Z","2021-10-06T00:00:00Z","2021-10-07T00:00:00Z","2021-10-08T00:00:00Z","2021-10-09T00:00:00Z","2021-10-10T00:00:00Z","2021-10-11T00:00:00Z","2021-10-12T00:00:00Z","2021-10-13T00:00:00Z","2021-10-14T00:00:00Z","2021-10-15T00:00:00Z","2021-10-16T00:00:00Z","2021-10-17T00:00:00Z","2021-10-18T00:00:00Z","2021-10-19T00:00:00Z","2021-10-20T00:00:00Z","2021-10-21T00:00:00Z","2021-10-22T00:00:00Z","2021-10-23T00:00:00Z","2021-10-24T00:00:00Z","2021-10-25T00:00:00Z","2021-10-26T00:00:00Z","2021-10-27T00:00:00Z","2021-10-28T00:00:00Z","2021-10-29T00:00:00Z","2021-10-30T00:00:00Z","2021-10-31T00:00:00Z","2021-11-01T00:00:00Z","2021-11-02T00:00:00Z","2021-11-03T00:00:00Z","2021-11-04T00:00:00Z","2021-11-05T00:00:00Z","2021-11-06T00:00:00Z","2021-11-07T00:00:00Z"],"valueList":[4741.4,4060.2,2324,2783.8,4648,4862.6,4685.2,4578.6,3682,2327.8,2983,4783.2,4997.6,5108,4773.2,3915.6,2638.4,3182,5056,5200.2,5022.4,5359.6,4518.2,2684.8,3235.6,4845.2,4821,5200,5068,4024.4,2574.6,3123.8,5015,5052.2,5224.8,5048.4,4451,5266.8,6484.8,5567.4,10504,10770.4,2635,9977.6,9656.4,9484.8,4489.2,4087.8,2167.8,5904.4,14730.4,4661.2,4688.6,4565.4,7830.8,5119.2,5790,4465.8,4686.2,8971.6,9608,3984.2,2098.6,5297.6,4562.8,9307.6,4627.8,4835.4,3939,2197.4,2731,9938.4,10123.6,4879,4644.4,8751.2,2391.2,2542.8,4523.4,5040.8,5109.2,4763.6,8418.4,2461.4,3102.4,5740.4,5203.4,10531.6,10064.8,4424,4696.8,3163]}]}, [
  'Content-Length',
  '6030',
  'Content-Type',
  'application/json; charset=utf-8',
  'x-request-id',
  '3dc29601-7fc9-4e3c-8941-87d17c7396fb',
  'x-envoy-upstream-service-time',
  '300',
  'apim-request-id',
  '3dc29601-7fc9-4e3c-8941-87d17c7396fb',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains; preload',
  'x-content-type-options',
  'nosniff',
  'Date',
  'Mon, 08 Nov 2021 09:38:08 GMT'
]);
