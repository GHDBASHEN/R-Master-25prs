export default function NoteItem({ note, onSelect, onDelete, active }) {
    return (
        <div
            className={`note-item ${active ? "active" : ""}`}
            onClick={() => onSelect(note.id)}
        >
            <div className="note-title">{note.title}</div>
            <button
                className="delete-btn"
                onClick={e => {
                    e.stopPropagation();
                    onDelete(note.id);
                }}
            >
                ×
            </button>
        </div>
    );
}
