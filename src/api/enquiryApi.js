import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api',
  headers: { 'Content-Type': 'application/json' },
});

export const submitEnquiry = (payload) => api.post('/enquiries', payload);
export const fetchEnquiries = (filters = {}) => api.get('/enquiries', { params: filters });
export const removeEnquiry = (id) => api.delete(`/enquiries/${id}`);
