interface Step1Data {
  name: string;
}

interface Step1Props extends Step1Data {
  updateFields: (fields: Partial<Step1Data>) => void;
  errors: Partial<Record<keyof Step1Data, string>>;
}

export function Step1({ name, updateFields, errors }: Step1Props) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Your Information</h2>
      <label htmlFor="name" className="form-label">
        Name
      </label>
      <input autoFocus type="text" id="name" name="name" value={name} onChange={(e) => updateFields({ name: e.target.value })} className={`form-input mt-1 ${errors.name ? "border-red-500" : ""}`} aria-required="true" />
      {errors.name && <p className="mt-2 text-sm text-red-600">{errors.name}</p>}
    </div>
  );
}
