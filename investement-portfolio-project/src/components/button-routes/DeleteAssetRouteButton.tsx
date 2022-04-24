import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';


const DeleteAssetRouteButton: React.FC = () => {

  const navigate = useNavigate();

  const deleteAssetPage = () => {
    navigate("/delete-asset");
  }

  return (
    <Button className="button-red" onClick={() => deleteAssetPage()}>Delete an Asset</Button>
  );
}

export default DeleteAssetRouteButton;

const Button = styled.button`
  float: right;
`;