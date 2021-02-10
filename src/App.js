import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FallbackLoader from "./components/FallbackLoader";
import ProtectedRoutes from "./components/ProtectedRoutes";
import AllJobs from "./pages/AllJobs";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ShowNav from "./components/ShowNav";
import CreateJob from "./pages/admin/CreateJob";
import JobsList from "./pages/admin/JobsList";
import Education from "./pages/Dashboard/Education";
import PersonalInfo from "./pages/Dashboard/PersonalInfo";
import AcadExp from "./pages/Dashboard/AcadExp";
import SponsoredProject from "./pages/Dashboard/SponsoredProject";
import ThesisSupervised from "./pages/Dashboard/ThesisSupervised";
import ResearchPublication from "./pages/Dashboard/ResearchPublication";
import BestPapers from "./pages/Dashboard/Bestpapers";
import SOP from "./pages/Dashboard/SOP";
import Patents from "./pages/Dashboard/Patents";
import OtherInfo from "./pages/Dashboard/OtherInfo";
import General from "./pages/Dashboard/General";
import Referees from "./pages/Dashboard/Referees";
import IndustryExp from "./pages/Dashboard/IndustryExp";
import FuturePlans from "./pages/Dashboard/FuturePlans";

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
          <ProtectedRoutes
            role="user"
            path="/dashboard/application/personal/:appId"
            exact={true}
          >
            <PersonalInfo />
          </ProtectedRoutes>
          <ProtectedRoutes
            role="user"
            path="/dashboard/application/education/:appId"
            exact={true}
          >
            <Education />
          </ProtectedRoutes>
          <ProtectedRoutes
            role="user"
            path="/dashboard/application/acadexp/:appId"
            exact={true}
          >
            <AcadExp />
          </ProtectedRoutes>
          <ProtectedRoutes
            role="user"
            exact={true}
            path="/dashboard/application/sp/:appId"
          >
            <SponsoredProject />
          </ProtectedRoutes>
          <ProtectedRoutes
            role="user"
            exact={true}
            path="/dashboard/application/thesis/:appId"
          >
            <ThesisSupervised />
          </ProtectedRoutes>
          <ProtectedRoutes
            role="user"
            exact={true}
            path="/dashboard/application/indexp/:appId"
          >
            <IndustryExp />
          </ProtectedRoutes>
          <ProtectedRoutes
            role="user"
            exact={true}
            path="/dashboard/application/research/:appId"
          >
            <ResearchPublication />
          </ProtectedRoutes>
          <ProtectedRoutes
            role="user"
            exact={true}
            path="/dashboard/application/bestpapers/:appId"
          >
            <BestPapers />
          </ProtectedRoutes>
          <ProtectedRoutes
            role="user"
            exact={true}
            path="/dashboard/application/sop/:appId"
          >
            <SOP />
          </ProtectedRoutes>
          <ProtectedRoutes
            role="user"
            exact={true}
            path="/dashboard/application/patents/:appId"
          >
            <Patents />
          </ProtectedRoutes>
          <ProtectedRoutes
            role="user"
            exact={true}
            path="/dashboard/application/otherinfo/:appId"
          >
            <OtherInfo />
          </ProtectedRoutes>
          <ProtectedRoutes
            role="user"
            exact={true}
            path="/dashboard/application/futureplans/:appId"
          >
            <FuturePlans />
          </ProtectedRoutes>
          <ProtectedRoutes
            role="user"
            exact={true}
            path="/dashboard/application/generalques/:appId"
          >
            <General />
          </ProtectedRoutes>
          <ProtectedRoutes
            role="user"
            exact={true}
            path="/dashboard/application/referees/:appId"
          >
            <Referees />
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
