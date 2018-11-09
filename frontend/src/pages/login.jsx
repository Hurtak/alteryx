import React from "react";
import { navigate } from "@reach/router";
import Layout from "../components/layout.jsx";
import { appState } from "../state/state.js";
import * as api from "../api.js";

export default class Login extends React.Component {
  state = {
    formUsername: "",
    formPassword: "",
    serverError: null
  };

  setFormUsername = e => {
    this.setState({
      formUsername: e.target.value
    });
  };

  setFormPassword = e => {
    this.setState({
      formPassword: e.target.value
    });
  };

  submit = async e => {
    e.preventDefault();

    const res = await api.login({
      username: this.state.formUsername,
      password: this.state.formPassword
    });

    if (res.error) {
      this.setState({
        serverError: res.data
      });
      return;
    }

    if (res.status !== 200) {
      this.setState({
        serverError: res.data
      });
      return;
    }

    const user = res.data;
    this.setState({
      serverError: null
    });

    window.localStorage.jwt = user.jwt;
    appState.user = {
      username: user.username
    };

    navigate("/dashboard");
  };

  render() {
    return (
      <Layout title="Login">
        <form onSubmit={this.submit}>
          <div>
            <FormField
              title="Username"
              type="text"
              onChange={this.setFormUsername}
              value={this.state.formUsername}
            />
            <FormField
              title="Password"
              type="password"
              onChange={this.setFormPassword}
              value={this.state.formPasswordsetFormPassword}
            />
          </div>

          <button
            style={{
              marginTop: "2em"
            }}
            type="submit"
          >
            Submit
          </button>
        </form>

        {this.state.serverError && (
          <Error>{JSON.stringify(this.state.serverError)}</Error>
        )}
      </Layout>
    );
  }
}

const Error = props => (
  <div
    style={{
      marginTop: "1em",
      color: "red"
    }}
  >
    {props.children}
  </div>
);

const FormField = props => (
  <label>
    <p>{props.title}</p>
    <input type={props.type} onChange={props.onChange} value={props.value} />
  </label>
);
