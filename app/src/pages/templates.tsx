import AllTemplates from "@/components/main/templates/shared/all-templates";
import TemplatesHeader from "@/components/main/templates/shared/templates-header";
import MainLayout from "@/layouts/main-layout";

const TemplatesPage = () => {
  return (
    <MainLayout>
      <div className="flex flex-col items-start justify-start w-full">
        <TemplatesHeader />
        <AllTemplates />
      </div>
    </MainLayout>
  );
};

export default TemplatesPage;
