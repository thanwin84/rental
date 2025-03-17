import { config } from '@/config';
import axios from 'axios';

const customFetch = axios.create({
  baseURL: config.BASE_URL,
  withCredentials: true,
});

export default customFetch;
