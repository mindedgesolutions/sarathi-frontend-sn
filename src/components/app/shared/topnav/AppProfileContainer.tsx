import { Link } from 'react-router-dom';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { appIcons, images } from '@/constants';
import { BadgeCheck, LogOut } from 'lucide-react';
import { useCurrentUser } from '@/tanstack/auth/auth.query';
import { useLogout } from '@/tanstack/auth/auth.mutation';

const AppProfileContainer = () => {
  const { data, isLoading } = useCurrentUser();
  const logout = useLogout();
  const user = data;

  const handleLogout = async () => {
    await logout.mutateAsync(undefined, {
      onSuccess: () => {
        window.dispatchEvent(new Event('auth:logout'));
      },
      onError: (error) => {
        console.error('Logout API failed:', error);
      },
    });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="flex flex-row flex-wrap items-center gap-2 md:gap-3 cursor-pointer">
          <section className="text-xs tracking-wider text-muted-foreground">
            Welcome, {isLoading ? 'Loading ...' : user?.name}
          </section>
          <Avatar>
            <AvatarImage src={images.profileImg} alt={user?.name} />
            <AvatarFallback>
              <appIcons.user />
            </AvatarFallback>
          </Avatar>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-sm"
        align="end"
      >
        <DropdownMenuGroup>
          <DropdownMenuLabel className="p-0 font-normal">
            <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
              <Avatar className="h-8 w-8 rounded-lg">
                <AvatarImage src={images.profileImg} alt={user?.name} />
                <AvatarFallback>
                  <appIcons.user />
                </AvatarFallback>
              </Avatar>
              <div className="grid flex-1 text-left text-xs leading-normal">
                <span className="truncate font-medium">{user?.name}</span>
                <span className="truncate">{user?.email}</span>
              </div>
            </div>
          </DropdownMenuLabel>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <Link to={`#`}>
            <DropdownMenuItem className="text-xs cursor-pointer mb-1">
              <BadgeCheck className="size-3.5" />
              Account
            </DropdownMenuItem>
          </Link>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem
            className="text-xs cursor-pointer"
            onClick={handleLogout}
          >
            <LogOut className="size-3.5" />
            Log out
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export default AppProfileContainer;
