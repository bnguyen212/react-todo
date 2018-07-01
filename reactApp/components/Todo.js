import React from 'react';

export default function Todo(props) {
  return (
    <li>
    <button onClick={() => props.removeTask()}>X</button>
    {props.completed ? <span onClick={() => props.toggleTask()}><strike>{props.name}</strike></span> : <span onClick={() => props.toggleTask()}>{props.name}</span>}
    </li>
  )
}

