/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "pbs.twimg.com",
				pathname: "/media/**",
			},
		],
	},
};

module.exports = nextConfig;
