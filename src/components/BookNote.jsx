import AddBookNote from "./AddBookNote";
import BookNoteList from "./BookNoteList";


const BookNote = ( {getCurrentNote, onEditBookNote, notes, onAddBookNote, onDeleteBookNote, currentNote, setCurrentNote}) => {
    return (
        <div id="bn-section">
            <AddBookNote
                getCurrentNote={getCurrentNote()}
                onEditBookNote={onEditBookNote}
            />
            <BookNoteList
                notes={notes}
                onAddBookNote={onAddBookNote}
                onDeleteBookNote={onDeleteBookNote}
                currentNote={currentNote}
                setCurrentNote={setCurrentNote}
            />
        </div>
    )

}

export default BookNote;