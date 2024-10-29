import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    GA_TRACKING_ID: "GTM-T646789",
  },
};

export default withNextIntl(nextConfig);
