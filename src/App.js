import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./Components/about";
import Certification from "./Components/certification";
import Home from "./Components/Home";
import Skills from "./Components/skill";
import "./styles.css";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/certification">
          <Certification />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/skills">
          <Skills />
        </Route>
        <Route path="/">
          <div className="App">
            <Home />
            <Certification />
            <About />
            <Skills />
          </div>
        </Route>
      </Switch>
    </Router>
  );
}
