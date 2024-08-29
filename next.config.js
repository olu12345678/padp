/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    transpilePackages: ['@scottish-government/design-system'],
    images: {
        domains: ['designsystem.gov.scot'],
    }, // Added a closing bracket here
};

module.exports = nextConfig;
