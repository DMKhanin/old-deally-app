import axios from 'axios';
import AddTokenHeaderIterceptor from './interceptors/AddTokenHeaderIterceptor';
import { toast } from 'react-toastify';
import store from './../store';
import Router from 'next/router';

const DashboardAPIService = axios.create({
  baseURL: process.env.API_URL,
  timeout: 600000 // request timeout
});

DashboardAPIService.interceptors.request.use(
  config => AddTokenHeaderIterceptor(config),
  error => Promise.reject(error)
);

DashboardAPIService.interceptors.response.use(
  response => {
    if (response.data.success) {
      toast.success(response.data.success);
    }
    return response;
  },
  error => {
    try {
      const { data } = error.response;
      if (data.error) {
        toast.error(data.error);
      }
      if (data.message === "User not authorised!") {
        Router.push('/dashboard/logout');
        Promise.reject();
      }
      return Promise.reject(error);
    } catch (error) {
      console.log(error);
      Router.push('/dashboard/logout');
      Promise.reject();
    }
  }
);

export default DashboardAPIService;