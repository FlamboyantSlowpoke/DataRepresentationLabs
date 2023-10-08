
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

import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <>
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand as={Link} to="/">Home</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/content">Content</Nav.Link>
              <Nav.Link as={Link} to="/header">Header</Nav.Link>
              <Nav.Link as={Link} to="/footer">Footer</Nav.Link>
            </Nav>
          </Container>
        </Navbar>


              <div className="App">
        <Routes>
          <Route path="/content" element={<Content />} />
          <Route path="/header" element={<Header />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/" element={<h1>Welcome to Home</h1>} />
        </Routes>
      </div>

      </>
    </Router>
  );
}

export default App;
