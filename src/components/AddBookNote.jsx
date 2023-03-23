import ReactMarkdown from "react-markdown";


const AddBookNote = ({ getCurrentNote, onEditBookNote }) => {

    const onEditInput = (label, value) => {
        onEditBookNote({
        ...getCurrentNote,
        [label]: value,
        });
    };

    if (!getCurrentNote) {
        return <div className="no-active-note">No Note Selected</div>;
    };

    return (
        <div className="editor">
        <h1 className="editor-heading">Edit</h1>
            <div className="bn-edit">
                <input
                    type="text"
                    id="title"
                    className="bn-input"
                    value={getCurrentNote.title}
                    placeholder="Book Title"
                    onChange={(event) => onEditInput("title", event.target.value)}
                    autoFocus
                />

                <input
                    type="text"
                    id="author"
                    className="bn-input"
                    value={getCurrentNote.author}
                    placeholder="Author name"
                    onChange={(event) => onEditInput("author", event.target.value)}
                />

                <textarea
                    id="bookNote"
                    placeholder="Write your book note here..."
                    value={getCurrentNote.bookNote}
                    onChange={(event) => onEditInput("bookNote", event.target.value)}
                />
            </div>

            {/* <button type="button" className="button-close" onClick={() => <div className="no-active-note">No Note Selected</div>}>X</button> */}

            <div className="bn-preview">
            <h1 className="preview-heading">Preview</h1>
                <h2 className="preview-title">{getCurrentNote.title}</h2>
                <p className="preview-author">{getCurrentNote.author}</p>
                <ReactMarkdown className="markdown-preview">
                {getCurrentNote.bookNote}
                </ReactMarkdown>
            </div>
        </div>
    );
};

export default AddBookNote;
