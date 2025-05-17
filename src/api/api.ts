import axios from "axios";

export const BASE_URL = "https://be.luxe-consult.com"

export default () => {

    return axios.create({
        baseURL: BASE_URL
    })
}