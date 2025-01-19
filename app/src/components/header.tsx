import { Link, useLocation } from "react-router";
import { Button } from "./ui/button";
import { ThemeToggle } from "./theme-toggle";
import { useSession } from "@/hooks/use-session";

const Header = () => {
  const pathname = useLocation().pathname;
  const paths = ["/auth/login", "/auth/register", "/"];
  const { session } = useSession();
  return (
    <header
      className={`fixed inset-x-0  dark:bg-black/30 backdrop-blur-md z-50 border-b border-border bg-black/5 ${
        !paths.includes(pathname) && "hidden"
      } `}
    >
      <nav className="flex justify-between items-center p-4 md:px-20">
        <Link to="/" className="text-3xl font-bold text-sky-600">
          EasyCompose
        </Link>
        <div className="flex items-center gap-4">
          {session.isLoggedIn ? (
            <Button className="bg-sky-700 hover:bg-sky-600 transition-colors duration-300 text-white px-6">
              <Link to={"/dashboard"}>Get Started</Link>
            </Button>
          ) : (
            <Button className="bg-sky-700 hover:bg-sky-600 transition-colors duration-300 text-white px-6">
              <Link to={"/auth/login"}>Login</Link>
            </Button>
          )}
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
};

export default Header;
