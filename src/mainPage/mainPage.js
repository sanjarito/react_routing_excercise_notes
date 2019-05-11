import React, { Component } from 'react';
import './mainPage.css';
import { Link } from 'react-router-dom';



class MainPage extends Component {
  render(props) {



  return (
    <div className="mainPage-container">
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
    <button className="add_folder_btn"> Add Folder </button>
    </div>

    <div className="right_container">
    {this.props.folders.notes.map(
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

export default MainPage;
