module.exports = {
    reactStrictMode: true,
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: [{ loader: "@svgr/webpack", options: { icon: true } }],
        });
        return config;
    },
    publicRuntimeConfig: {
        backendUrl: process.env.API_GATEWAY_BASE_URL,
        REQUEST_TIMEOUT: process.env.REQUEST_TIMEOUT,
        APP_MEMBERPAGE_URL: process.env.APP_MEMBERPAGE_URL,
        API_GATEWAY_BASE_URL: process.env.API_GATEWAY_BASE_URL,
    },
};
