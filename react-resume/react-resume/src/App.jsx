import React from 'react';
import MyNavbar from './shared/components/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import AboutMe from './about-me/pages/AboutMe';
import Portfolio from './portfolio/pages/Portfolio';

function App() {
  return (
    <div>
      <MyNavbar />
    <Router>
      <Switch>
    <Route path="/" exact>
      <AboutMe />
    </Route>
    <Route path="/portfolio" exact>
      <Portfolio />
    </Route>
    <Redirect to="/" />
    </Switch>
    </Router>
  </div>
  );
}

export default App;
