import React, { FunctionComponent } from "react";
import { RouteComponentProps } from "@reach/router";
import { RouteProps } from "../types/route";

const Route: FunctionComponent<RouteProps> = ({
  component: Component,
  ...rest
}) => <Component {...rest} />;

export default Route;
