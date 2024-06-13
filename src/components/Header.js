import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom'

//get button name and path for evaery component
const Header = (props) => {

  return (
    <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">AlbumList</Navbar.Brand>
        </Container>
      </Navbar>
  )
}

export default Header
