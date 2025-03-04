import { Moon, Sun } from "lucide-react";
import { useTheme } from "./theme-provider";
import { Button } from "./ui/button";

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  return (
    <Button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      variant="outline"
      size="icon"
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </Button>
  );
};

export function ThemeTogglerMenu() {
  const { theme, setTheme } = useTheme();
  return (
    <div
      className="flex items-center justify-start gap-2 cursor-pointer w-full"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      {theme === "light" ? (
        <div className="flex items-center justify-start gap-2">
          <Sun className="h-[1.2rem] w-[1.2rem]" /> Light Mode
        </div>
      ) : (
        <div className="flex items-center justify-start gap-2">
          <Moon className="h-[1.2rem] w-[1.2rem]" /> Dark Mode
        </div>
      )}
    </div>
  );
}
