import React from 'react';

import TodoForm from './components/TodoComponents/TodoForm';
import Todo from './components/TodoComponents/Todo';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  
  state = {
    todos: [
      {
        id: 7423847345,
        text: 'Bake Cupcakes',
        completed: false,
      },
      {
        id: 39875460503,
        text: 'Karate class @ 8',
        completed: false,
      }
    ]
  };

  addTodo = (todo) => {
    this.setState({
      todos: [todo, ...this.state.todos]
    })
  };

  toggleComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
         }
        } else {
          return todo;
        }
      })
    })
  };

  render() {
    return (
      <div className = "todoListContainer">
        <TodoForm onSubmit={this.addTodo} />

        <div className = 'divCont'>
          {this.state.todos.map((todo, i) => (
          <Todo 
          key={todo.i} 
          toggleComplete={() => this.toggleComplete(todo.id)}
          todo={todo}
          /> 
          ))}
        </div>  

        

      </div>
    );
  }
}

export default App;
