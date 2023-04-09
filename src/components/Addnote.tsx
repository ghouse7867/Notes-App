import { useState } from 'react';

type SearchProps = {
  handleAddNote: (searchText: string) => void;
}

 const Addnote = ({handleAddNote} : SearchProps) => {
   const [noteText, setNoteText] = useState("");
   const charLimit = 200;

   const handleChange=(event:React.ChangeEvent<HTMLTextAreaElement>) : void =>{
     if(charLimit - event.target.value.length >=0){
       setNoteText(event.target.value);
     }                    
   }
   const handleSaveClick = () =>{
     if(noteText.trim().length > 0){
       handleAddNote(noteText)
       setNoteText('')
     }
   };
  return(
    <div className="rounded p-3 m-3 d-flex flex-column justify-content -between" style={{ height:"190px", backgroundColor: "rgb(190, 234, 255)"}}>
      <textarea className="border-0" style={{ resize: "none", backgroundColor: "rgb(190, 234, 255)", height:"150px", outline:"none"}} placeholder="enter texts..." value={noteText} onChange={handleChange}></textarea>
      <div className="d-flex align-items-center justify-content-between">
        <small>{charLimit - noteText.length} remaining</small>
        <button className="border-0 rounded-pill btn btn-primary" onClick={handleSaveClick}>Save</button>
      </div>
    </div>
  )
}

export default Addnote;