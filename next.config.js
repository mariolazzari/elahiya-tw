/** @type {import('next').NextConfig} */

const withNextIntl = require("next-intl/plugin")("./i18n.ts");

const nextConfig = withNextIntl({
  env: {
    GA_TRACKING_ID: "GTM-T646789",
    MAPS_API: "AIzaSyAclhKDkKxaSSgpE_Zsva0VOl_leycLSdE",
  },
});

module.exports = nextConfig;
