import BaseAPI from "./BaseApi";
import { ContainerResponse } from "src/types";
import containers from "containers.json";

class ContainerApi extends BaseAPI {
  public listContainers = async (): Promise<ContainerResponse> => {
    // const response = await this.request({
    //   method: 'GET',
    //   path: '/containers',
    //   query: queryParams
    // });
    return containers;
    // return response.json();
  };
}

export default ContainerApi;
