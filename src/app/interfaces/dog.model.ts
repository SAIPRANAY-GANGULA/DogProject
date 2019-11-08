export interface Dog {
  message: string;
  name?: string;
  description?: string;
  breed?: string;
  id?: number;
}

export const enum DogApiStatus {
  success = 'success'
}

export interface DogApiResponse {
  message: string;
  status: DogApiStatus;
}

export class DogClass {
  constructor(
    public name: string,
    public description: string,
    public breed: string,
    public id: number,
  ) {}
}
