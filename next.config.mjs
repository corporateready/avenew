/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  productionBrowserSourceMaps: false,
  theme: {
    screens: {
      sm: "640px",
      // xxl: "1920px",
      // => @media (min-width: 640px) { ... }

      // md: "768px",
      // => @media (min-width: 768px) { ... }

      // lg: "1024px",
      // => @media (min-width: 1024px) { ... }
    },
  },
  async rewrites() {
    return [
      {
        source: "/ingest/static/:path*",
        destination: "https://eu-assets.i.posthog.com/static/:path*",
      },
      {
        source: "/ingest/:path*",
        destination: "https://eu.i.posthog.com/:path*",
      },
    ];
  },
  skipTrailingSlashRedirect: true,
};

export default nextConfig;
