import React, { useCallback } from 'react';
import "./Login.css";
//import { useHistory } from "react-router-dom";
import { withRouter } from "react-router";
import app from "../../firebase";

const SignUp = ({ history }) => {
    const handleSignUp = useCallback(async event => {
        event.preventDefault();
        const { email, password } = event.target.elements;
        try {
            await app
            .auth()
            .createUserWithEmailAndPassword(email.value, password.value);
        history.push("/Home");
        } catch (error) {
            alert(error);
        }
    }, [history]);

    return (
        <React.Fragment>
                    <div style = {signUpStyle} className = "col-md-6 offset-3">
                        <h1 style = {{fontSize: "2rem", marginBottom: "20px"}}>Sign Up</h1>
                        <form onSubmit = {handleSignUp}>
                            <div className ="form-group">
                                <label htmlFor="emailInput">Email</label>
                                <input name = "email" type="email" className ="form-control" id="emailInput" placeholder = "email"/>
                            </div>
                            <div className ="form-group">
                                <label htmlFor="passwordInput">Password</label>
                                <input name = "password" type="password" className ="form-control" id="passwordInput" placeholder = "password"/>
                            </div>
                            <div className="form-group form-check">
                                <input type="checkbox" className="form-check-input" id="savePasswordInput"/>
                                <label className="form-check-label" htmlFor="savePasswordInput">Remember me</label>
                            </div>
                            <button style = {{backgroundColor: "#4BB543", border: "none"}} type="submit" className="btn btn-primary">Sign Up</button><br/>
                            <div style = {allIcons} className = "icons">
                                <p style = {{marginBottom: "10px"}}>Follow Us</p>
                                <a href = "https://twitter.com/explore" target = "_blank" rel="noopener noreferrer"><img style = {iconStyle} alt = "twitter" href = "https://twitter.com/explore" src = "https://static.techspot.com/images2/downloads/topdownload/2014/05/twitter.jpg" /></a>
                                <a href = "https://www.facebook.com/" target = "_blank" rel="noopener noreferrer"><img style = {iconStyle} alt = "facebook" src = "https://cdn.techinasia.com/wp-content/uploads/2009/07/button-facebook.png" /></a>
                                <a href = "https://www.instagram.com/" target = "_blank" rel="noopener noreferrer"><img style = {iconStyle} alt = "instagram" src = "https://i2.wp.com/imermanangels.org/wp-content/uploads/2014/03/instagram-1.png?ssl=1" /></a>
                            </div>
                        </form>
                    </div>
        </React.Fragment>
    )

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

const iconStyle = {
    height: "35px",
    width: "35px",
    marginRight: "25px"
}

const allIcons = {
    marginTop: "20px"
}
export default withRouter(SignUp);