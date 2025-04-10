import { config } from '@/config';
import axios from 'axios';

const customFetch = axios.create({
  baseURL: config.BASE_URL,
  withCredentials: true,
});

customFetch.interceptors.response.use(
  function (response) {
    return response.data.data;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export default customFetch;
