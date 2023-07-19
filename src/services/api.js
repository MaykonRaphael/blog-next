import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://kgwqjmmvgqgdkortppow.supabase.co/rest/v1',
    headers: {
        apikey: process.env.API_KEY,
        authorization: process.env.AUTHORIZATION
    }
})