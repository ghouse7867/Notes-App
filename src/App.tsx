import { useState , useEffect} from 'react';
import {nanoid} from 'nanoid';
import NotesList from './components/NotesList';
import Search from './components/Search';
import Header from './components/Header';
import './App.css';
import {db} from "./firebase";
import { collection, addDoc, getDocs, deleteDoc, doc} from "firebase/firestore";


interface Note {
  id: string;
  text: string;
  date: string;
}

const App = () => {
  const [notes, setNotes] = useState<Note[]>([]);

  const [searchText, setSearchText] = useState('');

  const [darkmode, setDarkmode] = useState(false);

  useEffect(() => {
    const loadNotes = async () => {
      const notesCollection = collection(db, "notes");
      const notesSnapshot = await getDocs(notesCollection);
      const notesData = notesSnapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() } as Note;
      });
      setNotes(notesData);
    };
    loadNotes();
  }, []);
  
  const addNote = async (text:string) =>{
    const date = new Date();
    const newNote = {
      id:nanoid(),
      text: text,
      date: date.toLocaleDateString()
    };
    const notesCollection = collection(db, "notes");
    const docRef = await addDoc(notesCollection, newNote);
    setNotes((prevNotes) => [...prevNotes, { ...newNote, id: docRef.id }]);
  };
const deleteNotes = async (id:string) =>{
  const notesCollection = collection(db, "notes");
  await deleteDoc(doc(notesCollection, id));
  setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id ));
  console.log(notes)
};

  return (
    <div className={`${darkmode && 'darkmodes'}`}>
      <div className='container ml-2 mr-2 p-4 min-vh-100' >
        <Header htdm = {setDarkmode}/>
        <Search handleSearchNote = {setSearchText}/>
        <NotesList 
          notes={notes.filter((note)=> note.text.toLowerCase().includes(searchText))}
          handleAddNote={addNote}
          handleDeleteNote={deleteNotes}
        />
      </div>
    </div>
  );
};

export default App;
