import React from 'react';
import { useNavigate } from 'react-router-dom';

const Homepage: React.FC = () => {

  const navigate = useNavigate();

  const logout = () => {
    console.log('logout')
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