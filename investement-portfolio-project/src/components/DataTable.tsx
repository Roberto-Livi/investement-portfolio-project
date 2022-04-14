import React from "react";
import { useSelector } from "react-redux";
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useNavigate } from "react-router-dom";


const DataTable: React.FC = () => {

  const navigate = useNavigate();

  const stocks: [] = useSelector((state: AppState) => state.stocks);
  const crypto: [] = useSelector((state: AppState) => state.crypto);
  const nfts: [] = useSelector((state: AppState) => state.nfts);
  const allAssets = [...stocks, ...crypto, ...nfts];

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'Asset ID', width: 100 },
    { field: 'name', headerName: 'Name', width: 100 },
    { field: 'amountSpent', headerName: 'Amount Spent', width: 130 },
    { field: 'currentWorth', headerName: 'Current Worth', width: 130 }
  ];

  const modifyAsset = () => {
    navigate("/modify-asset");
  }

  return(
    <div>
      <button type="button" onClick={() => modifyAsset()}>Modify Asset</button>
      <div style={{ height: 400, width: '80%', display: "flex" }}>
        <DataGrid
            rows={stocks}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
        />
        <DataGrid
            rows={crypto}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
        />
        <DataGrid
            rows={nfts}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
        />
    </div>
    </div>
  )
}

export default DataTable;