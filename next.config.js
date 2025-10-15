const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: isProd ? "export" : undefined,
  basePath: isProd ? "/kl-recyclingWeb" : "",
  assetPrefix: isProd ? "/kl-recyclingWeb/" : "",
  trailingSlash: isProd,
  reactStrictMode: true,
  swcMinify: true, // Enable SWC minifier for faster builds

  // Performance settings
  compress: true,
  poweredByHeader: false,

  // Enhanced Professional Image optimization with Cloudinary integration for static export
  images: {
    // Disable optimization for static export compatibility
    unoptimized: true,
    // Optimized device sizes for multiple screen densities
    deviceSizes: [320, 640, 768, 1024, 1200, 1920, 2048, 2560],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384, 512, 768, 1024],
    // Use remotePatterns for better security
    remotePatterns: [
      {
        protocol: "https",
        hostname: "maps.googleapis.com",
      },
      {
        protocol: "https",
        hostname: "placehold.co",
      },
      {
        protocol: "https",
        hostname: "*.gravatar.com",
      },
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
    // Enable modern image formats with proper priority for professional quality
    formats: ["image/avif", "image/webp"],
    // Professional optimization settings for static export
    dangerouslyAllowSVG: false,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    // Quality settings (Next.js uses these defaults, overridden by loader)
    minimumCacheTTL: 86400, // 24 hours
  },

  // Optimize bundle for development speed
  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
    // Add server components optimization
    serverExternalPackages: [],
    // Improve dev performance
    workerThreads: false,
  },

  // Add security headers
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "origin-when-cross-origin" },
          { key: "X-DNS-Prefetch-Control", value: "on" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(self)",
          },
        ],
      },
    ];
  },

  // Add redirects for old URLs
  async redirects() {
    return [
      {
        source: "/home",
        destination: "/",
        permanent: true,
      },
    ];
  },

  // Webpack optimization
  webpack: (config, { dev, isServer }) => {
    // Optimize bundle splitting
    if (!dev && !isServer) {
      config.optimization.splitChunks.cacheGroups = {
        ...config.optimization.splitChunks.cacheGroups,
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
        },
        components: {
          test: /[\\/]src[\\/]components[\\/]/,
          name: "components",
          chunks: "all",
        },
      };
    }

    return config;
  },
};

module.exports = withBundleAnalyzer(nextConfig);
