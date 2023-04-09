import { MdDeleteForever} from 'react-icons/md';

type NotesListProps = {
  id: string;
  text: string;
  date: string;
  handleDeleteNote: (id: string) => void;
};
const Note = ({id, text, date, handleDeleteNote} : NotesListProps) => {
  return <div className="rounded p-3 m-3 d-flex flex-column justify-content-between bg-warning" style={{ height: "190px"}}>
    
    <span className="text-truncate scroll" style={{overflowWrap: "break-word", whiteSpace: "pre-line"}}>{text}</span>
    
    <div className="d-flex align-items-center justify-content-between">
      <small>{date}</small>
      <MdDeleteForever 
        onClick={() => handleDeleteNote(id)}
        className='delete-icon' style={{cursor: "pointer"}}
        size='1.3em'/>
    </div>
  </div>
}

export default Note;