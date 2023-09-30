import React, { useState } from "react";
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
import TodoList from "./TodoList";

function Todo() {
  const [listTodo, setListTodo] = useState(["Task 1", "Task 2"]);
  const addList = (inputText) => {
    if (inputText) {
      setListTodo([...listTodo, inputText]);
    }
  };
  const deleteItem = (id) => {
    listTodo.splice(id, 1);
    setListTodo([...listTodo]);
  };
  const editItem = (id) => {
    let editedTodo = prompt("Edit to List: ");
    if (editedTodo !== null && editedTodo.trim() !== "") {
      listTodo[id] = editedTodo;
      setListTodo([...listTodo]);
    }
  };
  return (
    <Container>
      <Row>
        <Heading />
      </Row>
      <hr />
      <Row>
        <TodoInput addList={addList} />
      </Row>
      <Row>
        <ul>
          {listTodo.map((text, i) => {
            return (
              <TodoList
                key={i}
                text={text}
                id={i}
                deleteItem={deleteItem}
                editItem={editItem}
              />
            );
          })}
        </ul>
      </Row>
    </Container>
  );
}

export default Todo;
