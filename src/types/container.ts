

export type ContainerData = {
  uid: number;
  name: string;
  origin: string;
  destination: string;
  contents: Array<string>;
  priority: number;
  arrivalTime: number;
  status: string;
}

export type ContainerResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Array<ContainerData>
}
