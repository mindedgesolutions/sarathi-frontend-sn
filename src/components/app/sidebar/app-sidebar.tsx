import { Search } from 'lucide-react';

import { NavMain } from '@/components/app/sidebar/nav-main';
import { NavUser } from '@/components/app/sidebar/nav-user';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarInput,
  SidebarRail,
  useSidebar,
} from '@/components/ui/sidebar';
import { Link } from 'react-router-dom';
import { images, titles } from '@/constants';
import { AppTooltip } from '@/components';
import { useTheme } from '@/components/dark-mode/theme-provider';
import { cn } from 'cn';
import { useCurrentUser } from '@/tanstack/auth/auth.query';

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { open } = useSidebar();
  const { theme } = useTheme();
  const { data } = useCurrentUser();

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <Link
          to={`/state/dashboard`}
          className="flex items-center cursor-pointer gap-4 px-2"
        >
          {theme === 'dark' ? (
            <img
              src={images.nationalEmblemInverted}
              className="w-7 object-cover"
            />
          ) : (
            <img src={images.nationalEmblem} className="w-7 object-cover" />
          )}
          {open && (
            <div className="flex flex-col gap-px">
              <span className="text-lg font-extrabold text-primary uppercase tracking-widest">
                {titles.projectName}
              </span>
              <span className="text-xs">
                <AppTooltip
                  text={titles.depName}
                  cropLen={25}
                  className="tracking-wide"
                />
              </span>
            </div>
          )}
        </Link>
        <SidebarGroup
          className={cn(
            'py-0 mt-2 transition-all ease-in-out',
            `${open ? 'opacity-100 translate-y-0 duration-1000 visible' : 'opacity-0 -translate-y-2 invisible'}`,
          )}
        >
          <SidebarGroupContent className="relative">
            <SidebarInput
              id="search"
              placeholder="Search ..."
              className="pl-8"
            />
            <Search className="pointer-events-none absolute top-1/2 left-2 text-muted-foreground/40 w-3.5 h-3.5 -translate-y-1/2 select-none" />
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarHeader>
      <SidebarContent>
        <NavMain />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
