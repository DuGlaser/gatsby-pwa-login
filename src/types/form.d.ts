export interface FormInitialState {
  email: string;
  password: string;
}

export interface FormValidateError {
  email?: string;
  password?: string;
}
