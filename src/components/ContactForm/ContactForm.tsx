import { useMultiStepForm } from "@/hooks/useMultiStepForm";
import { useState } from "react";
import { Step1 } from "./Step1";
import { Step2 } from "./Step2";
import { Step4 } from "./Step4";
import { Step3 } from "./Step3";
import LoadingSpinner from "../LoadingSpinner";
import { useFormValidation } from "@/hooks/useFormValidation";
import { contactFormSchema } from "@/lib/validation";

type SubmissionStatus = "idle" | "submitting" | "error";

const INITIAL_DATA = {
  name: "",
  email: "",
  message: "",
  attachments: [] as File[],
  honeypot: "", // For spam prevention
};

export function ContactForm() {
  const [data, setData] = useState(INITIAL_DATA);
  const [status, setStatus] = useState<SubmissionStatus>("idle");
  const [error, setError] = useState<string | null>(null);
  const { errors, validate } = useFormValidation(contactFormSchema);

  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } = useMultiStepForm([<Step1 key="step1" {...data} updateFields={updateFields} errors={errors} />, <Step2 key="step2" {...data} updateFields={updateFields} errors={errors} />, <Step4 key="step4" {...data} updateFields={updateFields} />, <Step3 key="step3" />]);

  function updateFields(fields: Partial<typeof INITIAL_DATA>) {
    setData((prev) => ({ ...prev, ...fields }));
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // Validate only required fields for current step
    if (currentStepIndex === 0) {
      // Step 1 validation: check name only
      if (!data.name.trim()) {
        return; // Don't proceed if name is empty
      }
    } else if (currentStepIndex === 1) {
      // Step 2 validation: check email and message
      if (!data.email.trim() || !data.message.trim()) {
        return; // Don't proceed if email or message is empty
      }
    }

    if (currentStepIndex < steps.length - 2) {
      return next();
    }

    if (currentStepIndex === steps.length - 2) {
      setStatus("submitting");
      setError(null);

      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });

        if (!response.ok) {
          throw new Error("Something went wrong. Please try again.");
        }

        next(); // Go to success step
      } catch (err) {
        setStatus("error");
        setError((err as Error).message);
      } finally {
        if (status !== "error") setStatus("idle");
      }
    }
  }

  return (
    <form onSubmit={onSubmit}>
      {step}

      {/* Form Actions and Status */}
      <div className="mt-6">
        {!isLastStep && (
          <div className="flex justify-between items-center">
            {!isFirstStep ? (
              <button type="button" onClick={back} className="px-6 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300">
                Back
              </button>
            ) : (
              <div /> // Placeholder to keep "Next" on the right
            )}

            <button type="submit" disabled={status === "submitting"} className={`btn-primary disabled:bg-slate-gray-400 disabled:cursor-not-allowed disabled:hover:bg-slate-gray-400 flex items-center ${status === "submitting" ? "cursor-not-allowed" : ""}`}>
              {status === "submitting" ? (
                <>
                  <LoadingSpinner size="xs" color="white" className="mr-2" />
                  Submitting...
                </>
              ) : currentStepIndex === steps.length - 2 ? (
                "Finish"
              ) : (
                "Next"
              )}
            </button>
          </div>
        )}

        {status === "error" && (
          <div role="alert" className="mt-4 text-red-600 bg-red-100 p-3 rounded-md">
            <p>
              <strong>Error:</strong> {error}
            </p>
          </div>
        )}
      </div>
    </form>
  );
}
