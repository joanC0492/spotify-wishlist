import { NextResponse } from "next/server";

export function GET(request: Request) {
  return NextResponse.json({
    msg: "Te mostrare el ID",
    method: "GET",
  });
}

export function POST(request: Request) {
  return NextResponse.json({
    msg: "Te mostrare el ID",
    method: "POST",
  });
}
