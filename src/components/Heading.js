import React, { Component } from "react";

class Heading extends Component {
  render() {
    return (
      <React.Fragment>
        Todo List!!!!
        <hr />
      </React.Fragment>
    );
  }
}

const Greet = (props) => {
  const person = props.name;
  return (
    <React.Fragment>
      <h1>Hello {person}!!</h1>
    </React.Fragment>
  );
};

export { Greet };
export default Heading;
