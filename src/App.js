import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import "./App.css";
import NoteList from "./component/NoteList";
import SearchNote from "./component/SearchNote";

function App() {
  const [notes, setNotes] = useState([]);
  const [noteToSearch, setNoteToSearch] = useState("");
  let handleEmptyNoteData=false;
  useEffect(()=>{
    const newNotes=JSON.parse(localStorage.getItem('stored-notes'));
    if (newNotes.length>0){
    
      setNotes(newNotes)
      return
    }
   
  },[])
  useEffect(() => {
    localStorage.setItem("stored-notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = (text) => {
    const notesObj = {
      id: nanoid(),
      text: text,
      date: new Date().toLocaleDateString(),
    };
    const newNote = [...notes, notesObj];
    setNotes(newNote);
  };

  const deleteNote = (id) => {
    const newNote = notes.filter((note) => note.id !== id);
    setNotes(newNote);
  };
  return (
    <div className="App">
      <SearchNote handleNoteSearch={setNoteToSearch} />
        {!handleEmptyNoteData && <NoteList
          notes={notes.filter((note) => {
            return note.text.toLowerCase().includes(noteToSearch);
          })}
          handleUserTextSumbission={addNote}
          handleDeleteNote={deleteNote}
        />}
    </div>
  );
}

export default App;
