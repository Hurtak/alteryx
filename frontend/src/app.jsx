import React from "react";
import { Router } from "@reach/router";
import Login from "./pages/login.jsx";
import Dashboard from "./pages/dashboard.jsx";
import Layout from "./components/layout.jsx";

const Home = () => <Layout title="Home">Home</Layout>;

class App extends React.Component {
  render() {
    return (
      <Router>
        <Home path="/" />
        <Login path="/login" />
        <Dashboard path="/dashboard" />
      </Router>
    );
  }
}

export default App;
