import './App.css';
import NavBar from './pages/components/NavBar';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import Home from './pages/Home';
import CreateNote from './pages/CreateNote';
import EditNote from './pages/EditNote';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="App-header">
          <NavBar />
        </div>
        <div className='App-Body'>
          <Switch>
            <Route path='/create_note' component={CreateNote} />
            <Route path='/edit_note' render={(props) => <EditNote {...props}/>} />
            <Route path='/' component={Home} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
