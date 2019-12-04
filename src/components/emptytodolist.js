import React, { Component } from "react";
import "../style/todoList.css";
export class todolist extends Component {
  addToTodos = (item, event) => {
    if (event.key === "Enter") {
      if (event.currentTarget.value === "") {
        return alert("Please Add Some Text!");
      }
      this.props.addToTodos(item.id, event.currentTarget.value);
      var input = document.querySelector(".todo-input input");
      input.focus();
    }
  };
  render() {
    return (
      <div className="todo-list">
        {this.props.emptyTodosList.map(item => (
          <div className="todo-input" key={item.id}>
            <input onKeyPress={event => this.addToTodos(item, event)} />
          </div>
        ))}
      </div>
    );
  }
}

export default todolist;
