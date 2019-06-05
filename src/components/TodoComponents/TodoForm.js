import React from 'react';

// class TodoForm extends React.Component {
//   constructor(props) {
//     super(props);
//   };
//
//   render() {
//     return (
//       <div>
//       </div>
//     );
//   };
// };

const TodoForm = props => {
  return (
    <form onSubmit={props.subm}>
    <input type="text" placeholder="Task to add" name="task" value={props.listItem.task} onChange={props.change}/>
    <button type="submit">Add</button>
    <button typr="nothing">Clear Completed</button>
    </form>
  )
}

export default TodoForm;
