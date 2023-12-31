import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import ListGroup from "react-bootstrap/ListGroup";

import Heading from "./components/Heading";

class TodoList extends Component {
  constructor(props) {
    super(props);
    // Setting up state
    this.state = {
      userInput: "",
      list: [],
      origin: window.location.origin,
    };
  }

  async componentDidMount() {
    await fetch(this.state.origin + "/.netlify/functions/listtask")
      .then(async (response) => {
        let res = await response.json();
        this.state.list = res;
        this.setState({
          res,
          userInput: "",
        });
      })
      .catch((e) => console.log("Error in fetch: " + e.message));
  }
  // Set a user input value
  updateInput(value) {
    this.setState({
      userInput: value,
    });
  }

  // Add item if user input in not empty
  async addItem() {
    if (this.state.userInput !== "") {
      const userInput = {
        id: "",
        task: this.state.userInput,
      };
      // // Update list
      const list = [...this.state.list];
      list.push(userInput);

      // reset state
      this.setState({
        list,
        userInput: "",
      });
      await fetch(this.state.origin + "/.netlify/functions/addtask", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          task: this.state.userInput,
        }),
      });
    }
  }

  // Function to delete item from list use id to delete
  async deleteItem(key) {
    const list = [...this.state.list];

    // Filter values and leave value which we need to delete
    const updateList = list.filter((item) => item.id !== key);

    // Update list in state
    this.setState({
      list: updateList,
    });
    await fetch(this.state.origin + "/.netlify/functions/deletetask", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: key,
      }),
    });
  }

  editItem = async (id) => {
    const todos = [...this.state.list];
    const editedTodo = prompt("Edit the todo:");
    if (editedTodo !== null && editedTodo.trim() !== "") {
      let updatedTask = todos.find((e) => e.id === id);
      updatedTask.task = editedTodo;
      this.setState({
        list: [...todos],
      });
      await fetch(this.state.origin + "/.netlify/functions/edittask", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: id,
          task: editedTodo,
        }),
      });
    }
  };

  render() {
    return (
      <Container>
        <Row
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "3rem",
            fontWeight: "bolder",
          }}
        >
          <Heading />
        </Row>
        <Row>
          <Col md={{ span: 5, offset: 4 }}>
            <InputGroup className="mb-3">
              <FormControl
                placeholder="add item . . . "
                size="lg"
                value={this.state.userInput}
                onChange={(item) => this.updateInput(item.target.value)}
                aria-label="add something"
                aria-describedby="basic-addon2"
              />
              <InputGroup>
                <Button
                  variant="dark"
                  className="mt-2"
                  onClick={() => this.addItem()}
                >
                  <i className="fa fa-plus"></i>
                </Button>
              </InputGroup>
            </InputGroup>
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 5, offset: 4 }}>
            <ListGroup>
              {/* map over and print items */}
              {this.state.list.map((item) => {
                return (
                  <div key={item.id} id={item.id}>
                    <ListGroup.Item
                      variant="dark"
                      action
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      {item.task}
                      <span>
                        <Button
                          style={{ marginRight: "10px" }}
                          variant="light"
                          onClick={() => this.deleteItem(item.id)}
                        >
                          <i className="fa fa-trash"></i>
                        </Button>
                      </span>
                      <span>
                        <Button
                          variant="light"
                          onClick={() => this.editItem(item.id)}
                        >
                          <i className="fa fa-pen"></i>
                        </Button>
                      </span>
                    </ListGroup.Item>
                  </div>
                );
              })}
            </ListGroup>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default TodoList;
