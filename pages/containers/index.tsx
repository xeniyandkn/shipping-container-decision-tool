
import {
  Box
} from "@mui/material";
import {useEffect, useState } from "react";
import ContainerList from 'src/components/Container/ContainerList';
import { ContainerData } from 'src/types'
import { containerQueryService, useContainerData } from "src/services/useContainerData";

 function ContainerHome() {
  const [containers, setContainers] = useState<Array<ContainerData>>([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { containers } = await useContainerData();
        setContainers(containers);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching container data:', error);
        // Handle error state
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures the effect runs only once

    // Render loading state if data is still being fetched
    if (loading) {
      return <div>Loading...</div>;
    }
  return (
    <Box>
        <ContainerList containers={containers} />
    </Box>
  );
}

export const getServerSideProps = async () => {
  const response = await containerQueryService.fetch();
  return {
    props: {
      initialResponse: response
    }
  };
}

export default ContainerHome;
