import React from "react";
import { Router } from "@reach/router";
import PrivateRoute from "../components/privateRoute";
import Profile from "../components/profile";
import Login from "../components/login";
import DefaultLayout from "../layouts/index";
import Route from "../components/route";

const App = () => (
  <DefaultLayout>
    <Router>
      <PrivateRoute path="/app/profile" component={Profile} />
      <Route path="/app/login" component={Login} />
    </Router>
  </DefaultLayout>
);

export default App;
