import axios from 'axios';
import { toast } from 'react-toastify';

const ClientAPIService = axios.create({
  baseURL: process.env.API_URL,
  timeout: 600000 // request timeout
});

ClientAPIService.interceptors.response.use(
  response => {
    if (response.data.success) {
      toast.success(response.data.success);
    }
    return response;
  },
  error => {
    const data = error?.response?.data;
    if (data?.error) {
      toast.error(data.error);
    }
    return Promise.reject(error);
  }
);

export default ClientAPIService;