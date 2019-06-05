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
    <form>
    <input type="text" placeholder="Task to add" name="task"/>
    <button type="submit">Add</button>
    <button>Clear Completed</button>
    </form>
  )
}

export default TodoForm;
