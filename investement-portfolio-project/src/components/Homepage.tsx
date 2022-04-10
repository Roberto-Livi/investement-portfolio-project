import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutEffect } from '../store/effects';

const Homepage: React.FC = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(logoutEffect());
    navigate("/");
  }
  
  return (
    <div>
      <button style={{float: "right"}} type="button" onClick={() => logout()}>Logout</button>
      <h1>Home</h1>
    </div>
  );
}

export default Homepage;