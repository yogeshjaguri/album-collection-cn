import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

const UpdateAlbum = (props) => {
  // State variables to store new title and user ID
  const [newTitle, setNewTitle] = useState('');
  const [newUserId, setNewUserId] = useState('');

  // Function to handle update action
  const getUpdateData = () => {
    // Get new title and user ID from form inputs
    const title = document.getElementById('title-inp').value;
    const userId = document.getElementById('userid-inp').value;
    // Call the updateAlbumInList function from props to update the album
    props.updateAlbumInList(props.album.id, title, userId, props.album);
  }

  return (
    <div className='container shadow p-5'>
      {/* Display current album title */}
      <h4 className="mb-3">Title : {props.album.title}</h4>
      {/* Form input for new title */}
      <Form.Group controlId="title-inp">
        <Form.Control type="text" placeholder="Enter New Title" value={newTitle} onChange={(e) => setNewTitle(e.target.value)} />
      </Form.Group>

      {/* Display current album user ID */}
      <h4 className="mt-3">User Id : {props.album.userId}</h4>
      {/* Form input for new user ID */}
      <Form.Group controlId="userid-inp">
        <Form.Control type="number" placeholder="Enter New User Id" value={newUserId} onChange={(e) => setNewUserId(e.target.value)} />
      </Form.Group>

      {/* Buttons for Save and Cancel actions */}
      <div className="mt-auto d-flex justify-content-between p-5">
        {/* Button to save changes */}
        <Link to='/'>
          <Button variant="primary" onClick={getUpdateData}>Save</Button>
        </Link>
        {/* Button to cancel and go back */}
        <Link to='/'>
          <Button variant="secondary">Cancel</Button>
        </Link>
      </div>      
    </div>
  );
}

export default UpdateAlbum;
