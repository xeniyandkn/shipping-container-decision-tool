import PropTypes from 'prop-types';
import { ContainerData } from 'src/types';
import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

import { DataGrid, GridColDef } from '@mui/x-data-grid';
interface Data {
  id: number;
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

  function createData(
    id: number,
    name: string,
    priority: number,
    origin: string,
    destination: string,
    contents: Array<string>,
    arrivalTime: number,
    status: string,
    action: string,
  ): Data {
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
  
  return (
    <Box sx={{ width: '100%', display: 'flex', justifyContent: "center", marginTop: "5rem" }}>
      <Paper sx={{ width: '90%', mb: 2 }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
  </Paper>
  </Box>
  )
}

ContainerList.propTypes = {
  containers: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      uid: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
      ]).isRequired,
      origin: PropTypes.oneOfType([
        PropTypes.string,
      ]).isRequired,
      destination: PropTypes.oneOfType([
        PropTypes.string,
      ]).isRequired,
    })
  )
};

export default ContainerList;
