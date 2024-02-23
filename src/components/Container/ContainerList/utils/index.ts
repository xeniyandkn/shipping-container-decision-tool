import { GridColDef, GridToolbar } from "@mui/x-data-grid";

export const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'name', headerName: ' Name', width: 100 },
    { field: 'priority', headerName: 'Priority', width: 100 },
    {
      field: 'origin',
      headerName: 'Origin',
      width: 200,
    },
    {
      field: 'destination',
      headerName: 'Destination',
      width: 200,
    },
    {
      field: 'contents',
      headerName: 'Contents',
      width: 200,
      sortable: false,
    },
    {
      field: 'arrivalTime',
      headerName: 'Time of Arrival',
      width: 300,
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 100,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 200,
    },
  ];

  export  const gridProps = {
    initialState: {
      pagination: {
        paginationModel: { page: 0, pageSize: 5 },
      },
    },
    pageSizeOptions: [5, 10, 15],
    checkboxSelection: true,
    slots: { toolbar: GridToolbar}
  };