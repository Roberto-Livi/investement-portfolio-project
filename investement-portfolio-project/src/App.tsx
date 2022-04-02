import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'
import { Collapse, Navbar, NavbarBrand, Nav } from 'reactstrap';
import Entry from './components/Entry';
import Homepage from './components/Homepage';
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { addUser, changePassword } from './store/actions';

const App: React.FC = () => {

  const dispatch: Dispatch<any> = useDispatch();

  const saveUser = React.useCallback(
    (loggedIn: boolean, userInfo: IUser) => dispatch(addUser(loggedIn, userInfo)),
    [dispatch]
  );

  const savePassword = React.useCallback(
    (id: number, newPassword: string) => dispatch(changePassword(id, newPassword)),
    [dispatch]
  );

  return (
    <Router>
      <Navbar expand="md">
        {/* <NavbarBrand tag={Entry} to"/">
          <img src={} alt="Logo" /><strong>IPP</strong>
        </NavbarBrand> */}
        <Nav className="mr-auto" navbar>
          <NavLink to="/home">Home</NavLink>
        </Nav>
      </Navbar>
      <Routes>
        <Route path="/" element={<Entry saveUser={saveUser} />}/>
        <Route path="/home" element={<Homepage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
