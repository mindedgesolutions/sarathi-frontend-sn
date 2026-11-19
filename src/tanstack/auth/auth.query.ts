import { useQuery } from '@tanstack/react-query';
import { currentUser } from './auth.api';

export const useCurrentUser = () => {
  return useQuery({
    queryKey: ['current-user'],
    queryFn: ({ signal }) => currentUser(signal),
    retry: false,
  });
};
