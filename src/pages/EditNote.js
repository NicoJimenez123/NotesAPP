import MainPageButton from './components/MainPageButton';
import CreateNoteForm from './components/CreateNoteForm';

function EditNote(props){
    let noteTitle = props.location.state.noteTitle;
    return (
        <div>
            <MainPageButton />
            <CreateNoteForm noteTitle={noteTitle}/>
        </div>
    );
}

export default EditNote;