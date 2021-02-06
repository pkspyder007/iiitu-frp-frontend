import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FallbackLoader from "./components/FallbackLoader";
import ProtectedRoutes from "./components/ProtectedRoutes";
import AllJobs from "./pages/AllJobs";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound"
import Login from "./pages/Login";
import Register from "./pages/Register";
import ShowNav from "./components/ShowNav";
import CreateJob from "./pages/admin/CreateJob";
import JobsList from "./pages/admin/JobsList";


function App() {
  return (
    <>
      <Router>
        <ShowNav />
        <Switch>
          <Route path="/login" exact>
            {/* <FallbackLoader> */}
              <Login />
            {/* </FallbackLoader> */}
          </Route>
          <Route path="/register" exact>
            {/* <FallbackLoader> */}
              <Register />
            {/* </FallbackLoader> */}
          </Route>
          <Route path="/jobs" exact>
            <FallbackLoader>
              <AllJobs />
            </FallbackLoader>
          </Route>
          <Route path="/contact" exact>
            <FallbackLoader>
              <Contact />
            </FallbackLoader>
          </Route>
          <ProtectedRoutes role="admin" path="/admin" exact>
                <div>Home</div>
            </ProtectedRoutes>
            <ProtectedRoutes role="admin" path="/admin/addjob" exact>
                <CreateJob />
            </ProtectedRoutes>
            <ProtectedRoutes role="admin" path="/admin/jobs" exact>
                <JobsList />
            </ProtectedRoutes>
          <ProtectedRoutes role="user" path="/dashboard" exact>
            <Dashboard />
          </ProtectedRoutes>
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
