import axios from "axios";
import dotenv from "dotenv";
dotenv.config();
import errorHandler from "./errorHandler";

const { API_GATEWAY_BASE_URL, REQUEST_TIMEOUT } = process.env;

const instance = axios.create({
    baseURL: API_GATEWAY_BASE_URL,
    timeout: REQUEST_TIMEOUT,
});

instance.interceptors.response.use((response) => response.data, errorHandler);
