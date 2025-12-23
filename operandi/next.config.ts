import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    NEXT_SUPABASE_URL: process.env.NEXT_SUPABASE_URL,
    NEXT_SUPABASE_ANON_KEY: process.env.NEXT_SUPABASE_ANON_KEY,
  },
};

export default nextConfig;
