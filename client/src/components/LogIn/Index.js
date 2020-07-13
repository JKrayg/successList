import React from 'react';
import "./Login.css";
import Header from "../Header/Index";
import Helmet from 'react-helmet';
import { useHistory } from "react-router-dom";


function SignInNav() {
    const history = useHistory();
    function logInOnClick(e) {
        e.preventDefault()
        history.push("/Home");
        //this.attr("href", "client/src/components/Home/Index.js");
    }
    return (
        <React.Fragment>
            <Header />
            <Helmet bodyAttributes={{style: 'background-color : rgb(210, 210, 210)'}}/>
            <div style = {containerStyle} className = "container">
                <div  className = "row">
                <div style = {signUpStyle} className = "col-md-6 offset-3">
                    <h1 style = {{fontSize: "2rem", marginBottom: "20px"}}>Sign Up</h1>
                    <form>
                        <div class="form-group">
                            <label for="email">Email</label>
                            <input type="email" class="form-control" id="email"/>
                        </div>
                        <div class="form-group">
                            <label for="username">Create a username</label>
                            <input type="name" class="form-control" id="username"/>
                        </div>
                        <div class="form-group">
                            <label for="password">Password</label>
                            <input type="password" class="form-control" id="password"/>
                        </div>
                        <div class="form-group">
                            <label for="passwordConf">Confirm password</label>
                            <input type="password" class="form-control" id="passwordConf"/>
                        </div>
                        <div class="form-group form-check">
                            <input type="checkbox" class="form-check-input" id="savePassword"/>
                            <label class="form-check-label" for="savePassword">Remember me</label>
                        </div>
                        <button style = {{backgroundColor: "#4BB543", border: "none"}} type="submit" class="btn btn-primary">Sign Up</button><br/>
                        <div style = {allIcons} className = "icons">
                            <p style = {{marginBottom: "10px"}}>Follow Us</p>
                            <a href = "https://twitter.com/explore" target = "_blank" rel="noopener noreferrer"><img style = {iconStyle} alt = "twitter" href = "https://twitter.com/explore" src = "https://static.techspot.com/images2/downloads/topdownload/2014/05/twitter.jpg" /></a>
                            <a href = "https://www.facebook.com/" target = "_blank" rel="noopener noreferrer"><img style = {iconStyle} alt = "facebook" src = "https://cdn.techinasia.com/wp-content/uploads/2009/07/button-facebook.png" /></a>
                            <a href = "https://www.instagram.com/" target = "_blank" rel="noopener noreferrer"><img style = {iconStyle} alt = "instagram" src = "https://i2.wp.com/imermanangels.org/wp-content/uploads/2014/03/instagram-1.png?ssl=1" /></a>
                        </div>
                    </form>
                </div>
                <div  className = "col-md-2 offset-1">
                    <h1 style = {{ fontFamily: 'Dosis, sans-serif',  fontSize: "1.1rem", marginBottom: "10px"}}>Already a member?</h1>
                    <form style = {loginStyle}>
                        <h1 style = {{fontSize: "1.5rem", marginBottom: "10px"}}>Login</h1>
                        <div class="form-group">
                            <label for="username">Username</label>
                            <input style = {{height: "25px"}} type="name" class="form-control" id="username"/>
                        </div>
                        <div class="form-group">
                            <label for="password">Password</label>
                            <input style = {{height: "25px"}} type="password" class="form-control" id="password"/>
                        </div>
                        <div class="form-group form-check">
                            <input type="checkbox" class="form-check-input" id="savePassword"/>
                            <label class="form-check-label" for="savePassword">Remember me</label>
                        </div>
                        <button onClick = {logInOnClick} style = {{ backgroundColor: "#4BB543", border : "none" }} type="submit" class="btn btn-primary">Log In</button>
                    </form>
                </div>
                </div>
            </div>
        </React.Fragment>
    )
}

const loginStyle = {
    lineHeight: "1.5rem",
    fontFamily: 'Dosis, sans-serif',
    boxShadow: "3px 3px 10px",
    borderRadius: "3px 20px",
    padding: "15px",
    backgroundColor: "whitesmoke",
    height: "fit-content"
}

const signUpStyle = {
    lineHeight: "2rem",
    fontFamily: 'Dosis, sans-serif',
    boxShadow: "3px 3px 10px",
    fontSize: "1.2rem",
    borderRadius: "4px 30px",
    padding: "35px",
    backgroundColor: "whitesmoke"
}

const containerStyle = {
    marginTop: "40px"
}

const iconStyle = {
    height: "35px",
    width: "35px",
    marginRight: "25px"
}

const allIcons = {
    marginTop: "20px"
}
export default SignInNav;