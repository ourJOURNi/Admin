// Admin Production

import 'zone.js/dist/zone-error';

const ip = '18.218.140.19';
const baseUrl = `http://${ip}:3000`;

export const environment = {
  production: true,
  url: baseUrl,
};
