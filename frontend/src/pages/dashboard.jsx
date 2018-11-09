import React from "react";
import { view } from "react-easy-state";
import { Redirect } from "@reach/router";
import Layout from "../components/layout.jsx";
import { appState } from "../state/state.js";

const Dashboard = () => {
  if (!appState.user) {
    return <Redirect from="/dashboard" noThrow to="/login" />;
  }

  return <Layout title="Dashboard">Dash</Layout>;
};

export default view(Dashboard);
