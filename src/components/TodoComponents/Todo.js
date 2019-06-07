import React from 'react';

const Todo = props => {
  console.log('Todo:',props);

  const clickHandler = () => {
    props.done(props.listItem.id)
    console.log('onClick:',props.listItem.id);
  };

  return (
    <div onClick={clickHandler}>{props.listItem.task}</div>
  );
};

export default Todo;
