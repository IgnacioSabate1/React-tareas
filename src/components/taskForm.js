import React, { Component } from "react";

export default class TaskForm extends Component{

    state ={
        tittle:'',
        description:''
    }

   onSubmit = (e) =>{
    this.props.addTask(this.state.tittle,this.state.description)
       
       e.preventDefault();

   }

   onChange=(e)=>{
       this.setState({
          [e.target.name] : e.target.value,
          [e.target.description] : e.target.value

       })

   }

    render(){
        
        return (
        <form onSubmit={this.onSubmit}>
            <input name="tittle" type ="text" placeholder="write a task" onChange={this.onChange} value={this.state.tittle}></input>
            <br></br>
            <br></br>
            <textarea name="description" placeholder="write a description"onChange={this.onChange}value={this.state.description}></textarea>
            <button type="submit">Save Task</button>
        </form>
        ) 
    }

}