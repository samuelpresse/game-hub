import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key:'689c11d919cc4ae88137661dea9bb654',
    },
});