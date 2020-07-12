import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LogIn from "./pages/LogIn";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";

export class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path = "/" component = {LogIn} />
          <Route exact path = "/About" component={About} />
          <Route exact path = "/FAQ" component={FAQ} />
          <Route exact path = "/ContactUs" component = {Contact} />
        </Switch>
      </Router>
    )
  }
}

export default App;

