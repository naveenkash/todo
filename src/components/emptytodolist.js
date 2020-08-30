import React, { Component } from "react";
import "../style/todoList.css";
export class todolist extends Component {
  addToTodos = (item, event) => {
    if (event.key === "Enter") {
      if (event.currentTarget.value === "") {
        return alert("Please Add Some Text!");
      }
      if (event.currentTarget.value.length > 250) {
        alert("Words limit per todo exceeded");
        return;
      }
      this.props.addToTodos(item.id, event.currentTarget.value);
    }
  };
  render() {
    return (
      <div className="todo-list" id="emptylist">
        {this.props.emptyTodosList.map((item) => (
          <div className="todo-input" key={item.id}>
            <input
              onKeyPress={(event) => this.addToTodos(item, event)}
              autoFocus
            />
          </div>
        ))}
      </div>
    );
  }
}

export default todolist;
