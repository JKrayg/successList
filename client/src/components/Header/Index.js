import React from 'react'
import AboutNav from '../NavLinks/AboutNav';
import LoginNav from '../NavLinks/LoginNav';
import ContactUsNav from '../NavLinks/ContactUsNav';
import FAQNav from "../NavLinks/FAQNav";

function Header() {
    const windowPath = window.location.pathname;
    let linkPath;

    if (windowPath === "/FAQ") {
        linkPath = <FAQNav />
    } else if (windowPath === "/About") {
        linkPath = <AboutNav />
    } else if (windowPath === "/ContactUs") {
        linkPath = <ContactUsNav />
    } else {
        linkPath = <LoginNav />
    }

    return (
        <React.Fragment>
            <div style = {headerStyle} className = "row">
                <div className = "col-md-8">
                    <h1 style = {{fontSize: "5rem", fontFamily: 'Dosis, sans-serif', float: "left", color: "white"}}>SuccessList☑</h1>
                    <img style = {{height: "75px", width: "75px", float: "left", marginLeft: "10px"}} src = "https://www.auburn.edu/administration/human_resources/hr_art/images/icons/010-calendar.png" alt = "calendar-img" />
                </div>
                <div className = "col-md-3 offset-1">
                    <div>{linkPath}</div>
                </div>
            </div>
            
        </React.Fragment>
        
    )
}

const headerStyle = {
    //borderBottom: ".2px solid black",
    boxShadow: "2px 2px 10px",
    padding: "10px",
    backgroundColor: "#4BB543"
}
export default Header;