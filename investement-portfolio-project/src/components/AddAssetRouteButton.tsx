import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const AddAssetRouteButton: React.FC = () => {

  const navigate = useNavigate();

  const addAssetPage = () => {
    navigate("/add-asset");
  }

  return (
    <Button className="button-78" onClick={() => addAssetPage()}>Add an Asset</Button>
  );
}

export default AddAssetRouteButton;

const Button = styled.button`
  position: relative;
  left: 32vw;
`;