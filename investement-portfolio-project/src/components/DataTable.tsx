import React from "react";
import { useSelector } from "react-redux";
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';


const DataTable: React.FC = () => {
  const stocks: [] = useSelector((state: AppState) => state.stocks);
  const crypto: [] = useSelector((state: AppState) => state.crypto);
  const nfts: [] = useSelector((state: AppState) => state.nfts);

  const columns: GridColDef[] = [
    { field: 'name', headerName: 'Name', width: 70 },
    { field: 'amountSpent', headerName: 'Amount Spent', width: 130 },
    { field: 'currentWorth', headerName: 'Current Worth', width: 130 }
  ];

  return(
      <div style={{ height: 400, width: '100%', display: "flex" }}>
        <DataGrid
            getRowId={(row) => row.internalId}
            rows={stocks}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
        />
        <DataGrid
            getRowId={(row) => row.internalId}
            rows={crypto}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
        />
        <DataGrid
            getRowId={(row) => row.internalId}
            rows={nfts}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
        />
    </div>
  )
}

export default DataTable;