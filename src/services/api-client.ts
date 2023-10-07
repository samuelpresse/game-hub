import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key:'60c9330d4ad74e8589f4b2d80cded947'
    }
});