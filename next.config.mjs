/** @type {import('next').NextConfig} */

const nextConfig = {
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  experimental: {
    optimizePackageImports: ["posthog-js"],
  },
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
  async headers() {
    return [
      {
        source: "/_next/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/images/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
