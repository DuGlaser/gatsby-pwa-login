import React, { FunctionComponent, useState } from "react";
import { RouteComponentProps } from "@reach/router";
import { navigate } from "gatsby";
import { handleLogin, isLoggedIn } from "../services/auth";

interface Props {
  path: string;
}

const INITIAL_STATE = {
  username: "",
  password: "",
};

const Login: FunctionComponent<Props> = (path) => {
  const [value, setValue] = useState(INITIAL_STATE);

  const handleUpdate = (event: any) => {
    setValue({
      ...value,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    handleLogin(value);
  };

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
            <input type="text" name="username" onChange={handleUpdate} />
          </label>
          <label>
            Password
            <input type="password" name="password" onChange={handleUpdate} />
          </label>
          <input type="submit" value="Log In" />
        </form>
      </>
    );
  }
};

export default Login;
