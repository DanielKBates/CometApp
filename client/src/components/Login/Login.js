import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import Auth from '../../utils/auth';
import "./Login.css"

class Login extends Component {
  state = {
    userName: "",
    password: ""
  }

  handleInputChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  }

  handleSubmit = event => {
    event.preventDefault();

    const data = {
      userName: this.state.userName,
      password: this.state.password
    };

    fetch('/login', {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(data), // data can be `string` or {object}!
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(response => {
        // Server returns "JWT ...", so we need to split off the token
        const token = response.token.split(' ')[1];
        Auth.login(token);
      })
      .catch(error => console.error('Error:', error));
  }

  render() {
    if (this.props.token) {
      return <Redirect to='/dashboard' />
    }

    return (
      <div className=" loginContainer container">
        <div className="row">
          <div className="col s3 m3 l3"></div>
          <div className="col s6 m6 l6">
            <h1 className="center-align loginHeader">Login</h1>
            <form onSubmit={this.handleSubmit}>
              <input className="usernameInput" type="text" name="userName" placeholder="UserName" onChange={this.handleInputChange} />
              <input className="passwordInput" type="password" name="password" placeholder="Password" onChange={this.handleInputChange} />
              <button className="loginButton">Login</button>
            </form>
          </div>
          <div className="col s3 m3 l3"></div>
        </div>
      </div>
    );
  }
}

export default Login;
