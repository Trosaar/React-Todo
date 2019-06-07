// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo.js'

const TodoList = props => {
  console.log('TodoList:',props);
  return (
    <div>{props.listItem.map(task => {
      return (
        <Todo listItem={task} key={task.id}/>
      )
    })}</div>
  );
};

export default TodoList;
