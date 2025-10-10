import { useState, useCallback } from "react";
import { z, ZodError } from "zod";

type Errors<T> = Partial<Record<keyof T, string>>;

export function useFormValidation<T>(schema: z.ZodSchema<T>) {
  const [errors, setErrors] = useState<Errors<T>>({});

  const validate = useCallback(
    (data: T) => {
      try {
        schema.parse(data);
        setErrors({});
        return true;
      } catch (error) {
        if (error instanceof ZodError) {
          const newErrors: Errors<T> = {};
          error.issues.forEach((err) => {
            if (err.path.length > 0) {
              newErrors[err.path[0] as keyof T] = err.message;
            }
          });
          setErrors(newErrors);
        }
        return false;
      }
    },
    [schema],
  );

  return { errors, validate };
}
