import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm.js';
import TodoList from './components/TodoComponents/TodoList.js'

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(props) {
    super(props);
    this.state={
      runList: [],
    };
  };

  addNewTask = task => {
    const newTask = {
      task: task,
      id: Date.now(),
      completed: false,
    };

    this.setState({
      runList: [...this.state.runList, newTask]
    });
  };

  completeToggle = id => {
    console.log("completeToggle:",id);
    const taskChecker = this.state.runList.map(task => {
      if (task.id === id) {
          console.log('task:',task);
          // const newObj = {
          //   ...task,
            task.completed = !task.completed
          // };
          return task;
        } else {
          return task
        }

        this.setState({runList: taskChecker})
      }
    );
  };

  render() {
    return (
      <div>
        <h2>Todo List:</h2>
        <TodoList listItem={this.state.runList} done={this.completeToggle}/>
        <TodoForm addTask={this.addNewTask}/>
      </div>
    );
  }
}

export default App;
