import React from 'react';
import {Redirect} from 'react-router-dom';
import './Note.css';
class Note extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title: this.props.data.title,
            body: this.props.data.body,
            datePublished: this.props.data.datePublished,
            redirect: null,
        };
        this.goToEdit = this.goToEdit.bind(this);
    }
    goToEdit(event){
        this.setState({ redirect: '/edit_note'});
    }
    render(){
        if (this.state.redirect) {
            return <Redirect to={{
                pathname:this.state.redirect,
                state:{noteTitle:this.state.title},
            }} />
        }
        return (
            <div className='Note' onClick={this.goToEdit}>
                <div className='Note-Title'>
                    <p> {this.state.title} </p>
                </div>
                <div className='Note-Body'>
                    <p> {this.state.body}</p>
                </div>
                <div className='Note-Date'>
                    <p> Fecha de Publicación: {this.state.datePublished} </p>
                </div>
            </div>
        )
    };
}

export default Note;