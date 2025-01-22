import { Button } from "@/components/ui/button";

const TemplateCard = () => {
  return (
    <div>
      <div className="flex flex-col gap-2 p-4 border-border rounded-lg shadow-md">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">Template Name</h3>
          <Button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TemplateCard;
