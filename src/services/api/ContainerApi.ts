import BaseAPI from "./BaseApi";
import { ContainerResponse, ContainerData } from "src/types";
import containers from "containers.json";
export type listContainersRequestParams = {
}

export type FetchSingleContainerProps = {
  containerName: string
}

class ContainerApi extends BaseAPI {
  public listContainers = async (queryParams: listContainersRequestParams): Promise<ContainerResponse> => {
    // const response = await this.request({
    //   method: 'GET',
    //   path: '/containers',
    //   query: queryParams
    // });
    return containers;
    // return response.json();
  }
}

export default ContainerApi;