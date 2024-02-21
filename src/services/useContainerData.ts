
import { ContainerData, ContainerResponse } from "src/types/container";
import { containerApi } from "./api";
import { useQueries } from "@tanstack/react-query";

export const containerQueryService = ({
  fetch: async (): Promise<Array<ContainerData>> => {
    try {
      const containers = await containerApi.listContainers({});
      return containers.results;
    } catch (error) {
      throw new Error(
        JSON.stringify({
          message: "Something happened while fetching container",
          error
        })
      )
    }
  },
})

export const useContainerData = (): {
  containers: Array<ContainerData>
} => {
  const queryResults = useQueries({
    queries: [{ queryFn: async () => await containerQueryService.fetch() }],
  });

  const containers = queryResults.map(query => query.data) as unknown as Array<ContainerData>;

  return {
    containers
  };
};




