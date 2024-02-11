/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "pbs.twimg.com",
				pathname: "/media/**",
			},
			{
				protocol: "https",
				hostname: "neutgwolrftsfsvfhutp.supabase.co",
				pathname: "/storage/v1/object/public/images/**",
			},
		],
	},
};

module.exports = nextConfig;
