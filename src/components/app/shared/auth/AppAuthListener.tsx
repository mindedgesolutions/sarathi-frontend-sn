import { useQueryClient } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AppAuthListener = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  useEffect(() => {
    const channel = new BroadcastChannel('auth-channel');

    let handled = false;

    const signOut = (broadcast: boolean) => {
      if (handled) return;

      handled = true;

      // Clear all cached queries and mutations
      queryClient.clear();

      // Notify other tabs if needed
      if (broadcast) {
        channel.postMessage({
          type: 'LOGOUT',
        });
      }

      navigate('/auth/stakeholder-signin', {
        replace: true,
      });
    };

    // Session expired / unauthorized API response
    const handleUnauthorized = () => {
      signOut(true);
    };

    // Manual logout in this tab
    const handleLogout = () => {
      signOut(true);
    };

    // Logout from another tab
    const handleCrossTabLogout = (event: MessageEvent) => {
      if (event.data?.type === 'LOGOUT') {
        signOut(false);
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
