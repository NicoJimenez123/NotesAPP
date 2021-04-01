import React from 'react';
import Note from './Note';

function NoteBook(props){
    let notes = [];
    // iterate localStorage
    for (let i = 0; i < localStorage.length; i++) {
        // set iteration key name
        let key = localStorage.key(i);
        // use key name to retrieve the corresponding value
        let value = JSON.parse(localStorage.getItem(key));
        notes.unshift(<Note key={key} data={value}/>);
    }
    notes.sort((a,b)=> (a.props.data.datePublished > b.props.data.datePublished ? -1 : 1));
    console.log(notes);
    return (
        <div className="Note-List">
            {notes}
        </div>
    );
}

export default NoteBook;