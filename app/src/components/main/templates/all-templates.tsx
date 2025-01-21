import { useEffect, useState } from "react";
import TemplateCard from "./template-card";
import { getAllTemplates, getTemplate } from "@/services/template.services";
import { Template } from "@/lib/types/index.types";

const AllTemplates = () => {
  const [template, setTemplate] = useState<Template | null>(null);
  const fetchTemplate = async () => {
    const res = await getTemplate();
    setTemplate(res);
  };
  useEffect(() => {
    fetchTemplate();
  }, [template]);
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 place-items-center gap-4 flex-wrap w-full h-full p-4">
      {template ? <TemplateCard template={template} /> : <p>Loading...</p>}
    </div>
  );
};

export default AllTemplates;
