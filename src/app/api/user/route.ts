import { NextResponse } from "next/server";
import { dbConnection } from "@/app/server/database";
import { UserModel } from "@/app/server/models";
import { DataResListUsers } from "@/types/server/user";

export const GET = async (request: Request) => {
  let msg: string = "ListUsersPaginated",
    ok: boolean = true,
    data: DataResListUsers | null = null,
    status: number = 200;

  const url = new URL(request.url),
    limit = Number(url.searchParams.get("limit")) || 5,
    offset = Number(url.searchParams.get("offset")) || 0,
    queryUsersValid = { state: true };
  try {
    const connection = await dbConnection();
    console.log({ connection });
    const [users, totalUsers] = await Promise.all([
      UserModel.find(queryUsersValid).limit(limit).skip(offset),
      UserModel.countDocuments(queryUsersValid),
    ]);

    data = {
      total: totalUsers,
      users,
    };
  } catch (error) {
    msg = "Error: ";
    if (error instanceof Error) msg += error.message;
    ok = false;
    status = 500;
    data = null;
  } finally {
    return NextResponse.json(
      {
        msg,
        ok,
        data,
      },
      { status }
    );
  }
};
