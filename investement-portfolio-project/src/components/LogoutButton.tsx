import React from 'react';
import { useDispatch } from 'react-redux';
import { logoutEffect } from '../store/effects';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const LogoutButton: React.FC = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = () => {
    dispatch(logoutEffect());
    navigate("/");
  }

  return (
    <Button className="button-logout" onClick={() => logout()}>Logout</Button>
  );
}

export default LogoutButton;

const Button = styled.button`
  float: right;
`;