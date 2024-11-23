import prisma from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export const GET = async () => {
  const data = await prisma.shorturl.findMany();
  return NextResponse.json(data);
};
