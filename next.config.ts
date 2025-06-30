import type { NextConfig } from "next";

const nextConfig = {
 webpack(config: any) {
        config.module.rules.push({
          test: /\.svg$/i,
          issuer: /\.[jt]sx?$/, // Apply this loader only when imported from JS/TS/JSX/TSX files
          use: ['@svgr/webpack'],
        });
        return config;
      },
};

export default nextConfig;
