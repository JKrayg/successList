import React, { Component } from 'react'
import SignUp from "../components/SignUp/Index"
import Login from "../components/Login/Index"
import Header from "../components/Header/Index";
import Helmet from 'react-helmet';

export class LogInSignUp extends Component {
    render() {
        return (
            <div>
                <Header />
                <Helmet bodyAttributes={{style: 'background-color : rgb(210, 210, 210)'}}/>
                <div style = {containerStyle} className = "container">
                    <div className = "row">
                        <SignUp />
                        <Login />
                    </div>
                </div>
            </div>
        )
    }
}

const containerStyle = {
    marginTop: "40px"
}

export default LogInSignUp;