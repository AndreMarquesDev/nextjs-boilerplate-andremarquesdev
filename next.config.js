const withPlugins = require('next-compose-plugins');
const withOptimizedImages = require('next-optimized-images');

const nextConfig = {
    i18n: {
        locales: ['pt', 'en'],
        defaultLocale: 'pt',
    },
};

module.exports = withPlugins([
    [withOptimizedImages, {
        optimizeImagesInDev: false,
    }],
], nextConfig);
