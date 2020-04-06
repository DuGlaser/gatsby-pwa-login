import React, { FunctionComponent, useState } from "react";
import { RouteComponentProps } from "@reach/router";
import { navigate } from "gatsby";
import { handleLogin, isLoggedIn } from "../services/auth";
import validate from "../services/validate";
import useFormValidation from "../hooks/useFormValidation";

const INITIAL_STATE = {
  email: "",
  password: "",
};

const Login: FunctionComponent = () => {
  const {
    handleChange,
    handleSubmit,
    handleBlur,
    values,
    errors,
  } = useFormValidation(INITIAL_STATE, validate);

  console.log(errors["email"]);

  if (isLoggedIn()) {
    navigate(`/app/profile`);
  } else {
    return (
      <>
        <h1>Log in</h1>
        <form
          style={{ display: "flex", flexDirection: "column" }}
          method="post"
          onSubmit={handleSubmit}
        >
          <label>
            email
            <input
              type="text"
              name="email"
              className={errors["email"] && "error-input"}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </label>

          {errors["email"] && <p className="error-text">{errors["email"]}</p>}
          <label>
            Password
            <input
              type="password"
              name="password"
              className={errors["password"] && "error-input"}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </label>
          {errors["password"] && (
            <p className="error-text">{errors["password"]}</p>
          )}
          <input type="submit" value="Log In" />
        </form>
      </>
    );
  }
};

export default Login;
