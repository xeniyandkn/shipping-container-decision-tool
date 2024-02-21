import {
  Box,
  Typography,
} from "@mui/material";
import PropTypes from 'prop-types';
import {
  ContainerData as CardProps, ContainerData,
} from 'src/types';

export const ContainerCard = ({
  name,
  uid,
  origin,
  destination
}: ContainerData) => {



  return (
    <Box
      role="contentinfo"
      sx={{
        flex: "1 0 20%",
        minHeight: "300px",
        maxHeight: "300px",
        margin: "5px",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        border: "1px solid black",
        backgroundColor: "#EEE",
        overflowY: "scroll",
      }}
    >
        <Typography sx={{ fontSize: "20px", fontWeight: 600 }}>
          {name}
        </Typography>
        <Typography>ID: {uid}</Typography>
        <Typography>Origin: {origin}</Typography>
        <Typography>Destination: {destination}</Typography>
    </Box>
  )
}

export const CardPropTypes = {
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
 
};

ContainerCard.propTypes = CardPropTypes;
