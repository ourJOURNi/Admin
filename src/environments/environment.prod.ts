// Admin Production

import 'zone.js/dist/zone-error';

const adminApi = 'admin.findyourfuturesem.org';
const fairsApi = `fairs.findyourfuturesem.org`;

const baseUrl = `https://${adminApi}`;
const fairsUrl = `https://${fairsApi}`;


export const environment = {
  production: true,
  url: baseUrl,
  fairsUrl: fairsApi
};

