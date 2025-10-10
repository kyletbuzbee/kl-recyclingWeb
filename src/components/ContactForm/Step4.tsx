import FileUpload from "../FileUpload";

interface Step4Data {
  attachments: File[];
}

interface Step4Props extends Step4Data {
  updateFields: (fields: Partial<Step4Data>) => void;
  errors?: string[];
}

export function Step4({ attachments, updateFields, errors = [] }: Step4Props) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">File Upload (Optional)</h2>
      <p className="text-gray-600 mb-6">Upload any relevant files, such as photos of your materials or documents. This helps us provide a more accurate quote.</p>

      <FileUpload files={attachments} onFilesChange={(files) => updateFields({ attachments: files })} errors={errors} />

      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
        <h4 className="font-medium text-blue-900 mb-2">Why upload files?</h4>
        <ul className="text-sm text-blue-800 space-y-1">
          <li>• Photos help us assess material quality and quantity</li>
          <li>• Documents provide additional context for your request</li>
          <li>• Multiple file types supported (images, PDF, documents)</li>
          <li>• Maximum 5 files, 10MB each (optional step)</li>
        </ul>
      </div>
    </div>
  );
}
