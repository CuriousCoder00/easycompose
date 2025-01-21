import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import React from "react";
import { Link } from "react-router";

const AppMenu = ({
  items,
}: {
  items: { title: string; url: string; icon: React.FC }[];
}) => {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Application</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => (
          <SidebarMenuItem>
            <SidebarMenuButton tooltip={item.title}>
              <Link to={item.url} className="flex items-center gap-2 w-full">
                {item.icon && <item.icon />}
                <span>{item.title}</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
};

export default AppMenu;
