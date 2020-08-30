import React, { Component } from "react";
import EmptyTodoList from "./components/emptytodolist";
import TodoList from "./components/todoList";
import "./App.css";
export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      emptyTodosList: [],
    };
  }
  componentDidMount() {
    let todos = JSON.parse(localStorage.getItem("todos"));
    if (todos && todos.length > 0) {
      this.setState({
        todos,
      });
    }
  }
  addEmptyList = () => {
    var id =
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15);
    var tempObject = {
      id,
    };
    if (this.state.emptyTodosList.length <= 0) {
      var tempArr = [];
      tempArr.push(tempObject);
      this.setState({ emptyTodosList: tempArr });
    }
  };
  addToTodos = (id, value) => {
    var todo = {
      id,
      value,
      checked: false,
    };
    var tempTodoArray = [...this.state.todos];
    tempTodoArray.push(todo);
    localStorage.setItem("todos", JSON.stringify(tempTodoArray));
    this.setState({
      emptyTodosList: [],
      todos: tempTodoArray,
    });
  };
  updateChecked = (updatedArray) => {
    localStorage.setItem("todos", JSON.stringify(updatedArray));
    this.setState({ todos: updatedArray });
  };
  render() {
    return (
      <div className="todo">
        <div className="todo-head-wrapper">
          <div className="todo-head">
            <div className="todo-logo">
              <h1>Todo</h1>
            </div>
            <div
              className="add-todo"
              onClick={() => {
                this.addEmptyList();
              }}
            >
              <span>
                <i>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 48 48"
                  >
                    <path d="M38 26H26v12h-4V26H10v-4h12V10h4v12h12v4z" />
                  </svg>
                </i>
              </span>
            </div>
          </div>
        </div>
        <div className="todo-wrapper">
          <TodoList
            updateChecked={this.updateChecked}
            todos={this.state.todos}
          />
          <EmptyTodoList
            addToTodos={this.addToTodos}
            emptyTodosList={this.state.emptyTodosList}
          />
        </div>
      </div>
    );
  }
}

export default App;
