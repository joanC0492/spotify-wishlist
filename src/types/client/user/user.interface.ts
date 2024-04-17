export interface ListUsersPaginated {
  msg: string;
  ok: boolean;
  data: Data;
}

export interface Data {
  total: number;
  users: User[];
}

export interface User {
  uid: string;
  name: string;
  image: string;
  state: boolean;
  instrument: string[];
  createdAt?: Date;
  updatedAt?: Date;
}