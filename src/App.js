import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import MainPage from './mainPage/mainPage'
import FolderPage from './folderPage/folderPage'
import NotesPage from './notesPage/notesPage'
import Dummystoredata from './dummy-store.js'
import { Link } from 'react-router-dom';


class App extends Component {
  state = {
    data:Dummystoredata
  };

  render() {
    const dummyData = this.state.data
  return (
    <div className="App">
    <div className="App_component_container">
      <Link to={""}>
        <h1 class="main_title">HOME</h1>
      </Link>
      <Route exact path='/' render={
        (routerProps) =>
          <MainPage
            folders={dummyData}
            routerProps = {routerProps}
          />
        }
      />

      <Route path='/folder/:folderId' render={
        (routerProps) =>
          <FolderPage
            folders={dummyData}
            routerProps = {routerProps}
          />
        }
      />

      <Route path='/notes/:noteId' render={
        (routerProps) =>
          <NotesPage
            notes={dummyData}
            routerProps = {routerProps}
          />
        }
      />





    </div>
    </div>
  );
  }
}

export default App;
