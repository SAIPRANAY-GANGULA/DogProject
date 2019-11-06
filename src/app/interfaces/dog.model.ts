export interface Dog {
  message: string;
  name?:string;
  description?:string;
  breed?:string;
  id?:number;
}

export const enum DogApiStatus {
  success = 'success'
}

export interface DogApiResponse {
  message: string;
  status: DogApiStatus;
}
