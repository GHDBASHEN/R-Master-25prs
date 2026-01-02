export default function NoteEditor({ note, onChange }) {
    return (
        <div className="editor">
            <input
                className="title-input"
                value={note.title}
                onChange={e =>
                    onChange(note.id, { title: e.target.value })
                }
                placeholder="Note title"
            />

            <textarea
                className="content-area"
                value={note.content}
                onChange={e =>
                    onChange(note.id, {
                        content: e.target.value,
                        updatedAt: new Date().toISOString()
                    })
                }
                placeholder="Write your note here..."
            />
        </div>
    );
}
