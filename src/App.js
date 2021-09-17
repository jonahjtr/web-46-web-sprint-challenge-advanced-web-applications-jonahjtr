import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";

import "./styles.scss";
import Login from "./components/Login";
import Logout from "./components/Logout";
import BubblePage from "./components/BubblePage";

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          Color Picker Sprint Challenge
          <Link to="/">Login</Link>
          <Link data-testid="logoutButton" to="/Logout">
            Logout
          </Link>
          {/* <a data-testid="logoutButton" href="#">
            logout
          </a> */}
        </header>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/login" component={Login} />
          <PrivateRoute exact path="/BubblePage" component={BubblePage} />
          <Route path="/Logout" component={Logout} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

//Task List:
//1. Add in two routes that link to the Login Component, one for the default path '/' and one for the '/login'.
//2. Render BubblePage as a PrivateRoute
//2. Build the logout button to call the logout endpoint, remove the localStorage Item and redirect to the login page.
