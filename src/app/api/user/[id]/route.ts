import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

interface Route {
  params: {
    id: string;
  };
}
export const GET = (request: Request, { params }: Route) => {
  // const asd = request.query as string;
  // console.log(res);
  // const asd = res.params;
  console.log(request);
  const url = new URL(request.url);
  console.log(url);
  // const skip = url.searchParams.get("skip");
  return NextResponse.json({
    msg: "Te mostrare el ID",
    method: "POST",
  });
};
