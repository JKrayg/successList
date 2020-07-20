import React from 'react';
import "./GoalForm.css"

function GoalForm(props)  {
        return (
            <React.Fragment>
                <div className = "container">
                    <div className = "row">
                        <div style = {mainCon} className = "col-md-8">
                            <h1 style = {{fontFamily: 'Dosis, sans-serif', fontSize: "3rem", marginBottom: "15px"}}>Goal</h1>
                            <div className="form-group">
                                <textarea
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
                            <button onClick = {props.handleSubmit} style = {{fontFamily: 'Dosis, sans-serif'}} type="submit" className="btn btn-primary">Create</button>
                        </div>    
                        <div style = {suggestCon} className = "col-md-3 offset-1">
                            <h3 style = {{fontFamily: 'Dosis, sans-serif', fontSize: "1.5rem"}}>Suggestions</h3>
                            <div style = {{marginTop: "20px"}} className = "allSug">
                                <button onClick = {props.handleValue} className = "sugBttns" style = {sugBtn} value = "Excercise">Exercise</button>
                                <button onClick = {props.handleValue} className = "sugBttns" style = {sugBtn} value = "Read">Read</button>
                                <button onClick = {props.handleValue} className = "sugBttns" style = {sugBtn} value = "Eat healthy">Eat healthy</button>
                                <button onClick = {props.handleValue} className = "sugBttns" style = {sugBtn} value = "Study">Study</button>
                                <button onClick = {props.handleValue} className = "sugBttns" style = {sugBtn} value = "Clean house">Clean house</button>
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
    marginTop: "30px",
    padding: "20px 60px",
    backgroundColor: "rgb(210, 210, 210)"
}

const suggestCon = {
    border: "1px solid black",
    borderRadius: "5px",
    boxShadow: "3px 3px 10px",
    marginTop: "30px",
    padding: "5px 10px",
    backgroundColor: "rgb(210, 210, 210)"
}

const sugBtn = {
    fontFamily: 'Dosis, sans-serif',
    backgroundColor: "rgb(210, 210, 210)",
    border: "none",
    color: "#007bff",
    display: "list-item",
    marginBottom: "25px"
}

export default GoalForm;