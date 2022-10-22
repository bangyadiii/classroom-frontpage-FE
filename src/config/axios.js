import axios from "axios";

import errorHandler from "./errorHandler";

const instance = axios.create({
    baseURL: `${process.env.API_GATEWAY_BASE_URL}`,
    timeout: process.env.REQUEST_TIMEOUT || 5000,
});

instance.interceptors.response.use((response) => response.data, errorHandler);

export default instance;
