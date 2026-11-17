import { ModeToggle } from '@/components/dark-mode/mode-toggle';
import { SidebarTrigger } from '@/components/ui/sidebar';
import AppProfileContainer from '@/components/app/shared/topnav/AppProfileContainer';

const Topnav = () => {
  return (
    <div className="bg-card shadow-md shadow-card-foreground/5 p-1 flex items-center justify-between">
      <SidebarTrigger />
      <div className="flex gap-1 md:gap-4 items-center mr-1 md:mr-4">
        <AppProfileContainer />
        <ModeToggle
          iconSize={4}
          iconColor="text-primary"
          btnVariant={'ghost'}
          btnClass="bg-transparent hover:bg-transparent"
        />
      </div>
    </div>
  );
};
export default Topnav;
