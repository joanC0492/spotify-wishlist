// import { User } from "./user.interface";
// import { HttpStatusCode } from "..";

export interface UserResponse {
  uid: string;
  name: string;
}

export type ResponseCreateUser = {
  // status: HttpStatusCode;
  ok: true;
  msg: string;
  data: UserResponse | null;
};

export type DataResListUsers = {
  total: number;
  users: Array<unknown>;
};
export type ResponseListUsers = {
  ok: true;
  msg: string;
  data: DataResListUsers | null;
};
