import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify'; // Import toast notifications
import 'react-toastify/dist/ReactToastify.css'; // Import toast notification styles
import AddAlbum from './components/AddAlbum';
import AlbumsList from './components/AlbumsList';
import UpdateAlbum from './components/UpdateAlbum';
import Header from './components/Header';

export default class App extends Component {
  constructor() {
    super();
    // Initialize state with empty albums list and updateAlbum object
    this.state = {
      albums: [],
      updateAlbum: {}
    };
  }

  componentDidMount = async () => {
    // Fetch albums data from an external API when component mounts
    const albums = await fetch('https://jsonplaceholder.typicode.com/albums')
      .then((response) => response.json());
    // Update state with fetched albums
    this.setState({ albums });
  }

  // Delete an album from the list
  deleteAlbum = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/albums/${id}`, { method: 'DELETE' });
    // Filter out the deleted album from the state
    const newAlbums = this.state.albums.filter((album) => album.id !== id);
    // Display success toast notification
    toast.success("Your Album Deleted successfully");
    // Update state with new albums list
    this.setState({ albums: newAlbums });
  }

  // Set the album to be updated
  setUpdateAlbum = (album) => {
    this.setState({ updateAlbum: album });
  }

  // Update an album in the list
  updateAlbum = async (id, updateTitle, updateUserid, oldAlbum) => {
    const albums = this.state.albums;
    const index = albums.indexOf(oldAlbum);
    let updatedAlbum = [];
    if (id < 100) {
      updatedAlbum = await fetch(`https://jsonplaceholder.typicode.com/albums/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ userId: updateUserid, id: id, title: updateTitle }),
        headers: { 'Content-type': 'application/json; charset=UTF-8' },
      }).then((response) => response.json());
    } else {
      updatedAlbum = { userId: updateUserid, id: id, title: updateTitle };
    }
    // Replace the old album with the updated one
    albums[index] = updatedAlbum;
    // Update state with new albums list
    this.setState({ albums });
    // Display success toast notification
    toast.success("Update Successfully done");
  }

  // Add a new album to the list
  addAlbum = (userId, title) => {
    fetch('https://jsonplaceholder.typicode.com/albums', {
      method: 'POST',
      body: JSON.stringify({ userId: userId, id: this.state.albums.length + 1, title: title }),
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
    }).then((response) => response.json());
    const album = { userId: userId, id: this.state.albums.length + 1, title: title };
    // Add the new album to the beginning of the albums list
    this.setState({ albums: [album, ...this.state.albums] });
    // Display success toast notification
    toast.success("New Album added successfully in the bottom");
  }

  render() {
    return (
      <>
        <Header /> {/* Header component */}
        <ToastContainer /> {/* Container for toast notifications */}
        <Routes>
          {/* Route for displaying the list of albums */}
          <Route path='/' element={<AlbumsList albums={this.state.albums} setUpdateAlbum={this.setUpdateAlbum} deleteAlbumFromList={this.deleteAlbum} />} />
          {/* Route for adding a new album */}
          <Route path='/add-album' element={<AddAlbum addAlbumToList={this.addAlbum} />} />
          {/* Route for updating an existing album */}
          <Route path='/update-album' element={<UpdateAlbum album={this.state.updateAlbum} updateAlbumInList={this.updateAlbum} />} />
        </Routes>
      </>
    );
  }
}
