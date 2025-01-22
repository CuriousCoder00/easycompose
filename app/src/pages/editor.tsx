import { TemplateEditor, TemplateEditorMenu } from "@/components/main/templates/shared/template-editor";

const TemplateEditorPage = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-start justify-center w-full h-full">
      <TemplateEditor />
      <TemplateEditorMenu/>
    </div>
  );
};

export default TemplateEditorPage;
