import React, { Component } from 'react';
import './folderPage.css';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';


class FolderPage extends Component {
  render(props) {


    const filtered_notes = this.props.folders.notes.filter(note => note.folderId == this.props.routerProps.match.params.folderId);



  return (
    <div className="FolderPage-container">
      <div className="left_container">

        {this.props.folders.folders.map(
          (folder,i) =>
          <li key={i} className="folder_title">
          <span className="folder_name" >
          <Link to={`/folder/${folder.id}`}>
           {folder.name}
           </Link>
           </span>

          </li>

        )}
      </div>

      <div className="right_container">
      {filtered_notes.map(
        (note,i) =>
        <li className="note_container" key={i}>
        <Link to={`/notes/${note.id}`}>
        {note.name}
        </Link>
        <span className="time_modified"> {note.modified} </span>
        <button className="delete_Note_btn"> Delete Note </button>



        </li>
      )}
      </div>
    </div>
  );
  }
}

export default FolderPage;
