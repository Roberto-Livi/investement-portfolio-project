import React from 'react';
import { useNavigate } from 'react-router-dom';


const ModifyAssetRouteButton: React.FC = () => {

  const navigate = useNavigate();

  const modifyAsset = () => {
    navigate("/modify-asset");
  }

  return (
    <button className="button-78" onClick={() => modifyAsset()}>Modify An Asset</button>
  );
}

export default ModifyAssetRouteButton;
