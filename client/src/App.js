import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignInNav from "./components/SignInNav"

export class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path = "/" component = {SignInNav} />
        </Switch>
      </Router>
    )
  }
}

export default App;

