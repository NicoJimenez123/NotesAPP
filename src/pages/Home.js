import NoteBook from './components/NoteBook';
import CreateNoteButton from './components/CreateNoteButton';
import {Link} from 'react-router-dom';

function Home(){
    return (
        <div className='Home'>
            <div className='Buttons Centrado'>
                <Link to='/create_note'>
                    <CreateNoteButton />
                </Link>
            </div>
            <div className='Post-List'>
                <NoteBook />
            </div>
        </div>
    )
}

export default Home;