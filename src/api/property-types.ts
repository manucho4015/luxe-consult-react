import http_client from './api';
import axios_error_message from './axios_helper'

// custom types
import type { PropertyType } from '../custom-types/property-types';

export const fetchPropertyTypes = async () => {
    try {
        const response = await http_client().get(`api/property-types/`);

        const json: PropertyType[] = await response.data;
        return json
    } catch (error) {
        console.error(error);

        throw new Error(axios_error_message(error));
    }
}