import React from 'react';
import { useSelector } from 'react-redux';
import DataTable from './DataTable';
import styled from 'styled-components';
import ModifyAssetRouteButton from './ModifyAssetRouteButton';
import DeleteAssetRouteButton from './DeleteAssetRouteButton';
import AddAssetRouteButton from './AddAssetRouteButton';

const Homepage: React.FC = () => {

  const username: string = useSelector((state: AppState) => state.username);
  const liquidity: number | null = useSelector((state: AppState) => state.liquidity);
  
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


