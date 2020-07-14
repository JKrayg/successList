import React from 'react'
import Header from "../Header/Index"

function FAQ() {
    return (
        <React.Fragment>
            <Header />
            <div style = {containerStyle} className = "container">
                    <div className = "row">
                        <div style = {faqStyle} className = "col-md-8 offset-2">
                            <h1 style = {{fontSize: "2rem", fontWeight: "bold", marginBottom: "10px"}}>FAQ</h1><hr/>
                            <div style = {questions} className = "questions">
                                <h3 style = {{fontWeight: "bold", fontSize: "1.3rem", fontStyle: "italic"}}>How do I get started with my SuccessList calendar?</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                    sed do eiusmod tempor incididunt ut labore et dolore magna 
                                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                                    ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                            <div style = {questions} className = "questions">
                                <h3 style = {{fontWeight: "bold", fontSize: "1.3rem", fontStyle: "italic"}}>Is SuccessList free?</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                    sed do eiusmod tempor incididunt ut labore et dolore magna 
                                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                                    ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                            <div style = {questions} className = "questions">
                                <h3 style = {{fontWeight: "bold", fontSize: "1.3rem", fontStyle: "italic"}}>Is there a mobile version of SuccessList?</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                    sed do eiusmod tempor incididunt ut labore et dolore magna 
                                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                                    ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                        </div>
                    </div>
                </div>
        </React.Fragment>
        
    )
}

const containerStyle = {
    marginTop: "40px"
}

const faqStyle = {
    padding: "20px",
    borderRadius: "4px 30px",
    border: "1px solid #4BB543",
    boxShadow: "3px 3px 10px",
    lineHeight: "2em",
    backgroundColor: "whitesmoke",
    fontFamily: 'Dosis, sans-serif',
    fontSize: "1.1rem"
}

const questions = {
    marginBottom: "35px"
}
export default FAQ;