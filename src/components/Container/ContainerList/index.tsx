import { ContainerData } from 'src/types';
import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { DataGrid } from '@mui/x-data-grid';
import { StyledDataGrid } from '@/styles/StyledDataGrid';
import { FormControlLabel, FormGroup, Switch, Typography } from '@mui/material';
import { useDemoData } from '@mui/x-data-grid-generator';
import { columns, gridProps } from './utils';
import styled from 'styled-components';
interface Data {
  id: string;
  origin: string;
  priority: number;
  name: string;
  destination: string;
  contents: Array<string>;
  arrivalTime: Date;
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
    arrivalTime: Date,
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

  const rows = containers.map(container=> (
    createData(container.uid, 
      container.name, 
      container.priority,
       container.origin, 
       container.destination, 
       container.contents,
       new Date(container.arrivalTime * 1000),
       container.status,
       'Send report / Download',
       )
  ));

  const demoData = {
    rows: rows,
    columns: columns
  }
  


  const { data } = useDemoData({
    dataSet: 'Commodity',
    rowLength: 100,
  });

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
        />
        )
      }
  }

  return (
    <StyledBox>
      <Paper sx={{ width: '90%', mb: 2 }}>
        <Typography variant="h3" gutterBottom>
          Shipping Container Yard
        </Typography>
        {getRenderedComponent()}
        <FormGroup>
          <FormControlLabel control={
            <Switch   
              checked={checkedPriority}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setCheckedPriority(event.target.checked)}}
              inputProps={{ 'aria-label': 'controlled' }} />} label="Highlight Important Contents" />
        </FormGroup>
      </Paper>
    </StyledBox>
  )
}

export default ContainerList;


const StyledBox = styled(Box)`
  width: 100%; 
  display: flex;
  justify-content: center;
  margin-top: 5rem;
`;
