import axios from "axios";
import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();

import errorHandler from "./errorHandler";

const instance = axios.create({
    baseURL: `${publicRuntimeConfig.backendUrl}`,
    timeout: publicRuntimeConfig.REQUEST_TIMEOUT || 5000,
});

instance.interceptors.response.use((response) => response.data, errorHandler);

export default instance;
