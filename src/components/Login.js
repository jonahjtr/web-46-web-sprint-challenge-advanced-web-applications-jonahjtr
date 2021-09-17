import React from "react";
import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router";
const initialValues = {
  username: "",
  password: "",
};

const Login = () => {
  const [state, setState] = useState(initialValues);
  const [error, setError] = useState("");
  const { push } = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/login", state)
      .then((resp) => {
        localStorage.setItem("token", resp.data.payload);
        push("/BubblePage");
      })
      .catch((err) => {
        setError("username or password is incorrect.");
      });
  };
  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
    console.log(state);
  };
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  return (
    <div>
      <h1>Welcome to the Bubble App!</h1>
      <div data-testid="loginForm" className="login-form">
        <h2>Build login form here</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <label>
          username:
          <input
            id="username"
            onChange={handleChange}
            type="text"
            name="username"
            value={state.username}
          />
        </label>
        <label>
          password:
          <input
            id="password"
            onChange={handleChange}
            type="text"
            name="password"
            value={state.password}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <p id="error" className="error">
        {error}
      </p>
    </div>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state necessary for form functioning.
//4. If either the username or password is not entered, display the following words with the p tag provided: Username or Password not valid.
//5. If the username / password is equal to "Lambda" / "School", save that token to localStorage and redirect to a BubblePage route.
//6. MAKE SURE YOUR USERNAME AND PASSWORD INPUTS INCLUDE id="username" and id="password"
//7. MAKE SURE YOUR SUBMIT BUTTON INCLUDES id="submit"
//8. MAKE SURE YOUR ERROR p tag contains the id="error"
