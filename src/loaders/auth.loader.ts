import { currentUser } from '@/tanstack/auth/auth.api';
import type { QueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { redirect } from 'react-router-dom';

export const loader = (queryClient: QueryClient) => async () => {
  try {
    const user = await queryClient.fetchQuery({
      queryKey: ['current-user'],
      queryFn: ({ signal }) => currentUser(signal),
      staleTime: 0,
    });
    if (user) {
      return redirect('/state/dashboard');
    }

    return null;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.status === 401) {
      return null;
    }

    throw error;
  }
};
