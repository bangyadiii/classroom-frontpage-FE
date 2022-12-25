import axios from "src/config/axios";

export default {
    all: (props) => {
        return axios
            .get(`courses?limit=${props?.limit || 4}`)
            .then((res) => res.data);
    },
    show: ({ id }) => {
        return axios.get(`courses/${id}`).then((res) => res.data);
    },
};
