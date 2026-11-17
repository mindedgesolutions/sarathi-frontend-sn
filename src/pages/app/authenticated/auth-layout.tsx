import { AppFooter, AppTopnav } from '@/components';
import { AppSidebar } from '@/components/app/sidebar/app-sidebar';
import { SidebarProvider } from '@/components/ui/sidebar';
import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
  return (
    <>
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
