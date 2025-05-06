import http_client from './api';
import axios_error_message from './axios_helper'

// custom types
import type { Property } from '../custom-types/properties';

export const fetchProperties = async () => {
    try {
        const response = await http_client().get(`api/properties/`);

        const json: Property[] = await response.data;
        // console.log(json)
        return json
    } catch (error) {
        console.error(error);

        throw new Error(axios_error_message(error));
    }
}
export const fetchProperty = async (id: string) => {
    try {
        const response = await http_client().get(`api/properties/${id}/`);

        const json: Property = await response.data;
        // console.log(json)
        return json
    } catch (error) {
        console.error(error);

        throw new Error(axios_error_message(error));
    }
}