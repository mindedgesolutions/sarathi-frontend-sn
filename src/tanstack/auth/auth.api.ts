import { auth } from '@/api/auth.api';
import { simpleFetch } from '@/axios/simple.fetch';

export const login = async (data: any) => {
  const res = await simpleFetch.post(auth.login, data);
  return res;
};
