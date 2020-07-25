import React from 'react';
import "./GoalForm.css";
// import app from '../../firebase';

function GoalForm(props)  {
        return (
            <React.Fragment>
                <div style = {{marginTop: "70px"}} className = "container">
                    <div className = "row">
                        <div style = {mainCon} className = "col-md-8">
                            <h1 style = {{fontFamily: 'Dosis, sans-serif', fontSize: "1.5rem", marginBottom: "15px"}}>Add to calendar</h1>
                            <div className="form-group">
                                <input
                                style = {{ border: "3px solid #4BB543", fontFamily: 'Dosis, sans-serif'}}
                                type="text"
                                className="form-control"
                                id="goalInput"
                                value={props.goal}
                                name="goal"
                                onChange={props.handleChange}
                                placeholder=". . ."
                                />
                            </div>
                            <button onClick = {props.handleSubmit} style = {{fontFamily: 'Dosis, sans-serif', padding: "3px 5px"}} type="submit" className="btn btn-primary">Add</button>
                        </div>    
                        <div style = {suggestCon} className = "col-md-3 offset-1">
                            <h3 style = {{fontFamily: 'Dosis, sans-serif', fontSize: "1.5rem"}}>Suggestions</h3>
                            <div style = {{marginTop: "20px"}} className = "allSug">
                                <button onClick = {props.handleValue} className = "sugBttns" style = {sugBtn} value = "Excercise">Exercise</button>
                                <button onClick = {props.handleValue} className = "sugBttns" style = {sugBtn} value = "Read">Read</button>
                                <button onClick = {props.handleValue} className = "sugBttns" style = {sugBtn} value = "Eat healthy">Eat healthy</button>
                                <button onClick = {props.handleValue} className = "sugBttns" style = {sugBtn} value = "Study">Study</button>
                                <button onClick = {props.handleValue} className = "sugBttns" style = {sugBtn} value = "Clean the house">Clean the house</button>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
}

const mainCon = {
    border: "1px solid black",
    borderRadius: "5px 20px",
    boxShadow: "3px 3px 10px",
    padding: "10px 20px",
    height: "fit-content",
    backgroundColor: "rgb(210, 210, 210)"
}

const suggestCon = {
    border: "1px solid black",
    borderRadius: "5px",
    boxShadow: "3px 3px 10px",
    padding: "5px 10px",
    backgroundColor: "rgb(210, 210, 210)"
}

const sugBtn = {
    float: "left",
    fontFamily: 'Dosis, sans-serif',
    backgroundColor: "rgb(210, 210, 210)",
    border: "none",
    color: "#007bff",
    display: "list-item",
    marginBottom: "20px",
    marginRight: "25px"
}

// const signOutStyle = {
//     padding: "5px",
//     backgroundColor: "#4BB543",
//     border: "none",
//     color: "rgba(255, 217, 0, 0.845)",
//     fontFamily: 'Dosis, sans-serif',
//     //float: "right"
// }

export default GoalForm;