import React, { Component } from 'react';
import Home from "../components/Home";
import GoalForm from "../components/GoalForm";
import HomeHeader from "../components/HomeHeader";
import API from "../util/API";
//import moment from "moment";
//import { update } from '../../../models/checkList'

export class HomePage extends Component {
        state = {
            goalsList: [],
            goal: "",
            clock: "",
            checked: false
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

        

    // useEffect(() => {
    //     const [seconds, setSeconds] = useState(0);
    //     const now = moment();
    //     const time = now.format("hh:mm");
    //     const interval = setInterval(() => {
    //     setSeconds(seconds => seconds + 1);
    //     }, 1000);
    //     return () => clearInterval(interval);
    // }, [time]);


  
        
        // const now = moment();
        // let time = now.format("hh:mm")    
                
        
  

        // handleCheck = event => {
        //     const ID = event.target.id
            
        //     this.setState({
        //         checked: !this.state.checked
        //     })
        //     console.log(this.state.checked)
        //     API.updateGoal(ID, {
        //         checked: this.state.checked
        //     })
        //     .then(res => console.log(res))
        //     .catch(err => console.log(err))
        
            
            // API.updateGoal(ID{

            // }) 

            
            // .then(res => )
            // .catch(err => console.log(err))
            //     _id: id
            // },
            // {
            //     checked: !this.checked
            
            // .then(res => this.loadGoals())
            // .catch(err => console.log(err));
            // .then(res => {
            //     if (res._id === value) {
            //         res.checked = !res.checked
            //     }
            // })
            // console.log(value, isChecked);
        //}

        // handleCheck = (event) => {
        //     // this.setState({ goalsList: this.state.goalsList.filter(goalz => {
        //     //   if(goalz._id === event.target.value) {
        //     //       console.log(goalz._id)
        //     API.updateGoal({
        //         checked: !event.target.value
        //     })
        //     .then(res => this.loadGoals())
        //     .catch(err => console.log(err));
        // }
              
            // }) });
    // }

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
                <div style = {{maxWidth: "960px"}} className = "container">
                    <HomeHeader clock = {this.state.currentTime}/>
                    <GoalForm handleValue = {this.handleValue} handleChange = {this.handleChange} handleSubmit = {this.handleSubmit} goal = {this.state.goal} />
                    <Home goal = {this.state.goalsList } handleDelete = {this.handleDelete} handleCheck = {this.handleCheck} clock = {this.state.clock}/>
                </div>
                
                
            </div>
        )
    }
}

export default HomePage;
