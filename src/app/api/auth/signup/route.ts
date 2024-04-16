import { NextResponse } from "next/server";
import { dbConnection } from "@/app/server/database";
import { UserModel } from "@/app/server/models/user";
import { User, UserResponse } from "@/types/user";

export const POST = async (request: Request) => {
  let msg: string = "",
    ok: boolean = true,
    data: UserResponse | null = null,
    status: number = 201;

  try {
    const { name, image, state, instrument }: User = await request.json();
    const connection = await dbConnection();
    console.log(connection);
    const userDoc = new UserModel({ name, image, state, instrument });
    await userDoc.save();
    msg += "signup";
    data = {
      uid: userDoc.uid as string,
      name: userDoc.name as string,
    };
  } catch (err) {
    msg = "Error: ";
    if (err instanceof Error) msg += err.message;
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
