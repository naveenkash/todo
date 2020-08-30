import React, { Component } from "react";

export class todoList extends Component {
  updateChecked = (index, event) => {
    event.stopPropagation();
    let todo = this.props.todos[index];
    todo.checked = !todo.checked;
    document.querySelectorAll(".todo-item p")[
      index
    ].style.textDecoration = todo.checked ? "line-through" : "none";
    this.props.updateChecked(this.props.todos);
  };
  delete = (e, item) => {
    e.persist();
    e.preventDefault();
    let filtered = this.props.todos.filter((todo) => {
      return todo.id !== item.id;
    });
    this.props.updateChecked(filtered);
  };
  render() {
    return (
      <div className="todo-list">
        {this.props.todos.map((item, index) => (
          <div className="todo-item" key={item.id}>
            <div className="check">
              <label className="toggleButton">
                <input
                  type="checkbox"
                  defaultChecked={item.checked}
                  onClick={(event) => {
                    this.updateChecked(index, event);
                  }}
                />
                <div>
                  <svg viewBox="0 0 44 44">
                    <path
                      d="M14,24 L21,31 L39.7428882,11.5937758 C35.2809627,6.53125861 30.0333333,4 24,4 C12.95,4 4,12.95 4,24 C4,35.05 12.95,44 24,44 C35.05,44 44,35.05 44,24 C44,19.3 42.5809627,15.1645919 39.7428882,11.5937758"
                      transform="translate(-2.000000, -2.000000)"
                    ></path>
                  </svg>
                </div>
              </label>
            </div>
            <p
              style={{ textDecoration: item.checked ? "line-through" : "none" }}
            >
              {item.value}
            </p>
            <div
              className="delete"
              onClick={(e) => {
                this.delete(e, item);
              }}
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="far"
                data-icon="times-circle"
                className="svg-inline--fa fa-times-circle fa-w-16"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm101.8-262.2L295.6 256l62.2 62.2c4.7 4.7 4.7 12.3 0 17l-22.6 22.6c-4.7 4.7-12.3 4.7-17 0L256 295.6l-62.2 62.2c-4.7 4.7-12.3 4.7-17 0l-22.6-22.6c-4.7-4.7-4.7-12.3 0-17l62.2-62.2-62.2-62.2c-4.7-4.7-4.7-12.3 0-17l22.6-22.6c4.7-4.7 12.3-4.7 17 0l62.2 62.2 62.2-62.2c4.7-4.7 12.3-4.7 17 0l22.6 22.6c4.7 4.7 4.7 12.3 0 17z"></path>
              </svg>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default todoList;
