import React, { Component } from "react";

export class todoList extends Component {
  updateChecked = (index, event) => {
    event.stopPropagation();
    var tempArr = [...this.props.todos];
    tempArr[index].checked = !tempArr[index].checked;
    this.props.updateChecked(tempArr);
  };
  render() {
    return (
      <div className="todo-list">
        {this.props.todos.map((item,index) => (
          <div className="todo-item" key={item.id}>
            <div className="check">
              <label className="toggleButton">
                <input
                  type="checkbox"
                  defaultChecked={item.checked}
                  onClick={event => {
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
                <p>{item.value}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default todoList;
