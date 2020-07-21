import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import app from "../../firebase";
import { AuthContext } from "../../Auth";

const Login = ({ history }) => {
    const handleLogin = useCallback(
        async event => {
            event.preventDefault();
            const { email, password } = event.target.elements;
            try {
                await app
                .auth()
                .signInWithEmailAndPassword(email.value, password.value);
                history.push("/Home");
            } catch (error) {
                alert(error)
            }
        }, [history])

        const { currentUser } = useContext(AuthContext);

        if (currentUser) {
            return <Redirect to = "/Home" />
        }
    


        return (
            <div  className = "col-md-2 offset-1">
                    <h1 style = {{ fontFamily: 'Dosis, sans-serif',  fontSize: "1.1rem", marginBottom: "10px"}}>Already a member?</h1>
                    <form onSubmit = {handleLogin} style = {loginStyle}>
                        <h1 style = {{fontSize: "1.5rem", marginBottom: "10px"}}>Login</h1>
                        <div className="form-group">
                            <label htmlFor="emailLogin">Email</label>
                            <input name = "email" style = {{height: "25px"}} type="email" className="form-control" id="emailLogin"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="passwordLogin">Password</label>
                            <input name = "password" style = {{height: "25px"}} type="password" className="form-control" id="passwordLogin"/>
                        </div>
                        <div className="form-group form-check">
                            <input type="checkbox" className="form-check-input" id="savePassword"/>
                            <label className="form-check-label" htmlFor="savePassword">Remember me</label>
                        </div>
                        <button style = {{ backgroundColor: "#4BB543", border : "none" }} type="submit" className="btn btn-primary logInBtn">Log In</button>
                    </form>
                </div>
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

export default withRouter(Login);