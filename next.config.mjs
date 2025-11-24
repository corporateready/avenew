/** @type {import('next').NextConfig} */

const nextConfig = {
  // output: "export",
  reactStrictMode: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
    target: "es2020",
  },
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ["posthog-js", "react-icons"],
    legacyBrowsers: false,
  },
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 1200, 1440, 1920],
    minimumCacheTTL: 60,
    qualities: [25, 50, 85],
  },
  swcMinify: true,
  productionBrowserSourceMaps: false,
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
