import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Link, useLocation } from "react-router";

const TemplatesHeader = () => {
  const pathname = useLocation().pathname;
  const templateTypes = [
    { name: "All", href: "/templates" },
    { name: "Newsletters", href: "/templates/newsletter" },
    { name: "Verification Emails", href: "/templates/verification-emails" },
    { name: "Webinars", href: "/templates/webinars" },
    { name: "Invites", href: "/templates/invites" },
  ];
  return (
    <div className="flex items-center justify-between w-full px-4">
      <ScrollArea className="relative md:max-w-[80vw] max-w-[95vw]overflow-x-auto pb-3">
        <div className="flex items-center gap-4">
          {templateTypes.map((type, index) => (
            <Link
              key={index}
              to={type.href}
              className={`flex items-center justify-center flex-nowrap text-nowrap text-sm font-semibold text-text min-w-20 text-center text-background rounded-md px-5 hover:bg-foreground transition-colors duration-200 ${
                pathname === type.href ? "bg-foreground" : "bg-foreground/70"
              }`}
            >
              {type.name}
            </Link>
          ))}
        </div>
        <ScrollBar className="absolute -bottom-7" orientation="horizontal" />
      </ScrollArea>
    </div>
  );
};

export default TemplatesHeader;
