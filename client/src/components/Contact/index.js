import React from 'react';
import Header from "../Header"

function Contact() {
    return (
        <div>
            <React.Fragment>
                <Header />
                <div style = {containerStyle} className = "container">
                    <div className = "row">
                        <div style = {contactStyle} className = "col-md-8 offset-2">
                            <h1 style = {{fontSize: "2rem", fontWeight: "bold", marginBottom: "10px"}}>Contact Us</h1><hr/> 
                            <div style = {lists}>
                                <p style = {listStyle}>Customer Service</p>
                                <a href = "#">customerservice@successlist.com</a>
                                <p>#: 1-800-SER-VICE</p>
                            </div>
                            <div style = {lists}>
                                <p style = {listStyle}>Careers</p>
                                <a href = "#">careers@successlist.com</a><br/>
                                <a href = "#">Application</a>
                            </div>
                            <div style = {lists}>
                                <p style = {listStyle}>Success Counseling</p>
                                <a href = "#">success@successlist.com</a>
                                <p>#: 1-800-SUC-CESS</p>
                            </div>
                            <div style = {allIcons} className = "icons">
                                <p style = {{marginBottom: "10px", textDecoration: "underline", fontSize: "1.3rem"}}>Follow Us</p>
                                <a href = "https://twitter.com/explore" target = "_blank" rel="noopener noreferrer"><img style = {iconStyle} alt = "twitter" href = "https://twitter.com/explore" src = "https://static.techspot.com/images2/downloads/topdownload/2014/05/twitter.jpg" /></a>
                                <a href = "https://www.facebook.com/" target = "_blank" rel="noopener noreferrer"><img style = {iconStyle} alt = "facebook" src = "https://cdn.techinasia.com/wp-content/uploads/2009/07/button-facebook.png" /></a>
                                <a href = "https://www.instagram.com/" target = "_blank" rel="noopener noreferrer"><img style = {iconStyle} alt = "instagram" src = "https://i2.wp.com/imermanangels.org/wp-content/uploads/2014/03/instagram-1.png?ssl=1" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        </div>
    )
}

const containerStyle = {
    marginTop: "40px",
    maxWidth: "960px"
}

const contactStyle = {
    padding: "20px",
    borderRadius: "4px 30px",
    border: "1px solid #4BB543",
    boxShadow: "3px 3px 10px",
    lineHeight: "2em",
    backgroundColor: "whitesmoke",
    fontFamily: 'Dosis, sans-serif',
    fontSize: "1.1rem"
}

const listStyle = {
    fontSize: "1.3rem",
    textDecoration: "underline"
}

const lists = {
    marginBottom: "25px"
}

const iconStyle = {
    height: "60px",
    width: "60px",
    marginRight: "25px"
}

const allIcons = {
    marginTop: "20px"
}
export default Contact;