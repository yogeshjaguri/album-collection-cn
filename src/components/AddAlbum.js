import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Form, Button } from 'react-bootstrap';
import Navbar from './Header';

const AddAlbum = (props) => {
  const getAlbumFormData = () => {
    const userId = document.getElementById('aaform-userid-inp').value;
    const title = document.getElementById('aaform-title-inp').value;
    props.addAlbumToList(Number(userId), title);
  }

  return (
    <>
 
      <Container className='shadow p-5'>
        <div className='addalbum-form'>
          <h4>Enter New Album Details</h4>
          <Form>
            <Form.Group controlId="aaform-userid-inp">
              <Form.Label>Enter User Id:</Form.Label>
              <Form.Control type="number" placeholder="Enter User Id" />
            </Form.Group>
            <Form.Group controlId="aaform-title-inp">
              <Form.Label>Enter Album Title:</Form.Label>
              <Form.Control type="text" placeholder="Enter Album Title" />
            </Form.Group>
            <Link to='/'>
            <Button className='mt-3' variant="primary" onClick={getAlbumFormData}>Add To List</Button>
            </Link>
          </Form>
        </div>
      </Container>
    </>
  );
}

export default AddAlbum;
