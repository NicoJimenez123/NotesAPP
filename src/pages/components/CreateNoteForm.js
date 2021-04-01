import React from 'react';
import { Redirect } from 'react-router-dom';
import './Form.css';

class CreateNoteForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title: '',
            body: '',
            datePublished: null,
            redirect: null,
            isEditing: this.props.noteTitle || null,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.deleteNote = this.deleteNote.bind(this);
    }
    handleChange(event){
        const target = event.target;
        const value = target.value;
        const name = target.name;
        let date = new Date();
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear(); 
        let min = (date.getMinutes()<10?'0':'') + date.getMinutes();
        let hour = date.getHours();
        let sec = (date.getSeconds()<10?'0':'') + date.getSeconds();
        this.setState({ [name]: value , datePublished: `${day}/${month}/${year} ${hour}:${min}:${sec}`});
    }
    handleSubmit(event){
        if(this.state.title === ''){
            this.setState({ redirect: '/'});
            return;
        }
        localStorage.setItem(this.state.title, JSON.stringify(this.state));
        if(this.state.isEditing && this.state.title !== this.state.isEditing){
            localStorage.removeItem(this.state.isEditing);
        }
        event.preventDefault();
        this.setState({ redirect: '/'});
    }
    componentDidMount(){
        if(this.state.isEditing){
            let value = JSON.parse(localStorage.getItem(this.state.isEditing));
            let title = value.title;
            let body = value.body;
            this.setState({title:title, body:body});
        }
    }
    deleteNote(event){
        window.confirm("Tas seguro?");
        localStorage.removeItem(this.state.title);
        this.setState({ redirect: '/'});
    }
    render (){
        let deleteButton;
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }
        if(this.state.isEditing){
            deleteButton = <button onClick={this.deleteNote} >Delete Note</button>;
        }
        return(
            <div className='Form'>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input type='text' id='noteTitle' name='title' placeholder='Write the Title' value={this.state.title} onChange={this.handleChange}></input>
                    </div>
                    <div>
                        <textarea type='text' id='noteBody' name='body' placeholder='Write the Body' value={this.state.body} onChange={this.handleChange}></textarea>
                    </div>
                    <input type="submit"></input>
                </form>
                {deleteButton}
            </div>
        );
    }
}

export default CreateNoteForm;