import { FunctionComponent } from "react";
import { RouteComponentProps } from "@reach/router";

export type RouteProps = {
  component: FunctionComponent;
} & RouteComponentProps;
