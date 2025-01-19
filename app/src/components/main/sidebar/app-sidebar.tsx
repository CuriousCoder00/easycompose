import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  useSidebar,
} from "@/components/ui/sidebar";
import {
  LayoutDashboard,
  LayoutTemplate,
  LucideMails,
  Search,
} from "lucide-react";
import AppMenu from "./app-menu";
import AccountNav from "./account-nav";

const data = {
  applicationMenu: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      title: "Templates",
      url: "/templates",
      icon: LayoutTemplate,
    },
    {
      title: "Search",
      url: "#",
      icon: Search,
    },
  ],
  user: {
    name: "John Doe",
    email: "john.doe@gmail.com",
  },
};

export function AppSidebar() {
  const { open } = useSidebar();
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        {!open ? (
          <LucideMails className="inline text-sky-600 pl-2 size-8" />
        ) : (
          <div className="text-xl font-bold text-sky-600 flex items-center justify-start gap-3 pl-2">
            <LucideMails className="inline" /> EasyCompose
          </div>
        )}
      </SidebarHeader>
      <SidebarContent>
        <AppMenu items={data.applicationMenu} />
      </SidebarContent>
      <SidebarFooter>
        <AccountNav user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
