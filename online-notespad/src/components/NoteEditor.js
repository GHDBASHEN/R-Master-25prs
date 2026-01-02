import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';

export default function NoteEditor({ note, onChange }) {
    // Custom toolbar configuration
    const modules = {
        toolbar: [
            [{ header: [1, 2, false] }],
            ['bold', 'italic', 'underline', 'strike'],
            [{ list: 'ordered' }, { list: 'bullet' }],
            ['blockquote', 'code-block'],
            ['clean'] // remove formatting button
        ]
    };

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
            
            <div className="editor-container">
                <ReactQuill
                    theme="snow"
                    value={note.content}
                    onChange={(content) => 
                        onChange(note.id, { 
                            content, 
                            updatedAt: new Date().toISOString() 
                        })
                    }
                    modules={modules}
                    placeholder="Write your note here..."
                />
            </div>
        </div>
    );
}