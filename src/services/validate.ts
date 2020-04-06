import { FormValidateError } from "../types/form";

const validate = (values) => {
  console.log(values);
  const errors: FormValidateError = {};
  if (!values.email) {
    errors.email = "Required Email";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.password) {
    errors.password = "Required Password";
  } else if (values.password.length < 4) {
    errors.password = "Password must be at least 6 characters";
  }
  console.log(errors);
  return errors;
};

export default validate;
