import React from 'react'
import { Link } from 'react-router-dom'

function ContactUsNav() {
    return (
        <div>
            <Link style = {linkStyle} to = "/About" className={window.location.pathname === "/About" ? "nav-link active" : "nav-link"}>About</Link>
            <Link style = {linkStyle} to = "/FAQ" className={window.location.pathname === "/FAQ" ? "nav-link active" : "nav-link"}>FAQ</Link>
            <Link style = {linkStyle} to = "/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>Home</Link>
        </div>
    )
}

const linkStyle = {
    float: "right",
    fontFamily: 'Dosis, sans-serif',
    color: "rgba(255, 217, 0, 0.845)"
}
export default ContactUsNav;