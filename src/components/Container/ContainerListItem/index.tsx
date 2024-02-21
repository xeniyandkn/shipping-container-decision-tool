import PropTypes from 'prop-types'
import { TableCell, TableRow } from '@mui/material';

export type ContainerListItemProps = {
  name: string;
  uid:  number;
  origin: string;
  destination: string;

}

export const ContainerListItem = ({
  name,
  uid,
  origin,
  destination,
}: ContainerListItemProps) => {
  return (
    <TableRow
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell component="th" scope="row">{uid}</TableCell>
      <TableCell align="right">{name}</TableCell>
      <TableCell align="right">{origin}</TableCell>
      <TableCell align="right">{destination}</TableCell>

    </TableRow>
  )
}

export const ListItemProps = {
  name: PropTypes.string,
  uid: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  origin: PropTypes.oneOfType([
    PropTypes.string,
  ]),
  destination: PropTypes.oneOfType([
    PropTypes.string,
  ]),
};

ContainerListItem.propTypes = ListItemProps;
