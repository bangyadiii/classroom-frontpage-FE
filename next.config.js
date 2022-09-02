/** @type {import('next').NextConfig} */
const withCss = require("@zeit/next-css");
const withImageSVG = require("next-react-svg");
const withPlugins = require("next-compose-plugins");
const withImages = require("next-images");
const path = require("path");

const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
};

(module.exports = nextConfig),
    withPlugins([withCss({}), withImages({}), withImageSVG({})]);
