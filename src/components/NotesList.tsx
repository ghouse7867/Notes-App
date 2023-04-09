import Note from './Note';
import Addnote from './Addnote'

interface Note {
  id: string;
  text: string;
  date: string;
}

interface NotesListProps {
  notes: Note[];
  handleAddNote: (note:string ) => void;
  handleDeleteNote: (id: string) => void;
  
}


const NotesList = ({notes, handleAddNote, handleDeleteNote}: NotesListProps) => {
  return (
    <div className='m-2 p-2' style={{ display:"grid", gridGap:"1rem", gridTemplateColumns: "repeat(auto-fit, minmax(250px,1fr)" }}>
    {notes.map((note)=>(
    <Note key={note.id} id={note.id} text={note.text} date={note.date} handleDeleteNote={handleDeleteNote}/>
    ))}
      <Addnote handleAddNote={handleAddNote}  />
      
  </div>
  );
};

export default NotesList;