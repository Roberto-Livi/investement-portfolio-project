import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'
import { Navbar, Nav, Container } from 'reactstrap';
import Entry from './components/Entry';
import Homepage from './components/Homepage';

const App: React.FC = () => {

  const loggedIn: boolean = useSelector((state: AppState) => state.loggedIn);

  return (
    <Router>
      <header>
        <Navbar sticky='top' expand='lg'>
          <Container>
          { loggedIn && <Nav>
             <NavLink to="/home">Home</NavLink> 
              <NavLink to="/">???</NavLink>   
            </Nav>}
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
