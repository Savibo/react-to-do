import React, { Component } from 'react';
 import './App.css';
 import ToDo from './components/ToDo.js';

 class App extends Component {
constructor(props) {
     super(props);
this.state = {
       todos: [],
        newTodoDescription: ''
     };  
     this.deleteTodo = this.deleteTodo.bind(this);
       todos: [
         { description: 'Walk the cat', isCompleted: true },
         { description: 'Throw the dishes away', isCompleted: false },
         { description: 'Buy new dishes', isCompleted: false }
       ],
        newTodoDescription: ''
     };  
       todos: [],
        newTodoDescription: '',
        id : 0
 };  
     this.deleteTodo = this.deleteTodo.bind(this);
 }
     handleChange(e) {
     this.setState({ newTodoDescription: e.target.value })
   }
     handleSubmit(e) {
     e.preventDefault();
     if (!this.state.newTodoDescription) { return }

     const newTodo = { description: this.state.newTodoDescription, isCompleted: false };

      const newTodo = { description: this.state.newTodoDescription, isCompleted: false };
          this.setState({ todos: [...this.state.todos, newTodo], newTodoDescription: '' });
=======
     const newTodo = { description: this.state.newTodoDescription, isCompleted: false, id : this.state.id };
          this.setState({ todos: [...this.state.todos, newTodo], newTodoDescription: '', id : this.state.id + 1 });

   }
     toggleComplete(index) {
    const todos = this.state.todos.slice();
    const todo = todos[index];
    todo.isCompleted = todo.isCompleted ? false : true;
    this.setState({ todos: todos });
  }

      deleteTodo(id) {
      const remainingToDos = this.state.todos.filter((todo, remainingToDos) => {
          return (todo.id !== remainingToDos.id)
       });
      this.setState({ todos: remainingToDos });
}
      deleteTodo(id) {
      const remainingToDos = this.state.todos.filter((todo) => {
          return (todo.id !== id)
       });
      this.setState({ todos: remainingToDos });
}
    
   render() {
     return (
       <div className="App">
        <ul>
          { this.state.todos.map( (todo, index) =>
                          <ToDo key={ index } description={ todo.description } isCompleted={ todo.isCompleted } toggleComplete={ () => this.toggleComplete(index) } />
       <h1>Add ToDo</h1>
         <form onSubmit={ (e) => this.handleSubmit(e) }>
          <input type="text" 
          value={ this.state.newTodoDescription } 
          onChange={ (e) => this.handleChange(e) } 
        />
         <input type="submit" value="Add Todo" />
         </form>       
         <ul>
        { this.state.todos.map( (todo, index) =>
         <ToDo key={ index } 
         <ToDo key={ index }
         id = {todo.id} 
         description={ todo.description } 
         isCompleted={ todo.isCompleted } 
         toggleComplete={ () => this.toggleComplete(index) } 
         onDelete={ this.deleteTodo }
        />
  )}
        </ul>
       </div>
     );
   }
 }

 export default App;

