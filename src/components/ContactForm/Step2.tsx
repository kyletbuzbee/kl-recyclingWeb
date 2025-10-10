interface Step2Data {
  email: string;
  message: string;
}

interface Step2Props extends Step2Data {
  updateFields: (fields: Partial<Step2Data>) => void;
  errors: Partial<Record<keyof Step2Data, string>>;
}

export function Step2({ email, message, updateFields, errors }: Step2Props) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Your Message</h2>
      <div>
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input type="email" id="email" name="email" value={email} onChange={(e) => updateFields({ email: e.target.value })} className={`form-input mt-1 ${errors.email ? "border-red-500" : ""}`} aria-required="true" />
        {errors.email && <p className="mt-2 text-sm text-red-600">{errors.email}</p>}
      </div>
      <div className="mt-4">
        <label htmlFor="message" className="form-label">
          Message
        </label>
        <textarea id="message" name="message" value={message} onChange={(e) => updateFields({ message: e.target.value })} rows={4} className={`form-input mt-1 resize-none ${errors.message ? "border-red-500" : ""}`} aria-required="true" />
        {errors.message && <p className="mt-2 text-sm text-red-600">{errors.message}</p>}
      </div>
    </div>
  );
}
