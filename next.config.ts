import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "*.dawes.cc",
				pathname: "/**",
			},
		],
	},
};

export default nextConfig;
