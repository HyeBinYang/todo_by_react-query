import React, { useState } from "react";

interface useFormParams {
  initialValues: object;
  onSubmit(...args: any): void;
  validate?: any;
}

const useForm = ({ initialValues, onSubmit, validate }: useFormParams) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  return null;
};

export default useForm;
