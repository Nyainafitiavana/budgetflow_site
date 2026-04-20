// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig: import('next').NextConfig = {
    reactStrictMode: true,
    images: {
        unoptimized: true, // Désactiver l'optimisation des images
        domains: [],
    },
    // Permettre les fichiers statiques
    async headers() {
        return [
            {
                source: '/images/:path*',
                headers: [
                    { key: 'Cache-Control', value: 'public, max-age=3600' },
                ],
            },
        ];
    },
};

module.exports = nextConfig;