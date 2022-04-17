import React from "react";
import { useSelector } from "react-redux";
import { DataGrid, GridColDef } from '@mui/x-data-grid';


const DataTable: React.FC = () => {

  const stocks: [] = useSelector((state: AppState) => state.stocks);
  const crypto: [] = useSelector((state: AppState) => state.crypto);
  const nfts: [] = useSelector((state: AppState) => state.nfts);

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'Asset ID', width: 100 },
    { field: 'name', headerName: 'Name', width: 100 },
    { field: 'amountSpent', headerName: 'Amount Spent', width: 130 },
    { field: 'currentWorth', headerName: 'Current Worth', width: 130 }
  ];

  return(
    <div>
      <div style={{ height: 400, width: '100%', display: "flex" }}>
        <DataGrid
            rows={stocks}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            style={{backgroundColor: "#2F4F4F", color: "white", borderWidth: "thick", margin: "15px"}}
        />
        <DataGrid
            rows={crypto}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            style={{backgroundColor: "#6495ED", color: "white", borderWidth: "thick", margin: "15px"}}
        />
        <DataGrid
            rows={nfts}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            style={{backgroundColor: "#483D8B", color: "white", borderWidth: "thick", margin: "15px"}}
        />
    </div>
    </div>
  )
}

export default DataTable;