import { Button } from "@/components/ui/button";
import { Eye, Pencil } from "lucide-react";
import { Link } from "react-router";

export const DefaultTemplateCard = () => {
  return (
    <div className="flex flex-col gap-2 p-4 border border-border rounded-lg shadow-md col-span-1 relative w-full h-full">
      <div className="flex items-center justify-center">
        <img
          src="https://res.cloudinary.com/djfjsm9bo/image/upload/e_improve,w_500,h_600,c_thumb,g_auto/v1737488582/Screenshot_2025-01-22_011156_v6yfw8.png"
          alt="Rapid Quest"
        />
      </div>
      <div className="absolute inset-0 hover:bg-gradient-to-br hover:from-black/70 hover:to-black/60 z-50 rounded-lg transition-all scale-95 hover:scale-100 duration-300 flex items-center justify-center">
        <div className="flex items-center justify-center gap-5 w-full">
          <Button asChild>
            <Link to="/template/preview">
              <Eye />
            </Link>
          </Button>
          <Button asChild>
            <Link to="/template/editor">
              <Pencil />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
