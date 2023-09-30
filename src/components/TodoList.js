import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import ListGroup from "react-bootstrap/ListGroup";
import Heading from "./Heading";
import TodoInput from "./TodoInput";

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
