import React, { FunctionComponent } from "react";
import { RouteProps } from "../types/route";

const Route: FunctionComponent<RouteProps> = ({
  component: Component,
  ...rest
}) => <Component {...rest} />;

export default Route;
