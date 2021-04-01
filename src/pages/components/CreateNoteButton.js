import './Button.css';
import logo from './notebook.png';
function CreateNoteButton(props){
    return (
        <button className='NewNote'>
            Crear Nueva Nota
            <img src={logo} alt='logo' width='20px'/>
        </button>
    );
}

export default CreateNoteButton;