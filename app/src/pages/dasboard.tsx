import { useSession } from "@/hooks/use-session";
import { useEffect } from "react";

const DashboardPage = () => {
  const { session } = useSession();
  useEffect(() => {
    document.title = "Dashboard";
    console.log(session);
  }, [session]);
  return (
    <div className="flex items-center justify-center w-full h-full">
      <h1 className="text-3xl font-bold ">Welcome to the Dashboard</h1>
    </div>
  );
};

export default DashboardPage;
