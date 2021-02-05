import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FallbackLoader from "./components/FallbackLoader";
import Navbar from "./components/Navbar";
import AllJobs from "./pages/AllJobs";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

const Login = React.lazy(() => import("./pages/Login"));
const Register = React.lazy(() => import("./pages/Register"));

function App() {
  return (
    <>
    <Router>
    <Navbar />
      <Switch>
        <Route path="/login" exact>
          <FallbackLoader>
            <Login />
          </FallbackLoader>
        </Route>
        <Route path="/register" exact>
          <FallbackLoader>
            <Register />
          </FallbackLoader>
        </Route>
        <Route path="/alljobs" exact>
          <FallbackLoader>
            <AllJobs />
          </FallbackLoader>
        </Route>
        <Route path="/contact" exact>
          <FallbackLoader>
            <Contact />
          </FallbackLoader>
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
    </>
  );
}

export default App;
