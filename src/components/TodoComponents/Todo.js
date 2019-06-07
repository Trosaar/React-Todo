import React from 'react';

const Todo = props => {
  console.log('Todo:',props);
  return (
    <div>{props.listItem.task}</div>
  );
};

export default Todo;
