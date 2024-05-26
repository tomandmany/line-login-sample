/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/',
                destination: '/votes',
                permanent: true,
            },
        ]
    },
};

export default nextConfig;
