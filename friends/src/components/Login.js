import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  state = {
    credentials: {
      username: '',
      password: ''
    }
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  login = e => {
    e.preventDefault();
    axios.post("http://localhost:5000/api/login", this.state.credentials)
      .then(res => {
        console.log("AXIOS - PUT RESPONSE: ", res)
        localStorage.setItem("token", res.data.payload);
        console.log("Logged in!");
        this.props.history.push("/friends");
      })
      .catch(err => console.log("Couldn't Login", err))
  };

  render() {
    return (
      <div>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
          <p className='websitename'>FIND-A-FRIEND</p>
        </div>
        <form onSubmit={this.login}>
          <input
            type="text"
            name="username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
          />
          <input
            type="password"
            name="password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
          />
          <button>Log in</button>
        </form>
      </div>
    );
  }
}

export default Login;