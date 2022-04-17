import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'
import { Navbar, Nav, Container } from 'reactstrap';
import Entry from './components/Entry';
import Homepage from './components/Homepage';
import AddAsset from './components/AddAsset';
import ModifyAsset from './components/ModifyAsset';
import NavigationBar from './components/NavigationBar';

const App: React.FC = () => {

  const loggedIn: boolean = useSelector((state: AppState) => state.loggedIn);

  return (
    <Router>
      <header>
        { loggedIn && <NavigationBar /> }
      </header>
    
      <Routes>
        <Route path="/" element={<Entry />}/>
        <Route path="/home" element={<Homepage/>}/>
        <Route path="/add-asset" element={<AddAsset/>}/>
        <Route path="/modify-asset" element={<ModifyAsset/>}/>
      </Routes>
    </Router>
  );
}

export default App;
