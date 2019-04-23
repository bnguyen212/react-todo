import React from 'react';

export default function Todo(props) {
  return (
    <li>
    {props.completed ? <span onClick={() => props.toggleTask()} style={{color: 'red'}}><strike>{props.name}</strike></span> : <span style={{color: 'blue'}} onClick={() => props.toggleTask()}>{props.name}</span>}
      <span>   </span><button onClick={() => props.removeTask()}>X</button>
    </li>
  )
}
