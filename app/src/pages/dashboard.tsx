import UserTemplates from "@/components/main/dashboard/user-templates";
import MainLayout from "@/layouts/main-layout";

const DashboardPage = () => {
  return (
    <MainLayout>
      <div className="flex flex-col items-start justify-start w-full h-full">
        <UserTemplates />
      </div>
    </MainLayout>
  );
};

export default DashboardPage;
