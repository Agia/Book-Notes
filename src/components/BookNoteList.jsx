// Imports
import { TbSquareRoundedPlusFilled } from 'react-icons/tb';
import { FaTrashAlt } from 'react-icons/fa';

const BookNoteList = ({ notes, onAddBookNote, onDeleteBookNote, currentNote, setCurrentNote }) => {

    const sortNotes = notes.sort((a, b) => a.title - b.title);

    return (
        <div className="list">
        <div className="list-header">
            <button onClick={onAddBookNote}><TbSquareRoundedPlusFilled className='react-icons icon-plus'/></button>
            <h1 className='list-heading'>Book Notes</h1>
        </div>
        <div className="list-notes">
            {sortNotes.map(({ id, title, author, bookNote }) => (
                <div
                    className={`list-note ${id === currentNote && "active"}`}
                    onClick={() => setCurrentNote(id)}
                >
                <div className="list-note-title">
                    <strong>{title}</strong>
                    <button onClick={(event) => onDeleteBookNote(id)}><FaTrashAlt className='react-icons icon-trash' /></button>
                </div>

                <small className="listview-author">{author}</small>

                <p className='list-blurb'>{bookNote && bookNote.substr(0, 40) + "..."}</p>

            </div>
            ))}
            </div>
        </div>
    );
};

export default BookNoteList;