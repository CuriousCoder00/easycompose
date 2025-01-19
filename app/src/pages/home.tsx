import Hero from "@/components/landing/hero";
import { useSession } from "@/hooks/use-session";
import { useEffect } from "react";
// import { ThemeToggle } from "@/components/theme-toggle";

const Home = () => {
  const { session } = useSession();
  useEffect(() => {
    console.log(session);
  }, []);
  return (
    <div className="flex flex-col items-center justify-center min-h-dvh">
      <Hero />
    </div>
  );
};

export default Home;
