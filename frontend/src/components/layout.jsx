import React from "react";
import { Link } from "@reach/router";
import { view } from "react-easy-state";
import { appState } from "../state/state.js";

const Layout = props => {
  return (
    <>
      <header>
        <p>
          {appState.user ? (
            <>Logged user: {appState.user.username}</>
          ) : (
            <>Not logged</>
          )}
        </p>

        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <h1>{props.title}</h1>
        {props.children}
      </main>
    </>
  );
};

export default view(Layout);
