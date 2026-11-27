import { Outlet } from 'react-router-dom';
import AppAuthListener from './auth-listener';

const AppRouterLayout = () => {
  return (
    <>
      <AppAuthListener />
      <Outlet />
    </>
  );
};
export default AppRouterLayout;
