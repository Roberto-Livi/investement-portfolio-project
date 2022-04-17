import React from 'react';
import { useSelector } from 'react-redux';
import DataTable from './DataTable';
import styled from 'styled-components';
import LogoutButton from './LogoutButton';
import ModifyAssetRouteButton from './ModifyAssetRouteButton';

const Homepage: React.FC = () => {

  const username: string = useSelector((state: AppState) => state.username);
  const liquidity: number | null = useSelector((state: AppState) => state.liquidity);
  
  return (
    <div>
      <LogoutButton/>
      <UsernameHeader style={{textAlign: "center"}}>{username}</UsernameHeader>
      <h1 >Liquidity: {liquidity}</h1>
      <ModifyAssetRouteButton />
      <DataTable />
    </div>
  );
}

export default Homepage;

const UsernameHeader = styled.h1`
  font-weight: 600;
  color: #8A2BE2;
  font-size: 2.2em;
  text-align: center;
  font-size: 60px;
`;

