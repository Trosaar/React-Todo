import React from 'react';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      task:'',
    }
  };

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  submitHandler = event => {
    event.preventDefault();
    this.props.addTask(this.state.task);
  };

  render() {
    return (
      <form onSubmit={this.submitHandler}>
      <input type="text" placeholder="Task to add" name="task" value={this.state.task} onChange={this.changeHandler} />
      <button type="submit">Add</button>
      <button type="nothing">Clear Completed</button>
      </form>
    );
  };
};

// const TodoForm = props => {
//   return (
//     <form onSubmit={props.subm}>
//     <input type="text" placeholder="Task to add" name="task" value={props.listItem.task} onChange={props.change}/>
//     <button type="submit">Add</button>
//     <button typr="nothing">Clear Completed</button>
//     </form>
//   )
// }

export default TodoForm;
