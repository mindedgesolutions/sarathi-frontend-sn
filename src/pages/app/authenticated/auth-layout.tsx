import {
  AppCheckAuthSkeleton,
  AppFooter,
  AppSigningOffLoader,
  AppTopnav,
} from '@/components';
import { AppSidebar } from '@/components/app/sidebar/app-sidebar';
import { SidebarProvider } from '@/components/ui/sidebar';
import { useCurrentUser } from '@/tanstack/auth/auth.query';
import { useIsMutating } from '@tanstack/react-query';
import { Navigate, Outlet } from 'react-router-dom';

const AuthLayout = () => {
  const { data: user, isLoading, isError } = useCurrentUser();

  const isLoggingOut =
    useIsMutating({
      mutationKey: ['auth', 'logout'],
      exact: true,
    }) > 0;

  if (isLoading) {
    return <AppCheckAuthSkeleton />;
  }

  if (isError || !user) {
    return <Navigate to={`/auth/stakeholder-signin`} replace />;
  }

  return (
    <>
      <AppSigningOffLoader show={isLoggingOut} />
      <SidebarProvider>
        <AppSidebar />
        <main className="w-full">
          <AppTopnav />
          <Outlet />
          <AppFooter className="mt-8" />
        </main>
      </SidebarProvider>
    </>
  );
};
export default AuthLayout;
