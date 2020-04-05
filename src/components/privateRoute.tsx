import React, { FunctionComponent } from "react";
import { navigate } from "gatsby";
import { isLoggedIn } from "../services/auth";
import { RouteProps } from "../types/route";

const PrivateRoute: FunctionComponent<RouteProps> = ({
  component: Component,
  ...rest
}) => {
  if (!isLoggedIn() && location.pathname !== `/app/login`) {
    navigate("/app/login");
    return;
  }

  return <Component {...rest} />;
};

export default PrivateRoute;
