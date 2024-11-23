import { generateUniqueId } from "@/app/lib";
import prisma from "@/app/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
  const data = await request.json();
  const { longUrl } = data;

  if (!longUrl) {
    return NextResponse.json(
      { error: "Long URL is required" },
      { status: 400 }
    );
  }

  // Check if the long URL already exists in the database
  const existingUrl = await prisma.shorturl.findUnique({
    where: {
      longUrl,
    },
  });

  if (existingUrl) {
    return NextResponse.json({
      longUrl: existingUrl.longUrl,
      shortUrl: existingUrl.uniqueId,
    });
  }

  // Save the long URL to the database
  const newUrl = await prisma.shorturl.create({
    data: {
      longUrl,
      uniqueId: generateUniqueId(),
    },
  });
  return NextResponse.json(newUrl);
};
