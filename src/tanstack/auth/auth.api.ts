import { auth } from '@/api/auth.api';
import { simpleFetch } from '@/axios/simple.fetch';
import axios from 'axios';

export const login = async (data: any) => {
  await simpleFetch.get(auth.sanctum);

  await simpleFetch.post(auth.login, data);

  const res = await simpleFetch.get(auth.currentUser);

  return res.data.data;
};

// ---------------

export const currentUser = async (signal: AbortSignal) => {
  try {
    const res = await simpleFetch.get(auth.currentUser, {
      signal,
    });

    return res.data.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.status === 401) {
      return null;
    }

    throw error;
  }
};

// ---------------

export const logout = async () => {
  const res = await simpleFetch.post(auth.logout);

  return res.data;
};
