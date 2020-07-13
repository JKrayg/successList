import React from 'react'
import { Link } from 'react-router-dom'

function LoginNav() {
    return (
        <div>
            <Link style = {linkStyle} to = "/FAQ" className={window.location.pathname === "/FAQ" ? "nav-link active" : "nav-link"}>FAQ</Link>
            <Link style = {linkStyle} to = "/ContactUs" className={window.location.pathname === "/ContactUs" ? "nav-link active" : "nav-link"}>Contact Us</Link>
            <Link style = {linkStyle} to = "/About" className={window.location.pathname === "/About" ? "nav-link active" : "nav-link"}>About</Link>
        </div>
    )
}

const linkStyle = {
    float: "right",
    fontFamily: 'Dosis, sans-serif',
    color: "rgba(255, 217, 0, 0.845)"
}

export default LoginNav;