import { ApiConfiguration } from 'src/types';
import ContainerApi from './ContainerApi';

const configParams: ApiConfiguration = {
  basePath: 'https://example/api/v2'
};

export const containerApi = new ContainerApi(configParams);
