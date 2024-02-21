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
  ContainerListItemProps,
} from 'src/components/Container/ContainerListItem';
import { ContainerData } from 'src/types';
import { CardPropTypes } from '../ContainerCard';

export const ContainerList = ({ containers }: {
  containers: Array<ContainerData>
}) => {
  const [tableRows, setTableRows] = useState<Array<ContainerListItemProps>>([]);


  const getDataTableRows = useCallback(() => (
    containers?.map(({
      name,
      uid,
      origin,
      destination
    }) => ({
      name,
      uid,
      origin,
      destination
    })) || []
  ), [containers]);

  useEffect(() => {
    setTableRows(getDataTableRows());
  }, [getDataTableRows])

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
        </TableBody>
      </Table>
    </TableContainer>
  )
}

ContainerList.propTypes = {
  containers: PropTypes.arrayOf(
    PropTypes.shape(CardPropTypes)
  )
};

export default ContainerList;
