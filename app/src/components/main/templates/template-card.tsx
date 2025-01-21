import { Button } from "@/components/ui/button";
import { Template } from "@/lib/types/index.types";

const TemplateCard = ({ template }: { template: Template }) => {
  return (
    <div>
      <div className="flex flex-col gap-2 p-4 border border-border rounded-lg shadow-md">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">{template.name}</h3>
        </div>
        <p>{template.description}</p>
        <div className="flex items-center justify-between">
          <div
            className="w-full h-full border border-border rounded-lg bg-background p-4"
            dangerouslySetInnerHTML={{
              __html: `<html>
              ${template.js}
              <style>
              ${template.css}
              </style>
              ${template.html}

          </html>
          `,
            }}
          />
        </div>
        <div className="flex items-center justify-between">
          <Button>View</Button>
          <Button>Edit</Button>
          <Button>Delete</Button>
        </div>
      </div>
    </div>
  );
};

export default TemplateCard;
