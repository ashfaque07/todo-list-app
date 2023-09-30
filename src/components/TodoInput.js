import React, { useState } from "react";

function TodoInput(props) {
  const [inputText, setInputText] = useState('');
  return (
    <React.Fragment>
      <input
        className="input-box"
        value = {inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button
        onClick={() => {
          props.addList(inputText);
          setInputText('');
        }}
      >
        Add Task
      </button>
    </React.Fragment>
  );
}

export default TodoInput;
