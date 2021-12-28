import React from 'react'
import AddNote from './AddNote'
import Note from './Note'

function NoteList({ notes,handleUserTextSumbission,handleDeleteNote}) {
    return (
        <div className="note-list">
            {notes.map((note) => {
                
                return <Note key={note.id} id={note.id} text={note.text} date={note.date} handleDeleteNote={handleDeleteNote} />
            })}
         <AddNote handleUserTextSumbission={handleUserTextSumbission} />
        </div>
    )
}

export default NoteList
