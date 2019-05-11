import React, { Component } from 'react';
import './notesPage.css';
import { Route } from 'react-router-dom';


class NotesPage extends Component {
  render(props) {
    let note_paramId = this.props.routerProps.match.params.noteId
    let result = this.props.notes.notes.filter(note => {
      return note.id === note_paramId
    })
    let folder_id = result[0].folderId
    let folder_name = this.props.notes.folders.filter(obj => {
      return obj.id === folder_id
    })

    let filtered_notes = this.props.notes.notes.filter(note => {
      return note.id === note_paramId
    })


    const filtered_folder = this.props.notes.notes.filter(note => note.folderId === note_paramId);

  return (
    <div className="NotesPage-container">
      <div className="left_container">


        <li className="folder_title_vertical">
        <span className="folder_name_vertical" >
        {folder_name[0].name}

         </span>

        </li>


      </div>

      <div className="right_container">
      {filtered_notes.map(
        (note,i) =>
        <li className="note_container" key={i}>
        <a href="" className="note_title"> {note.name} </a>

        <span className="time_modified"> Modified: {note.modified} </span>
        <button className="delete_Note_btn"> Delete Note </button>
        <p class="note_content">
        {note.content}
        </p>


        </li>
      )}

      </div>

    </div>
  );
  }
}

export default NotesPage;
