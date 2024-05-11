/** @type {import('next').NextConfig} */
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n.ts");

const nextConfig = withNextIntl({
  env: {
    GA_TRACKING_ID: "GTM-T646789",
  },
});

export default nextConfig;
