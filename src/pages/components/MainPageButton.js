import {Link} from 'react-router-dom';

function MainPageButton(){
    return (
        <Link to='/' >
            <button>
                Go Back
            </button>
        </Link>
    );
}

export default MainPageButton;