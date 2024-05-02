import React, { useState } from "react";
import Note from "./Note";

function CreateArea() {
  const [InputNote, setInputNote] = useState({
    title: "",
    content: ""
  });

  function HandleInput(event) {
    const { name, value } = event.target;
    setInputNote((prevNote) => {
      return { ...prevNote, [name]: value };
    });
  }
  function PreventDefaultF(event) {
    event.preventDefault();
  }
  return (
    <div>
      <form>
        <input
          name="title"
          onChange={HandleInput}
          placeholder="Title"
          value={InputNote.title}
        />
        <textarea
          name="content"
          onChange={HandleInput}
          placeholder="Take a note..."
          rows="3"
          value={InputNote.content}
        />
        <button onClick={PreventDefaultF}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
