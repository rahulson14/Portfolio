import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Removed output: 'export' so Vercel can run dynamic backend server routes (/api/contact)
};

export default nextConfig;
