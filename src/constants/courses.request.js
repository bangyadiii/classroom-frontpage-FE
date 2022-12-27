import axios from "src/config/axios";

export default {
    all: (options = { params: { limit: 8 } }) => {
        return axios.get(`courses`, options).then((res) => res.data);
    },
    show: ({ id }) => {
        return axios.get(`courses/${id}`).then((res) => res.data);
    },
};
