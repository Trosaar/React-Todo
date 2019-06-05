import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm.js'

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(props) {
    super(props);
    this.state={
      task: '',
      id: Date.now(),
      completed: false
    };
  }

  render() {
    return (
      <div>
        <h2>Todo List:</h2>
        <TodoForm />
      </div>
    );
  }
}

export default App;
