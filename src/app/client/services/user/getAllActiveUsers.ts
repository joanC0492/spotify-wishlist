import { ListUsersPaginated } from "@/types/client/user";


export const getAllActiveUsers = async () => {
  try {
    const url = `${process.env.HOST_API}/api/user?limit=10&offset=0`;
    const resAllUsers = await fetch(url);
    const dataAllUsers: ListUsersPaginated = await resAllUsers.json();
    return dataAllUsers.data.users;
  } catch (error) {
    if (error instanceof Error) console.log(error.message);
    return [];
  }
};
