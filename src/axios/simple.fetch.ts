import axios from 'axios';

export const simpleFetch = axios.create({
  baseURL: '/',
  withCredentials: true,
  withXSRFToken: true,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});
