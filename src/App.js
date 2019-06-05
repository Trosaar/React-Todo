import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm.js';
import TodoList from './components/TodoComponents/TodoList.js'
import Todo from './components/TodoComponents/Todo.js'

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(props) {
    super(props);
    this.state={
      runList: Todo,
      task: '',
      id: Date.now(),
      completed: false
    };
  }

  submitHandler = event => {
    event.preventDefault();
    const newTask = {
      task: this.state.task,
      id: this.state.id,
      completed: this.state.completed,
    }

    this.setState({
      runList: [...this.state.runList, newTask]
    });
  };

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div>
        <h2>Todo List:</h2>
        <div>
          {this.state.runList.map((Todo) => {
            return (
              <TodoList listItem={this.state} key={this.state.id}/>
            )
          })}
        </div>
        <TodoForm listItem={this.state} change={this.changeHandler} subm={this.submitHandler}/>
      </div>
    );
  }
}

export default App;
