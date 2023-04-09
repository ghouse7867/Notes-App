import {MdSearch} from 'react-icons/md';
import '../App.css'

type SearchProps = {
  handleSearchNote: (searchText: any) => void;
}

const Search = ({handleSearchNote} : SearchProps) => {
  return( <div className='search d-flex bg-light rounded-pill align-items-center p-2 m-2'>
  <MdSearch className='' size='1.9em'/>
    <input 
      onChange={(event)=> handleSearchNote(event.target.value)}
      className='w-70 bg-light border-0' type='text' placeholder='type to search' />
  </div>
         );
}

export default Search;