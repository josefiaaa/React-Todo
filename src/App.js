import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm'

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  state = {
    todos: []
  };

  addTodo = (todo) => {
    this.setState({
      todos: [todo, ...this.state.todos]
    })
  };

  render() {
    return (
      <div className = "todoListContainer">
        <TodoForm onSubmit={this.addTodo} />

        {/* {JSON.stringify(this.state.todos)} */}

        {this.state.todos.map((todo, i) => (<div className="boxContainer" ><li key={i} className="todoBox">{todo.text}</li></div>))}
        
      </div>
    );
  }
}

export default App;
