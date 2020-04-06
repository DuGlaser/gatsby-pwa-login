import React, { FunctionComponent, useState } from "react";
import { RouteComponentProps } from "@reach/router";
import { navigate } from "gatsby";
import { handleLogin, isLoggedIn } from "../services/auth";
import validate from "../services/validate";
import useFormValidation from "../hooks/useFormValidation";

interface Props {
  path: string;
}

const INITIAL_STATE = {
  email: "",
  password: "",
};

const Login: FunctionComponent<Props> = (path) => {
  const {
    handleChange,
    handleSubmit,
    handleBlur,
    values,
    errors,
  } = useFormValidation(INITIAL_STATE, validate);

  if (isLoggedIn()) {
    navigate(`/app/profile`);
  } else {
    return (
      <>
        <h1>Log in</h1>
        <form
          method="post"
          onSubmit={(event) => {
            handleSubmit(event);
            navigate(`/app/profile`);
          }}
        >
          <label>
            Username
            <input
              type="text"
              name="username"
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </label>
          <label>
            Password
            <input
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </label>
          <input type="submit" value="Log In" />
        </form>
      </>
    );
  }
};

export default Login;
