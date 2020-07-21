import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {AuthProvider} from "./Auth";
import AboutPage from "./pages/About";
import FAQPage from "./pages/FAQ";
import ContactPage from "./pages/Contact";
import HomePage from "./pages/Home";
import LoginSignUp from "./pages/LoginSignUp";
import PrivateRoute from './PrivateRoute';

export class App extends Component {
  render() {
    return (
    <AuthProvider>
      <Router>
        <Switch>
          <PrivateRoute exact path = "/Home" component = {HomePage} />
          <Route exact path = "/" component = {LoginSignUp}/>
          <Route exact path = "/About" component={AboutPage} />
          <Route exact path = "/FAQ" component={FAQPage} />
          <Route exact path = "/ContactUs" component = {ContactPage} />
        </Switch>
      </Router>
    </AuthProvider>
      
    )
  }
}

export default App;

