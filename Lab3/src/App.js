
import './App.css';
import React from 'react';
// import Header from './components/header';
import Read from './components/read';
import Create from './components/create';
import Content from './components/content';



import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//nav link estabishes routing to linked components 
function App() {
  return (
    <BrowserRouter>
      <>
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="/">Lab3</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/content">Content</Nav.Link>
              <Nav.Link href="/read">Read</Nav.Link>
              <Nav.Link href="/create">Create</Nav.Link>
            </Nav>
          </Container>
        </Navbar>


              <div className="App">
        <Routes>
          <Route path="/content" element={<Content />}></Route> 
          <Route path="/read" element={<Read />}></Route> 
          <Route path="/create" element={<Create />}></Route>
          <Route path="/" element={<h1>Welcome to Home</h1>} />
        </Routes>
      </div>

      </>
    </BrowserRouter>
  );
}

export default App;
