import { useEffect, useState } from "react";
import TemplateCard from "./template-card";
import { getUserTemplates } from "@/services/template.services";
import { Template } from "@/lib/types/index.types";
import { PlusSquare } from "lucide-react";

const UserTemplates = () => {
  const [templates, setTemplates] = useState<Template[]>([]);
  const fetchTemplates = async () => {
    const res = await getUserTemplates();
    setTemplates(res);
  };
  useEffect(() => {
    fetchTemplates();
  }, [templates]);
  return (
    <div className="flex flex-col items-start justify-start gap-4 flex-wrap w-full p-4">
      {templates.length > 0 && templates ? (
        templates.map(() => <TemplateCard />)
      ) : (
        <div className="flex flex-col items-center justify-center w-40 h-40 rounded border border-border hover:scale-105 transition-all cursor-pointer hover:bg-gradient-to-br hover:from-sky-700/20 hover:to-sky-700/5 duration-300">
          <span>
            <PlusSquare />
          </span>
          <span>Create New</span>
        </div>
      )}
    </div>
  );
};

export default UserTemplates;
