import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FallbackLoader from "./components/FallbackLoader";

const Login = React.lazy(() => import("./pages/Login"));
const Register = React.lazy(() => import("./pages/Register"));

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <FallbackLoader>
            <Login />
          </FallbackLoader>
        </Route>
        <Route path="/register">
          <FallbackLoader>
            <Register />
          </FallbackLoader>
        </Route>
        <Route path="/">
          <div>honme</div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
