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
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [breadcrumbItems, setBreadcrumbItems] = useState<
    { title: string; url: string }[]
  >([]);
  const path = useLocation().pathname;

  useEffect(() => {
    const paths = path.split("/").filter((segment) => segment); // Remove empty strings
    const breadcrumbs = paths.map((segment, index) => {
      const url = `/${paths.slice(0, index + 1).join("/")}`;

      return {
        title: capitalize(breadcrumbsMap[segment] || segment),
        url,
      };
    });
    setBreadcrumbItems(breadcrumbs);
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
                {breadcrumbItems.map((item) => (
                  <React.Fragment key={item.url}>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <BreadcrumbLink href={item.url}>
                        <BreadcrumbPage>{item.title}</BreadcrumbPage>
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                  </React.Fragment>
                ))}
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
}

const breadcrumbsMap: Record<string, string> = {
  dashboard: "Dashboard",
  templates: "Templates",
  "verfication-emails": "Verification Emails",
  search: "Search",
};

function capitalize(text: string) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}
