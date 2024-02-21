
import {
  Box,
} from "@mui/material";
import { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import { useQueryClient } from '@tanstack/react-query';
import ContainerList from 'src/components/Container/ContainerList';
import { ContainerResponse } from 'src/types'
import styles from "./Container.module.css";
import { containerQueryService, useContainerData } from "src/services/useContainerData";

function ContainerHome({ initialResponse }: {
  initialResponse: ContainerResponse
}) {
  const { containers } = useContainerData();
  const queryClient = useQueryClient();

  console.log("containers", containers);
  

  useEffect(() => {
    queryClient.setQueryData(['containers', { page: 1 }], initialResponse);
  }, [initialResponse]);

  return (
    <Box className={styles.container}>
   

        <ContainerList containers={containers} />
    </Box>
  );
}

ContainerHome.propTypes = {
  initialResponse: PropTypes.shape({
    count: PropTypes.number.isRequired,
    next: PropTypes.string,
    previous: PropTypes.string,
    results: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        url: PropTypes.string,
      })
    )
  })
};

export const getServerSideProps = async () => {
  const response = await containerQueryService.fetch();
  console.log("response", response);
  
  return {
    props: {
      initialResponse: response
    }
  };
}

export default ContainerHome;
