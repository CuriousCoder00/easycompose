import { useEffect, useState } from "react";
import TemplateCard from "./template-card";
import { getAllTemplates } from "@/services/template.services";
import { Template } from "@/lib/types/index.types";

const AllTemplates = () => {
  const [templates, setTemplates] = useState<Template[]>([]);
  const fetchTemplates = async () => {
    const res = await getAllTemplates();
    setTemplates(res.templates);
  };
  useEffect(() => {
    fetchTemplates();
  }, [templates]);
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 place-items-center gap-4 flex-wrap w-full h-full p-4">
      {templates.length > 0 && templates ? (
        templates.map((template: any, index: number) => (
          <TemplateCard key={index} template={template} />
        ))
      ) : (
        <div className="flex items-center justify-center w-full h-full col-span-12">
          No Templates Found
        </div>
      )}
    </div>
  );
};

export default AllTemplates;
