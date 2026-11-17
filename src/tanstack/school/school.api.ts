import { school } from '@/api/school.api';
import { simpleFetch } from '@/axios/simple.fetch';

export const getMasters = async (signal: AbortSignal) => {
  const res = await simpleFetch.get(school.masters, { signal });

  console.log(res);

  return res.data.data;
};
