/** @type {import('next').NextConfig} */
const nextConfig = {};

// module.exports = nextConfig;

module.exports = {
	env: {
		RESEND_API_KEY: process.env.RESEND_API_KEY,
		FROM_EMAIL: process.env.FROM_EMAIL,
	},
};
