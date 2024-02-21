import PropTypes from 'prop-types';
import { useCallback, useState, useEffect } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';

import {
  ContainerListItem,
  ContainerListItemProps,
} from 'src/components/Container/ContainerListItem';
import { ContainerData } from 'src/types';

export const ContainerList = ({ containers }: {
  containers: Array<ContainerData>
}) => {
  const [tableRows, setTableRows] = useState<Array<ContainerListItemProps>>([]);


  // const getDataTableRows = useCallback(() => (
  //   containers?.map(({
  //     name,
  //     uid,
  //     origin,
  //     destination
  //   }) => ({
  //     name,
  //     uid,
  //     origin,
  //     destination
  //   })) || []
  // ), [containers]);

  // useEffect(() => {
  //   setTableRows(getDataTableRows());
  // }, [getDataTableRows])

  console.log('containers', containers);
  

  return (
    <TableContainer>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead sx={{ background: "#EEE" }}>
          <TableRow>
            <TableCell>uid</TableCell>
            <TableCell align="right">name</TableCell>
            <TableCell align="right">origin</TableCell>
            <TableCell align="right">destination</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {containers[0].map(container=> (
          <ContainerListItem uid={container.uid} name={container.name} origin={container.origin} destination={container.destination}/>

          ))}
        </TableBody>
      </Table>
    </TableContainer>
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
