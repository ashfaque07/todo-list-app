import React from "react";
import "bootstrap/dist/css/bootstrap.css";
function TodoList(props) {
  return (
    <li className="list-Item" index={props.id}>
      {props.text}
      <span
        className="delete-icon"
        onClick={() => {
          props.deleteItem(props.id);
        }}
      >
        <i class="fa fa-trash"></i>
      </span>
      <span className="edit-icon" onClick = {() => {
        props.editItem(props.id);
      }}>
      <i class="fa fa-pen"></i>
      </span>
    </li>
  );
}

export default TodoList;
