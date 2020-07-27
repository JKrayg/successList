import React, { Component } from 'react'
import SignUp from "../components/SignUp"
import LoginForm from "../components/LoginForm"
import Header from "../components/Header";
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
                        <LoginForm />
                    </div>
                </div>
            </div>
        )
    }
}

const containerStyle = {
    marginTop: "40px",
    maxWidth: "960px"
}

export default LogInSignUp;