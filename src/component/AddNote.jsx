import React, { useState } from 'react'
import '../index.css'
function AddNote({ handleUserTextSumbission}) {
    const [userText, setUserText] = useState('')
    const [inputCharLenght, setInputCharLenght] = useState(200)
    
    const handleUserInputText = (event => {
        setUserText(event.target.value);
        setInputCharLenght (200-event.target.value.length)
    })

    const handleSaveNote = () => {
        if (userText.trim().length > 0) {
            handleUserTextSumbission((userText.trim()))
            setUserText('')
            setInputCharLenght(200)
        }

    }
    return (
        <div className='note add-note'>
            <textarea
                id=""
                cols="10"
                rows="8"
                placeholder='type to add a note here..'
                maxLength='200'
                value={userText}
                onChange={handleUserInputText}
            >
            </textarea>
            <div className='note-footer'>
                <small>{inputCharLenght} remaining</small>
                <button className='note-save' onClick={handleSaveNote}>Save</button>
            </div>
        </div>
    )
}

export default AddNote
