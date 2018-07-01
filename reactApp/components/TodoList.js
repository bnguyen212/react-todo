import React from 'react';
import Todo from './Todo.js'

export default function TodoList(props) {
  return (
    <ul>
      {props.tasks.map((task, i) => <Todo key={i}
                                          name={task.task}
                                          completed={task.completed}
                                          removeTask={() => props.removeTask(i)}
                                          toggleTask={() => props.toggleTask(i)}/>)}
    </ul>
  )
}