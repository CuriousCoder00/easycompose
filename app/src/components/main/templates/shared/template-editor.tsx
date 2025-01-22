import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { getTemplate } from "@/services/template.services";
import { ChevronLeft } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";

export const TemplateEditor = () => {
  const [template, setTemplate] = useState<HTMLElement>();
  const params = useParams();
  const { templateId } = params;
  const fetchTemplate = async () => {
    const res = await getTemplate();
    setTemplate(res);
  };
  const fetchTemplateById = async () => {
    console.log("Template Fetched by id:", templateId);
  };
  useEffect(() => {
    if (templateId) {
      fetchTemplateById();
    } else {
      fetchTemplate();
    }
  }, [templateId, template]);
  return (
    <div className="flex flex-col items-start justify-center w-full h-full relative">
      <Button
        variant={"secondary"}
        className="absolute z-50 top-4 left-4 rounded-none"
        asChild
      >
        <Link to="/templates">
          <ChevronLeft /> Go Back To Templates
        </Link>
      </Button>
      <ScrollArea className="max-h-dvh overflow-y-auto w-full">
        <div contentEditable className="bg-white">
          <div
            className="max-w-[800px]"
            dangerouslySetInnerHTML={{
              __html: template ? template : "",
            }}
          />
        </div>
      </ScrollArea>
    </div>
  );
};

export const TemplateEditorMenu = () => {
  return (
    <div className="max-md:hidden fixed top-4 right-4 bottom-4 max-w-[500px] w-full border border-border rounded-lg">
      <h1>Template Editor</h1>
    </div>
  );
};
