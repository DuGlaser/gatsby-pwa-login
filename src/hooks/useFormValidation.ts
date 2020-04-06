import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { handleLogin } from "../services/auth";

interface INITIAL_STATE {
  email: string;
  password: string;
}

const useFormValidation = (
  initialState: INITIAL_STATE,
  validation: CallableFunction
) => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (isSubmitting) {
      const noErrors = Object.keys(errors).length === 0;
      if (noErrors) {
        console.log(values.email, values.password);
        handleLogin(values);
        setIsSubmitting(false);
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
