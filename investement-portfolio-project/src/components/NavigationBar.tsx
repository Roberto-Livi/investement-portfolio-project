import * as React from 'react'
import { useDispatch } from 'react-redux';
import { logoutEffect } from '../store/effects';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';


const NavigationBar: React.FC = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const navigation = {
    links: [
        { name: "Home", to: "/home" },
        { name: "Add Asset", to: "/add-asset" },
        { name: "Modify Asset", to: "/modify-asset" }
    ]
  }

  const logout = () => {
    dispatch(logoutEffect());
    navigate("/");
  }

  const NavLinks: any = () => navigation.links.map((link: { name: string, to: string }) => <Li key={link.name} onClick={() => navigate(link.to)}>{link.name}</Li>);

  return (
    <Navbar>
      <Ul>
        <NavLinks />
      </Ul>
      <Logout onClick={() => logout()}>Logout</Logout>
    </Navbar >
  )
}

export default NavigationBar;

const Theme = {
  colors: {
    bg: `#fff`,
    dark: `#24292e`,
    light: `#EEEEEE`,
    red: `#ff5851`,
  }
}

const Navbar = styled.nav`
  background: ${Theme.colors.dark};
  color: ${Theme.colors.light};
  display: flex;
  align-items: center;
  justify-content: space-between;
  li { color: white; text-decoration: none; cursor: pointer }
`;

const Logout = styled.a`
  font-weight: bold;
  font-style: italic;
  margin-left: 1rem;
  padding-right: 1rem;
  cursor: pointer;
`;

const Ul = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
`;

const Li = styled.li`
  flex: 0 0 auto;
  -webkit-box-align: center;
  -webkit-box-pack: center;
  -webkit-tap-highlight-color: transparent;
  align-items: center;
  color: #999;
  height: 100%;
  justify-content: center;
  text-decoration: none;
  -webkit-box-align: center;
  -webkit-box-pack: center;
  -webkit-tap-highlight-color: transparent;
  align-items: center;
  color: #999;
  display: flex;
  font-size: 14px;
  height: 50px;
  line-height: 16px;
  margin: 0 10px ;
  text-decoration: none;
  white-space: nowrap;
`;