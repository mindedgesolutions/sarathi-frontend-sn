import axios from 'axios';

export const simpleFetch = axios.create({
  baseURL: '/',
  withCredentials: true,
  withXSRFToken: true,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
  },
});

simpleFetch.interceptors.response.use(
  (response) => response,

  (error) => {
    const status = error.response?.status;
    const url = error.config?.url?.split('?')[0];

    const excludedRoutes = ['/auth/login', '/api/auth/current-user'];

    if (status === 401 && !excludedRoutes.includes(url)) {
      window.dispatchEvent(new Event('auth:unauthorized'));
    }

    return Promise.reject(error);
  },
);
