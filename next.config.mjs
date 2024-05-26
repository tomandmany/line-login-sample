/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/',
                destination: '/votles',
                permanent: true,
            },
        ]
    },
};

export default nextConfig;
