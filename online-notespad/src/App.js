import { useEffect, useState } from "react";
import NoteList from "./components/NoteList";
import NoteEditor from "./components/NoteEditor";

export default function App() {
  const [notes, setNotes] = useState(() => {
    const saved = localStorage.getItem("notes");
    return saved ? JSON.parse(saved) : [];
  });

  const [activeId, setActiveId] = useState(null);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const createNote = () => {
    const newNote = {
      id: crypto.randomUUID(),
      title: "Untitled Note",
      content: "",
      updatedAt: new Date().toISOString()
    };
    setNotes([newNote, ...notes]);
    setActiveId(newNote.id);
  };

  const updateNote = (id, data) => {
    setNotes(
      notes.map(note =>
        note.id === id ? { ...note, ...data } : note
      )
    );
  };

  const deleteNote = id => {
    setNotes(notes.filter(note => note.id !== id));
    if (activeId === id) setActiveId(null);
  };

  const activeNote = notes.find(note => note.id === activeId);

  return (
    <div className="app">
      <NoteList
        notes={notes}
        onCreate={createNote}
        onSelect={setActiveId}
        onDelete={deleteNote}
        activeId={activeId}
      />

      {activeNote ? (
        <NoteEditor note={activeNote} onChange={updateNote} />
      ) : (
        <div className="empty">Create or select a note</div>
      )}
    </div>
  );
}
