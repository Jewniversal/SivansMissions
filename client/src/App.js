import React, { Component } from 'react';
import Todos from './Todos/Todos'
import AddTodo from './AddTodo/AddTodo'
import axios from 'axios'

class App extends Component{
  state = {
    todos: [],
  }
  deleteTodo = (todo) => {
    console.log(todo._id)
    this.deleteItem(todo._id)
    this.getItems();
    }
  addTodo = (todo) => {
    todo.id = Math.random()
    let todos = [...this.state.todos, todo]
    this.setState({todos})
  }
  getItems = ()  => {
    axios.get('/api/items').then(res=>{
      this.setState({todos: res.data})
    })
  }
  deleteItem = id => {
    console.log(id)
    axios.delete(`/api/items/${id}`).then(res => {
      console.log(res)
    })
  }
  render() {
    this.getItems();
    return (
      <div className="todo=app container">
        <h1 className="center blue-text">Allmighty Chunts Missions </h1>
        <AddTodo AddTodo={this.addTodo} />
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
      </div>
    )
  }
}

export default App;
