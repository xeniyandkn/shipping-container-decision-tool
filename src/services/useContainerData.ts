
import { ContainerData } from "src/types/container";
import { containerApi } from "./api";

export const containerQueryService = ({
  fetch:  async (): Promise<Array<ContainerData>> => {
    try {
      const containers = await containerApi.listContainers();
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

export const useContainerData =  async (): Promise<{
  containers: Array<ContainerData>;
}> => {
  const queryResults = await  containerQueryService.fetch();
  return {
    containers: queryResults
  };
};




