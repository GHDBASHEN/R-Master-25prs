import NoteItem from "./NoteItem";

export default function NoteList({
    notes,
    onCreate,
    onSelect,
    onDelete,
    activeId
}) {
    return (
        <div className="sidebar">
            <button className="new-btn" onClick={onCreate}>
                + New Note
            </button>

            {notes.map(note => (
                <NoteItem
                    key={note.id}
                    note={note}
                    onSelect={onSelect}
                    onDelete={onDelete}
                    active={note.id === activeId}
                />
            ))}
        </div>
    );
}
