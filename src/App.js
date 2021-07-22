
import './App.css';
import React, { Component } from "react";
import tasks from './sample/tasks.json';
import {BrowserRouter, Route, Link } from 'react-router-dom';
//components
import Tasks from './components/tasks';
import TaskForm from './components/taskForm';
import Posts from './components/posts'


class App extends Component{

state= {
  tasks: tasks
}

addTask = (tittle,description) =>{
  const newTask ={
    tittle:tittle,
    description: description,
    id: this.state.tasks.length

  }
  this.setState({
    tasks:[...this.state.tasks, newTask]
  })
}

deleteTask = (id) => {
  const newTasks =this.state.tasks.filter(tasks => tasks.id !== id);
  this.setState({
    tasks: newTasks
  })

}

checkDone = (id) => {
 const newTasks = this.state.tasks.map(task =>{
    if (task.id === id){
      task.done = !task.done
    }
    return task
  })
  this.setState({
    tasks: newTasks
  })

}


   
  render () {
    return <div>
      <BrowserRouter> 
      <Link to="/">Home</Link>
      <br></br>
      
      <Link to="/posts">posts</Link>

                <Route exact path="/" render={()=>{
                   return <div>
                    <TaskForm addTask={this.addTask}/>
                    <Tasks tasks={this.state.tasks} deleteTask={this.deleteTask} checkDone={this.checkDone}/>
                   </div>
                   }}>
        
               </Route>
               <Route path="/posts" component={Posts}/>

               
      </BrowserRouter>
     
     
      
    </div>
  }
}

  



export default App;
