import React from 'react';
import TodoTemplate from './TodoTemplate'
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      todoList: [],
      currentTodo: ''
    }
  }

  handleInputChange = e => {
    this.setState({
      currentTodo: e.target.value
    })
  }

  handleCreateTodo = () => {
    let todoItem = this.state.todoList.slice();
    todoItem.push(this.state.currentTodo);

    this.state.currentTodo !== '' ? 
      this.setState({ todoList: todoItem, currentTodo: ''})
      : this.setState({todoList: this.state.todoList});
  }

  handleDeleteTodo = i => {
    let todoDeletedItem = this.state.todoList.slice();
    
    todoDeletedItem.splice(i, 1);
    this.setState({
      todoList: todoDeletedItem
    })
  }
  

  render(){
    const createdTodoItems = this.state.todoList.map((item, index) => {
      return <TodoTemplate key={index} todo={item} handleDeleteTodo={() => this.handleDeleteTodo(index)} />
    })
    console.log(this.state.todoList);
    return (
      <div className="App">
        <header className="App-header">
          <h2 style={{fontSize: '60px'}}>Plan your day</h2>
          <input onChange={this.handleInputChange} value={this.state.currentTodo} type="text" placeholder="Enter your todo plan" />
          <button onClick={this.handleCreateTodo} className="btn-create">Add task</button>
          <br/>
          {this.state.todoList.length === 0 ? <p>You haven't todo tasks yet</p> : <ul>{createdTodoItems}</ul>}
        </header>
      </div>
    );
  }
  
}

export default App;
