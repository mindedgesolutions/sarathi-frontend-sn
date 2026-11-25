import { useQueryClient } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AppAuthListener = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  useEffect(() => {
    const channel = new BroadcastChannel('auth-channel');

    const signOut = async (broadcast: boolean) => {
      // Cancel pending queries
      await queryClient.cancelQueries();

      // Explicitly mark the user as unauthenticated
      queryClient.setQueryData(['current-user'], null);

      // Remove inactive cached data
      queryClient.removeQueries({
        type: 'inactive',
        predicate: (query) => query.queryKey[0] !== 'current-user',
      });

      // Notify other tabs
      if (broadcast) {
        channel.postMessage({ type: 'LOGOUT' });
      }

      // Redirect to sign-in
      navigate('/auth/stakeholder-signin', {
        replace: true,
      });
    };

    const handleUnauthorized = () => {
      void signOut(true);
    };

    const handleLogout = () => {
      console.log('Logout event received');
      void signOut(true);
    };

    const handleCrossTabLogout = (event: MessageEvent) => {
      if (event.data?.type === 'LOGOUT') {
        void signOut(false);
      }
    };

    window.addEventListener('auth:unauthorized', handleUnauthorized);

    window.addEventListener('auth:logout', handleLogout);

    channel.addEventListener('message', handleCrossTabLogout);

    return () => {
      window.removeEventListener('auth:unauthorized', handleUnauthorized);

      window.removeEventListener('auth:logout', handleLogout);

      channel.removeEventListener('message', handleCrossTabLogout);

      channel.close();
    };
  }, [queryClient, navigate]);

  return null;
};
export default AppAuthListener;
