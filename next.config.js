const withCss = require("@zeit/next-css");
const withImageSVG = require("next-react-svg");
const withPlugins = require("next-compose-plugins");
const withImages = require("next-images");
const path = require("path");

const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    webpack: (config, options) => {
        config.module.rules.push({
            test: /\.svg$/,
            use: "@svgr/webpack",
        });

        return config;
    },
};

module.exports = nextConfig;
