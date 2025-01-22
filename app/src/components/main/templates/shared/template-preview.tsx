import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { copyHTMLToClipboard } from "@/lib/utils";
import { getTemplate } from "@/services/template.services";
import { ChevronLeft, Copy } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router";

export const DefaultTemplatePreview = () => {
  const [template, setTemplate] = useState<HTMLElement>();
  const fetchTemplate = async () => {
    const res = await getTemplate();
    setTemplate(res);
  };
  useEffect(() => {
    fetchTemplate();
  }, [template]);
  if(!template) return <p>Loading...</p>
  return (
    <div className="flex flex-col items-start justify-center w-full h-full relative">
      <div className="flex items-center justify-between w-[95dvw] mx-auto inset-x-0 z-50 absolute top-4">
        <Button variant={"secondary"} className="rounded-none" asChild>
          <Link to="/templates">
            <ChevronLeft /> Go Back To Templates
          </Link>
        </Button>
        <Button
          variant={"secondary"}
          className="rounded-none"
          onClick={() => copyHTMLToClipboard(template)}
        >
          <Copy /> Copy HTML
        </Button>
      </div>
      <ScrollArea className="max-h-dvh overflow-y-auto w-full">
        <div
          className="w-full h-full border border-border rounded-lg bg-background p-4"
          dangerouslySetInnerHTML={{
            __html: template ? template : "<p>Loading...</p>",
          }}
        />
      </ScrollArea>
    </div>
  );
};
