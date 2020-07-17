import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LogInPage from "./pages/LogIn";
import AboutPage from "./pages/About";
import FAQPage from "./pages/FAQ";
import ContactPage from "./pages/Contact";
import HomePage from "./pages/Home";
import BadHabitPage from "./pages/BadHabit";

export class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path = "/" component = {LogInPage} />
          <Route exact path = "/About" component={AboutPage} />
          <Route exact path = "/FAQ" component={FAQPage} />
          <Route exact path = "/ContactUs" component = {ContactPage} />
          <Route exact path = "/Home" component = {HomePage} />
          <Route exact path = "/BadHabit" component = {BadHabitPage} />
        </Switch>
      </Router>
    )
  }
}

export default App;

