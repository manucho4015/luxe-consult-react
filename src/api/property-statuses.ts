import http_client from './api';
import axios_error_message from './axios_helper'

// custom types
import type { PropertyStatus } from '../custom-types/property-statuses';

export const fetchPropertyStatuses = async () => {
    try {
        const response = await http_client().get(`api/property-statuses/`);

        const json: PropertyStatus[] = await response.data;
        return json
    } catch (error) {
        console.error(error);

        throw new Error(axios_error_message(error));
    }
}