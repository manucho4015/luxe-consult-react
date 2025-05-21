import http_client from './api';
import axios_error_message from './axios_helper'

// custom types
import type { Inquiry } from '../custom-types/inquiries';

export const createInquiry = async (inquiry: Inquiry) => {
    try {
        const response = await http_client().post(`api/inquiries/`, inquiry);

        const json: Inquiry = await response.data;
        // console.log(json)
        return json
    } catch (error) {
        console.error(error);

        throw new Error(axios_error_message(error));
    }
}