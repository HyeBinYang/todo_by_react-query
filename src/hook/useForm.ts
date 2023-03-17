import React, { useCallback, useEffect, useState } from "react";

interface useFormParams<TValue, TError> {
  initialValues: TValue;
  onSubmit(values: TValue): void;
  validate(values: TValue): TError;
}

const useForm = <TValue, TError>({ initialValues, onSubmit, validate }: useFormParams<TValue, TError>) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<TError>();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setValues({ ...values, [name]: value });
    },
    [values]
  );

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      setIsSubmitting(true);
      e.preventDefault();
      setErrors(validate(values));
    },
    [values]
  );

  useEffect(() => {
    if (isSubmitting) {
      if (errors && Object.keys(errors).length === 0) {
        onSubmit(values);
      }

      setIsSubmitting(false);
    }
  }, [errors]);

  return { values, errors, isSubmitting, handleChange, handleSubmit };
};

export default useForm;
