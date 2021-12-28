import React from 'react'
import {MdSearch} from 'react-icons/md'
function SearchNote({handleNoteSearch}) {
    return (
        <div className='note-search'>
            <MdSearch size='1.5rem'/>
            <input 
            type="search" 
            placeholder='search note..'  
            onChange={(event=>{
                   handleNoteSearch(event.target.value);
            })}/>

        </div>
    )
}

export default SearchNote
