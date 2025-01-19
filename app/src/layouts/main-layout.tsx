import { AppSidebar } from "@/components/main/sidebar/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [activePathname, setActivePathname] = useState<string>("Dashboard");
  const [activePath, setActivePath] = useState<string>("/dashboard");
  const path = useLocation().pathname;
  const paths = path.split("/");
  useEffect(() => {
    if (paths.length === 2) {
      setActivePathname(
        breadcrumbs.filter((item) => item.url === path)[0].title
      );
      setActivePath(
        breadcrumbs.find((item) => item.url === path)?.url || "/dashboard"
      );
    } else {
      setActivePathname(paths[paths.length - 1]);
      setActivePath(path);
    }
  }, [path]);
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="flex h-screen overflow-hidden w-full">
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Easy Compose</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbLink href={activePath}>
                    <BreadcrumbPage>{activePathname}</BreadcrumbPage>
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
}

const breadcrumbs = [
  {
    title: "Dashboard",
    url: "/dashboard",
  },
  {
    title: "Templates",
    url: "/templates",
  },
  {
    title: "Search",
    url: "/search",
  },
];
