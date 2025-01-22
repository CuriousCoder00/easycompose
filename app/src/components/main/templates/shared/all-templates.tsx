import { useEffect, useState } from "react";
import { DefaultTemplateCard } from "./template-card";
import { getTemplate } from "@/services/template.services";
import { ScrollArea } from "@/components/ui/scroll-area";

const AllTemplates = () => {
  const [template, setTemplate] = useState<HTMLElement | null>(null);
  const fetchTemplate = async () => {
    const res = await getTemplate();
    setTemplate(res);
  };
  useEffect(() => {
    fetchTemplate();
  }, [template]);
  return (
    <ScrollArea className="max-h-[90dvh] overflow-y-auto w-full">
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 place-items-center gap-4 flex-wrap w-full h-full p-4 pb-12">
        <DefaultTemplateCard />
      </div>
    </ScrollArea>
  );
};

export default AllTemplates;
