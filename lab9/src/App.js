
import './App.css';
import React from 'react';
// import Header from './components/header';
import Read from './components/read';
import Create from './components/create';
import Edit from './components/edit';
import Delete from './components/delete';

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/esm/Container';
import Nav from 'react-bootstrap/esm/Nav';
import Navbar from 'react-bootstrap/esm/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';




//nav link estabishes routing to linked components 
function App() {
  return (
    <BrowserRouter>
      <>
        <Navbar className='navbar'>
          <Container>
            <Navbar.Brand >NavBarLab9</Navbar.Brand>
            <Nav className="me-auto">
              {/* href links to a defined route */}
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/read">Read</Nav.Link>
              <Nav.Link href="/create">Create</Nav.Link>
            </Nav>
          </Container>
        </Navbar>


        <div className="App">
          <Routes>
            {/* router path definition  */}
            <Route path="/read" element={<Read />}></Route>
            <Route path="/create" element={<Create />}></Route>
            <Route path="/edit/:id" element={<Edit />}></Route>
            <Route path="/delete/:id" element={<Delete />}></Route>
            <Route path="/" element={<h1>Welcome to Home</h1>} />
          </Routes>
        </div>

      </>
    </BrowserRouter>
  );
}

export default App;
