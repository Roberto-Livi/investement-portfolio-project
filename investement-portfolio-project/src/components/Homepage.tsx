import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import DataTable from './DataTable';
import styled from 'styled-components';
import ModifyAssetRouteButton from './button-routes/ModifyAssetRouteButton';
import DeleteAssetRouteButton from './button-routes/DeleteAssetRouteButton';
import AddAssetRouteButton from './button-routes/AddAssetRouteButton';
import { useNavigate } from 'react-router-dom';

const Homepage: React.FC = () => {

  const username: string = useSelector((state: AppState) => state.username);
  const liquidity: number | null = useSelector((state: AppState) => state.liquidity);
  const loggedIn: boolean = useSelector((state: AppState) => state.loggedIn);
  const navigate = useNavigate();

  useEffect(() => {
    if(!loggedIn){
      navigate("/")
    }
  })
  
  return (
    <div>
      <LiquidityHeader>Liquidity: {liquidity}</LiquidityHeader>
      <h1 >{username}</h1>
      <ModifyAssetRouteButton />
      <AddAssetRouteButton />
      <DeleteAssetRouteButton />
      <DataTable />
    </div>
  );
}

export default Homepage;

const LiquidityHeader = styled.h1`
  font-weight: 600;
  color: #4B0082;
  font-size: 2.2em;
  text-align: center;
  font-size: 60px;
`;


