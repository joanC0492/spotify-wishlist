import { NextResponse } from "next/server";
import { dbConnection } from "@/app/server/database";
import { UserModel } from "@/app/server/models";
import { User, UserResponse } from "@/types/server/user";

export const POST = async (request: Request) => {
  let msg: string = "signup",
    ok: boolean = true,
    data: UserResponse | null = null,
    status: number = 201;

  try {
    const { name, image, state, instrument }: User = await request.json();
    await dbConnection();
    const userDoc = new UserModel({ name, image, state, instrument });
    await userDoc.save();
    data = { uid: userDoc.uid as string, name: userDoc.name as string };
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
