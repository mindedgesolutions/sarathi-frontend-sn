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
    // Ignore intentional request cancellation
    if (axios.isCancel(error) || error.code === 'ERR_CANCELED') {
      return Promise.reject(error);
    }

    const status = error.response?.status;
    const url = error.config?.url || '';

    // Don't treat incorrect login credentials as expired sessions
    const isLoginRequest = url.includes('/auth/stakeholder-signin');

    if (status === 401 && !isLoginRequest) {
      window.dispatchEvent(new Event('auth:unauthorized'));
    }

    return Promise.reject(error);
  },
);
