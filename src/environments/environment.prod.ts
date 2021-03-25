// Admin Production

import 'zone.js/dist/zone-error';

const adminApi = 'admin.findyourfuturesem.org';
const fairsApi = `fairs.findyourfuturesem.org`;
const fyfApi = `findyourfuturesem.org`;

const adminUrl = `https://${adminApi}`;
const fairsUrl = `https://${fairsApi}`;
const fyfUrl = `https://${fyfApi}`;


export const environment = {
  production: true,
  url: adminUrl,
  fyfurl: fyfUrl,
  fairsUrl: fairsUrl
};

