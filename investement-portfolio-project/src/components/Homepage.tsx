import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import DataTable from './DataTable';
import styled from 'styled-components';
import LogoutButton from './LogoutButton';

const Homepage: React.FC = () => {

  const navigate = useNavigate();

  const username: string = useSelector((state: AppState) => state.username);
  const liquidity: number | null = useSelector((state: AppState) => state.liquidity);

  const modifyAsset = () => {
    navigate("/modify-asset");
  }
  
  return (
    <div>
      <LogoutButton/>
      <UsernameHeader style={{textAlign: "center"}}>{username}</UsernameHeader>
      <h1 >Liquidity: {liquidity}</h1>
      <button type="button" onClick={() => modifyAsset()}>Modify Asset</button>
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

