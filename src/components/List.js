import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from "react-router-dom";

const List = (props) => {
  return (
    // Card component to display album
    <Card style={{ width: '100%' }} className="h-100 d-flex flex-column shadow">
      <Card.Body className="d-flex flex-column">
        {/* Album title */}
        <Card.Title>{props.album.title}</Card.Title>
        {/* Buttons for update and delete actions */}
        <div className="mt-auto d-flex justify-content-between">
          {/* Button for updating the album */}
          <Button variant="warning" className="mr-2">
            <Link to="/update-album" onClick={() => props.setUpdateAlbum(props.album)} style={{ color: 'white' }}>Update</Link>
          </Button>
          {/* Button for deleting the album */}
          <Button className='delete-btn' variant="danger" onClick={() => props.deleteAlbumFromList(props.album.id)}>Delete</Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default List;
