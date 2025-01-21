import AllTemplates from "@/components/main/templates/all-templates";
import TemplatesHeader from "@/components/main/templates/templates-header";

const TemplatesPage = () => {
  return (
    <div className="flex flex-col items-start justify-start w-full h-full">
      <TemplatesHeader />
      <AllTemplates />
    </div>
  );
};

export default TemplatesPage;
