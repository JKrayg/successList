import React from 'react';
import "./About.css";
import Header from "../Header";

function About() {
    return (
        <React.Fragment>
            <Header />
            <div style = {containerStyle} className = "container">
                <div className = "row">
                    <div style = {aboutStyle} className = "col-md-8">
                        <h1 style = {{fontSize: "2rem", fontWeight: "bold", marginBottom: "10px"}}>About Us</h1><hr/>
                        <p style = {{textIndent: "50px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras 
                            dictum lectus eget egestas blandit. Donec tristique auctor ex, 
                            quis imperdiet dolor. Sed facilisis elementum vulputate. Etiam 
                            porttitor mauris ante, at porta diam tempor at. Morbi lacinia 
                            felis ex, sit amet vulputate lacus mollis et. Suspendisse potenti. 
                            Curabitur suscipit, dui vel lacinia efficitur, metus metus finibus 
                            orci, cursus congue dolor diam sed urna. Curabitur blandit arcu 
                            eget consectetur varius. Cras eget egestas odio. Praesent pretium, 
                            dui elementum convallis fringilla, velit elit tincidunt velit, ac 
                            viverra massa ex vel ante. Pellentesque habitant morbi tristique 
                            senectus et netus et malesuada fames ac turpis egestas.</p><p style = {{textIndent: "50px"}}>Proin tempor, 
                            lorem a feugiat malesuada, erat leo finibus leo, sed dictum leo nibh 
                            non libero. Etiam in laoreet justo. Vestibulum porta hendrerit mi 
                            id sollicitudin. Mauris malesuada odio a augue congue, nec interdum 
                            nisl consectetur. Ut malesuada ornare neque, in tincidunt odio lobortis 
                            eu. Praesent laoreet malesuada semper. Nam convallis neque ante, at 
                            tempor felis vestibulum sit amet. Donec pulvinar lorem sed felis 
                            hendrerit, sit amet lacinia massa varius. In hac habitasse platea 
                            dictumst. Aenean fermentum placerat tortor ac condimentum. Nullam 
                            tellus tellus, tempor et ornare vitae, viverra tincidunt quam. 
                            In vulputate in lorem sit amet congue. Suspendisse potenti. 
                            Suspendisse cursus purus in urna tincidunt finibus. Aenean faucibus 
                            turpis malesuada orci imperdiet blandit.</p> 
                    </div>
                    <div style = {storiesStyle}  className = "col-md-3 offset-1">
                        <h3 style = {{fontSize: "2rem", fontWeight: "bold", fontFamily: 'Dosis, sans-serif'}}>Success Stories</h3><br/>
                        <div>
                            <p style = {{marginTop: "5px", fontStyle: "italic"}}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore magna 
                                aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                                ullamco laboris nisi ut aliquip ex ea commodo consequat."
                            </p><br/>
                            <h4 style = {{fontWeight: "600", fontSize: "12px"}}>- George from Atlanta, Georgia</h4>
                        </div>
                        <hr/>
                        <div>
                            <p style = {{marginTop: "5px", fontStyle: "italic"}}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore magna 
                                aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                                ullamco laboris nisi ut aliquip ex ea commodo consequat."
                            </p><br/>
                            <h4 style = {{fontWeight: "600", fontSize: "12px"}}>- Bill from Buffalo, New York</h4>
                        </div>
                        <hr/>
                        <div>
                            <p style = {{marginTop: "5px", fontStyle: "italic"}}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore magna 
                                aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                                ullamco laboris nisi ut aliquip ex ea commodo consequat."
                            </p><br/>
                            <h4 style = {{fontWeight: "600", fontSize: "12px"}}>- Stacy from Houston, Texas</h4>
                        </div><br/>
                    </div>
                </div>
            </div>
            
        </React.Fragment>
        
    )
}

const containerStyle = {
    marginTop: "40px"
}

const storiesStyle = {
    border: "1px solid #4BB543",
    borderRadius: "4px 30px",
    boxShadow: "3px 3px 10px",
    innerBorderRadius: "10px",
    padding: "10px",
    backgroundColor: "whitesmoke",
    height: "fit-content"
}

const aboutStyle = {
    padding: "0px 20px 20px 20px",
    // borderRadius: "5px",
    // boxShadow: "3px 3px 10px",
    lineHeight: "2em",
    // backgroundColor: "whitesmoke",
    fontFamily: 'Dosis, sans-serif',
    fontSize: "1.1rem"
}
export default About;