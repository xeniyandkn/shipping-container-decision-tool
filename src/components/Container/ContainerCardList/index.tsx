import PropTypes from 'prop-types';
import { Box } from '@mui/material';

import { CardPropTypes, ContainerCard } from 'src/components/Container/ContainerCard';
import { ContainerData } from 'src/types'

export const ContainerCardList = ({ containers }: {
  containers: Array<ContainerData>
}) => {

  console.log("containers", containers);
  
  return (
    <Box sx={{ display: "flex", flexWrap: "wrap", overflow: "hidden" }}>
      { !!containers?.length && containers.map((container)=>(
        <ContainerCard container={container}/>
      ))
      }
    </Box>
  )
}

ContainerCardList.propTypes = {
  containers: PropTypes.arrayOf(
    PropTypes.shape(CardPropTypes)
  )
};

export default ContainerCardList;
