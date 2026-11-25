import { AppCheckAuthSkeleton } from '@/components';
import { useCurrentUser } from '@/tanstack/auth/auth.query';
import { Navigate, Outlet } from 'react-router-dom';

const AppGuestLayout = () => {
  const { data: user, isLoading, isError, refetch } = useCurrentUser();

  if (isLoading) {
    return <AppCheckAuthSkeleton />;
  }

  if (isError) {
    return (
      <div>
        Unable to verify authentication.
        <button onClick={() => refetch()}>Retry</button>
      </div>
    );
  }

  if (user) {
    return <Navigate to="/state/dashboard" replace />;
  }

  return <Outlet />;
};
export default AppGuestLayout;
