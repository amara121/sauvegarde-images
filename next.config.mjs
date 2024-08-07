/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["https://jzptlwlwfecmcqejleyk.supabase.co"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "jzptlwlwfecmcqejleyk.supabase.co",
        port: "",
        pathname: "/storage/v1/object/**",
      },
    ],
  },
};

export default nextConfig;
