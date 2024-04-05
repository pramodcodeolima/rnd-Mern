import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL

const apiClient = axios.create({
    baseURL: API_BASE_URL,
});

export const fetchProducts = () => apiClient.get('/products');
export const fetchProductsById = (id) => apiClient.get(`/products/${id}`)

export const createProducts = (payload) => apiClient.post(`/products`, payload)
