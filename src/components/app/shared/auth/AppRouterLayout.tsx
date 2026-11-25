import { Outlet } from 'react-router-dom';
import AppAuthListener from './AppAuthListener';

const AppRouterLayout = () => {
  return (
    <>
      <AppAuthListener />
      <Outlet />
    </>
  );
};
export default AppRouterLayout;
