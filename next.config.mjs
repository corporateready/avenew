/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  productionBrowserSourceMaps: false,
  theme: {
    screens: {
      sm: "640px",
    },
  },
  async rewrites() {
    return [
      {
        source: "/posthog-assets/:path*",
        destination: "https://eu-assets.i.posthog.com/:path*",
      },
    ];
  },
  skipTrailingSlashRedirect: true,
};

export default nextConfig;
