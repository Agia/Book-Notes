// Imports
import { useEffect, useState } from "react";
import { nanoid } from 'nanoid';
import { Routes, Route, Navigate } from 'react-router-dom';
import BookNote from "./components/BookNote";
import Navbar from './components/Navbar';
import Home from './components/Home';
import "./App.css";

function App() {
  // Set states to store states and data used across components
  const [notes, setNotes] = useState(localStorage.notes ? JSON.parse(localStorage.notes) : [] );
  const [currentNote, setCurrentNote] = useState(false);

  // Update localStorage on change
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  // Sets properties for new book note
  const onAddBookNote = () => {
    const bookNote = {
      id: nanoid(),
      title: "",
      author: "",
      bookNote: "",
    };
    
    // Pushes to setNotes state, inlcuding previous content
    setNotes([bookNote, ...notes]);
    // Sets the current note to this id
    setCurrentNote(bookNote.id);
  };

  // Compares the passed note id to the notes array, removing if matched
  const onDeleteBookNote = (note) => {
    setNotes(notes.filter(({ id }) => id !== note));
  };

  // Maps over the notes array, updating the matched id, if available
  const onEditBookNote = (editedNote) => {
    const notesArray = notes.map((note) => {
      if (note.id === editedNote.id) {
        return editedNote;
      }
      return note;
    });
    // Updates the setNotes state
    setNotes(notesArray);
  };

  // Find a note using it's id property
  const getCurrentNote = () => {
    return notes.find(({ id }) => id === currentNote);
  };

  // Render
  return (
    <div className="App">
    <Navbar/> 
    <Routes>
        <Route
          path="/"
          element={
            <Home />
          }
        />
        <Route
          path="/booknotes"
          element={
          <BookNote
            getCurrentNote={getCurrentNote}
            onEditBookNote={onEditBookNote}
            notes={notes}
            onAddBookNote={onAddBookNote}
            onDeleteBookNote={onDeleteBookNote}
            currentNote={currentNote}
            setCurrentNote={setCurrentNote}
            />
            }
        />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>     
    </div>
  );
}

export default App;
