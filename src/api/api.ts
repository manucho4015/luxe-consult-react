import axios from "axios";

export const BASE_URL = "https://property-ecosystem.onrender.com"

export default () => {

    return axios.create({
        baseURL: BASE_URL
    })
}