import React from 'react';
import InputLine from './InputLine.js';
import TodoList from './TodoList.js';
import axios from 'axios';
const dbUrl = "http://localhost:3000/db";

export default class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: []
    }
  }

  componentDidMount() {
    axios.get(dbUrl+"/all")
    .then(response => {
      this.setState({tasks: response.data})
    })
    .catch((error) => {
      console.log(error)
    })
  }

  addTask(task) {
    axios.post(dbUrl+"/add", {task})
    .then(response => {
      this.setState({tasks: this.state.tasks.concat(response.data)})
    })
    .catch((error) => {
      console.log(error)
    })
  }

  removeTask(id) {
    axios.post(dbUrl+'/remove', {id})
    .then(response => {
      if (response.data._id === id) {
        const tasks = this.state.tasks.slice();
        const index = tasks.findIndex(item => item._id === id)
        tasks.splice(index, 1);
        this.setState({tasks})
      }
    })
    .catch((error) => {
      console.log(error)
    })
  }

  toggleTask(id) {
    axios.post(dbUrl+'/toggle', {id})
    .then(response => {
      const tasks = this.state.tasks.slice();
      const index = tasks.findIndex(item => item._id === response.data._id)
      tasks.splice(index, 1, response.data);
      this.setState({tasks})
    })
    .catch((error) => {
      console.log(error)
    })
  }

  render() {
    return (
      <div>
        <InputLine addTask={(i) => this.addTask(i)}/>
        <TodoList tasks={this.state.tasks} removeTask={(i) => this.removeTask(i)} toggleTask={(i) => this.toggleTask(i)}/>
      </div>
    )
  }
}