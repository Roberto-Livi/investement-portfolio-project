import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutEffect } from '../store/effects';
import DataTable from './DataTable';

const Homepage: React.FC = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const username: string = useSelector((state: AppState) => state.username);
  const liquidity: number | null = useSelector((state: AppState) => state.liquidity);

  const logout = () => {
    dispatch(logoutEffect());
    navigate("/");
  }
  
  return (
    <div>
      <button style={{float: "right"}} type="button" onClick={() => logout()}>Logout</button>
      <h1 style={{textAlign: "center"}}>{username}</h1>
      <h1 >Liquidity: {liquidity}</h1>
      <DataTable />
    </div>
  );
}

export default Homepage;

