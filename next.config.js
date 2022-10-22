const withCss = require("@zeit/next-css");
const withImageSVG = require("next-react-svg");
const withPlugins = require("next-compose-plugins");
const withImages = require("next-images");
const path = require("path");

module.exports = withPlugins([
    withCss({}),
    withImages({}),
    withImageSVG({
        include: path.resolve(__dirname, "./public/images"),
        webpack(config, options) {
            return config;
        },
    }),
]);
