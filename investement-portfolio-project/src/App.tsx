import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'
import { Navbar, Nav, Container } from 'reactstrap';
import Entry from './components/Entry';
import Homepage from './components/Homepage';

const App: React.FC = () => {

  return (
    <Router>
      <header>
        <Navbar sticky='top' expand='lg'>
          <Container>
             <Nav>
              <NavLink to="/home">Home</NavLink>
              <NavLink to="/">???</NavLink>
            </Nav>
          </Container>
        </Navbar>
      </header>
  
      <Routes>
        <Route path="/" element={<Entry />}/>
        <Route path="/home" element={<Homepage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
