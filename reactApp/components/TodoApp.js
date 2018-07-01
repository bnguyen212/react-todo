import React from 'react';
import InputLine from './InputLine.js';
import TodoList from './TodoList.js'

export default class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: []
    }
  }

  componentDidMount() {
    this.setState({tasks: [{task: '1', completed: false},
              {task: '2', completed: false},
              {task: '3', completed: true},
              {task: '4', completed: false},
              {task: '5', completed: false},
              {task: '6', completed: true},
              {task: '7', completed: false}]})
  }

  addTask(task) {
    console.log(task)
    var tasks = this.state.tasks.slice();
    tasks.push({task, completed: false})
    this.setState({tasks})
  }

  removeTask(index) {
    var tasks = this.state.tasks.slice();
    tasks.splice(index, 1);
    this.setState({tasks})
  }

  toggleTask(index) {
    var tasks=this.state.tasks.slice();
    tasks[index].completed = !tasks[index].completed
    this.setState({tasks})
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