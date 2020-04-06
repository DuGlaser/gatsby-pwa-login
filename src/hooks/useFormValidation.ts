import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { handleLogin } from "../services/auth";
import { navigate } from "gatsby";
import { FormInitialState, FormValidateError } from "../types/form";

const useFormValidation = (
  initialState: FormInitialState,
  validation: CallableFunction
) => {
  const [values, setValues] = useState<FormInitialState>(initialState);
  const [errors, setErrors] = useState<FormValidateError>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (isSubmitting) {
      const noErrors = Object.keys(errors).length === 0;
      console.log({ noErrors });
      if (noErrors) {
        console.log(values.email, values.password);
        handleLogin(values);
        setIsSubmitting(false);
        navigate(`/app/profile`);
      } else {
        setIsSubmitting(false);
      }
    }
  }, [errors]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleBlur = () => {
    const validationError = validation(values);
    setErrors(validationError);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const validationError = validation(values);
    setErrors(validationError);
    setIsSubmitting(true);
  };

  return { handleChange, handleSubmit, handleBlur, values, errors };
};

export default useFormValidation;
