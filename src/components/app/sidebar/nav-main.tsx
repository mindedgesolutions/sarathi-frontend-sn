import { ChevronRight } from 'lucide-react';

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from '@/components/ui/sidebar';
import { Link } from 'react-router-dom';
import { appMenus } from '@/constants/menu';

export function NavMain() {
  const { schoolMenus } = appMenus();

  return (
    <SidebarGroup>
      <SidebarMenu>
        {schoolMenus.map((item) =>
          item.hasChild ? (
            <Collapsible
              key={item.title}
              // defaultOpen={item.isActive}
              className="group/collapsible"
            >
              <SidebarMenuItem>
                <SidebarMenuButton
                  tooltip={item.title}
                  render={<CollapsibleTrigger />}
                >
                  {item.icon}
                  <span className="text-xs">{item.title}</span>
                  <ChevronRight className="ml-auto transition-transform duration-200 in-aria-expanded:rotate-90" />
                </SidebarMenuButton>
                <CollapsibleContent>
                  <SidebarMenuSub>
                    {item.children?.map((subItem) => (
                      <SidebarMenuSubItem key={subItem.title}>
                        <SidebarMenuSubButton
                          render={<Link to={subItem.url} />}
                        >
                          <span className="text-xs">{subItem.title}</span>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                </CollapsibleContent>
              </SidebarMenuItem>
            </Collapsible>
          ) : (
            <SidebarMenuItem key={item.url}>
              <SidebarMenuButton
                className="cursor-pointer"
                tooltip={item.title}
              >
                {item.icon}
                <span className="text-xs">{item.title}</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ),
        )}
      </SidebarMenu>
      <SidebarGroupLabel className="mt-4 text-primary">
        Switch to older version
      </SidebarGroupLabel>
    </SidebarGroup>
  );
}
