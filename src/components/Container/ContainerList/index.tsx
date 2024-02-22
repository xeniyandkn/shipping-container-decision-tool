import { ContainerData } from 'src/types';
import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

import { DataGrid, GridColDef, GridToolbar } from '@mui/x-data-grid';
import { StyledDataGrid } from '@/styles/StyledDataGrid';
import { FormControlLabel, FormGroup, Switch, Typography } from '@mui/material';
import { useDemoData } from '@mui/x-data-grid-generator';
interface Data {
  id: string;
  origin: string;
  priority: number;
  name: string;
  destination: string;
  contents: Array<string>;
  arrivalTime: number;
  status: string;
  action: string;
}

export const ContainerList = ({ containers }: {
  containers: Array<ContainerData>
}) => {
  const [checkedPriority, setCheckedPriority] = React.useState(true);

  const  createData = (
    id: string,
    name: string,
    priority: number,
    origin: string,
    destination: string,
    contents: Array<string>,
    arrivalTime: number,
    status: string,
    action: string,
  ): Data => {
    return {
      id,
      name,
      priority,
      origin,
      destination,
      contents,
      arrivalTime,
      status,
      action,
    };
  }

  const unixTimeToDate = (unixTime: number): any =>{
    return new Date(unixTime * 1000);
}

  const rows = containers.map(container=> (
    createData(container.uid, 
      container.name, 
      container.priority,
       container.origin, 
       container.destination, 
       container.contents,
       unixTimeToDate(container.arrivalTime),
       container.status,
       'Send report / Download',
       )
  ));

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'name', headerName: ' Name', width: 200 },
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

  const demoData = {
    rows: rows,
    columns: columns
  }

  const { data } = useDemoData({
    dataSet: 'Commodity',
    rowLength: 100,
  });

  const handleChangePriority = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckedPriority(event.target.checked);
  };
  
  const gridProps = {
    initialState: {
      pagination: {
        paginationModel: { page: 0, pageSize: 5 },
      },
    },
    pageSizeOptions: [5, 10, 15],
    checkboxSelection: true,
    slots: { toolbar: GridToolbar }
  };

  const getRenderedComponent = () => {
      if (checkedPriority) {
        return (<StyledDataGrid
          {...demoData}
          {...gridProps}
          getRowClassName={(params) => `super-app-theme--${params.row.status}`}
        />)
      } else {
        return (
          <DataGrid
          {...demoData}
          {...gridProps}
          slots={{ toolbar: GridToolbar }}
        />
        )
      }
  }

  return (
    <Box sx={{ width: '100%', display: 'flex', justifyContent: "center", marginTop: "5rem" }}>
      <Paper sx={{ width: '90%', mb: 2 }}>
        <Typography variant="h3" gutterBottom>
        Shipping Container Yard
        </Typography>
        {getRenderedComponent()}
        <FormGroup>
          <FormControlLabel control={
            <Switch   
              checked={checkedPriority}
              onChange={handleChangePriority}
              inputProps={{ 'aria-label': 'controlled' }} />} label="Highlight Important Contents" />
        </FormGroup>
      </Paper>
    </Box>
  )
}

export default ContainerList;
