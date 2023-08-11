import axios from 'axios';

export const axios_instance = axios.create({
    baseURL: process.env.BASE_URL,
});
