import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "./pages/LandingPage/index";
import HomePage from "./pages/Homepage";
import BlogPage from "./pages/BlogPage";
import SignInPage from "./pages/SignInPage";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/home" component={HomePage} />
        <Route exact path="/blog" component={BlogPage} />
        <Route exact path="/signin" component={SignInPage} />

        {/* <Route exact path="/progress" component={ProgressPage} /> */}
      </Switch>
    </Router>
  );
}

export default App;
