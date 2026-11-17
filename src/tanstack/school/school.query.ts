import { useQuery } from '@tanstack/react-query';
import { getMasters } from './school.api';

export const useStudentAddMasters = () => {
  return useQuery({
    queryKey: ['student-add-masters'],
    queryFn: ({ signal }) => getMasters(signal),
    staleTime: Infinity,
    gcTime: Infinity,
  });
};
