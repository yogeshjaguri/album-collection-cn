import React from 'react';
import List from './List';
import Navbar from './Header'; // Assuming this is your custom Navbar component
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AlbumsList = (props) => {
  return (
    <>
      {/* Container for displaying albums */}
      <Container className='shadow p-4 my-4'>
        
        {/* Button to add a new album */}
        <div className='m-3 d-flex justify-content-center'>            
          <Button variant="primary">
            {/* Link to the "Add Album" page */}
            <Link to="/add-album" style={{ color: 'white', textDecoration: 'none' }}>Add New Album</Link>
          </Button>
        </div>

        {/* Displaying albums in a grid */}
        <Row>
          {/* Map through albums and render each album in a column */}
          {props.albums.map((album) => (
            <Col md={3} className="mb-4" key={album.id}>
              {/* List component to display individual album */}
              <List 
                album={album} 
                setUpdateAlbum={props.setUpdateAlbum} 
                deleteAlbumFromList={props.deleteAlbumFromList} 
              />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default AlbumsList;
