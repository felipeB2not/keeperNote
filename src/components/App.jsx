import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  function AddNote(Note) {
    return (
      <div>
        <h1>{CreateArea.title}</h1>
        <p>{CreateArea.content}</p>
      </div>
    );
  }
  return (
    <div>
      <Header />
      <CreateArea />
      <Note key={1} note={AddNote} />
      <Footer />
    </div>
  );
}

export default App;
