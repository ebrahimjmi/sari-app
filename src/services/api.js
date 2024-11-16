import axios from "axios";

import { BASE_URL } from '../constants/config';  


const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});


export const fetchHeaderData = async (url) => {
    try {
        const response = await apiClient.get(`${BASE_URL}/api/`+url);
        return response.data;
    } catch (error) {
        console.error('Error fetching header data:', error);
        throw error;
    }
};

export const fetchHomePageData = async (url) => {
    try {
        const response = await apiClient.get(`${BASE_URL}/api/`+url);
        return response.data;
    } catch (error) {
        console.error('Error fetching header data:', error);
        throw error;
    }
};

export const fetchFooterData = async (url) => {
    try {
        const response = await apiClient.get(`${BASE_URL}/api/`+url);
        return response.data;
    } catch (error) {
        console.error('Error fetching header data:', error);
        throw error;
    }
};