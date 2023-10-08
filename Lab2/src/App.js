
import './App.css';
import React from 'react';
// import Header from './components/header';
import Header from './components/header';
import Footer from './components/footer';
import Content from './components/content';



import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function App() {
  return (
    <>
     <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#Content">Content</Nav.Link>
            <Nav.Link href="#Header">Header</Nav.Link>
            <Nav.Link href="#Footer">Footer</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    <div className="App">

      {/* //calls on compenents to be displayed */}
      <Header />
      <Content />
      <Footer />
    </div>
    </>
  );
}

export default App;
