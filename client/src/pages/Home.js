import React, { Component } from 'react'
import Home from "../components/Home/Index"
import GoalForm from "../components/GoalForm/Index"
import API from "../util/API"

export class HomePage extends Component {
        state = {
            goalsList: [],
            goal: "",
            clock: ""
        }
    
        componentDidMount = () => {
            this.loadGoals();
        }
        
        loadGoals = () => {
            API.getGoals()
                .then(res => 
                    this.setState({ goalsList: res, goal: "" })
                )
                
                    
                //console.log(this.state.goalsList)
              
        };

        handleValue = event => {
            const value  = event.target.value;
            API.saveGoal({
                description: value
            })
            .then(res => this.loadGoals())
            .catch(err => console.log(err))
        };
    
        handleChange = event => {
            const { name, value } = event.target;
        
            this.setState({
              [name]: value
              
            });
            console.log(this.state.goal)
        };
    
        handleSubmit = event => {
            event.preventDefault();
                API.saveGoal({
                    description: this.state.goal
                })
                .then(res => this.loadGoals())
                .catch(err => console.log(err));
                console.log(this.state.goal)
          };

        handleDelete = goal => {
            API.deleteGoal(goal._id)
                .then(deleteGoal => this.setState({ goalsList: this.state.goalsList.filter(goal => goal._id !== deleteGoal._id)}))
                .catch(err => console.log(err));
        };
        



    render() {
        // var currentTime = moment().format("hh:mm a");
        // this.setState({
        //     clock: currentTime
        // })
        //setInterval(currentTime, 1000);
        return (
            <div>
                <Home goal = {this.state.goalsList } clock = {this.state.currentTime} handleDelete = {this.handleDelete}/>
                <GoalForm handleValue = {this.handleValue} handleChange = {this.handleChange} handleSubmit = {this.handleSubmit} goal = {this.state.goal} />
            </div>
        )
    }
}

export default HomePage;
