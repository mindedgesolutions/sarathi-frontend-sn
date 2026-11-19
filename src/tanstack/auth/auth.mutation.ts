import { useMutation } from '@tanstack/react-query';
import { login, logout } from './auth.api';

export const useLogin = () => {
  return useMutation({
    mutationFn: login,
    onSuccess: () => {},
    onError: () => {},
  });
};

// -----------------

export const useLogout = () => {
  return useMutation({
    mutationFn: logout,
    onSuccess: () => {},
    onError: () => {},
  });
};
