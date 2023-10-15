
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
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <>
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="/">Home</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/content">Content</Nav.Link>
              <Nav.Link href="/header">Header</Nav.Link>
              <Nav.Link as={Link} to="/footer">Footer</Nav.Link>
            </Nav>
          </Container>
        </Navbar>


              <div className="App">
        <Routes>
          <Route path="/content" element={<Content />}></Route> 
          <Route path="/header" element={<Header />}></Route> 
          <Route path="/footer" element={<Footer />}></Route>
          <Route path="/" element={<h1>Welcome to Home</h1>} />
        </Routes>
      </div>

      </>
    </BrowserRouter>
  );
}

export default App;
