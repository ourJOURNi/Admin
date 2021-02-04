// Admin Production

import 'zone.js/dist/zone-error';

const ip = '3.138.106.181';
const baseUrl = `http://${ip}:3000`;
const fairsUrl = `http://${ip}:4000`;

export const environment = {
  production: false,
  url: baseUrl,
  fairsUrl: fairsUrl
};

