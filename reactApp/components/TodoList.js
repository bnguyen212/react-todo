import React from 'react';
import Todo from './Todo.js'

export default function TodoList(props) {
  return (
    <ul>
      {props.tasks.map((task) => <Todo key={task._id}
                                          name={task.task}
                                          completed={task.completed}
                                          removeTask={() => props.removeTask(task._id)}
                                          toggleTask={() => props.toggleTask(task._id)}/>)}
    </ul>
  )
}