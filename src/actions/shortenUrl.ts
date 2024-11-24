"use server";

import { baseUrl, generateUniqueId } from "@/app/lib";
import prisma from "@/app/lib/prisma";
import { revalidatePath } from "next/cache";

export const shortenUrl = async (longUrl: string) => {
  if (!longUrl) {
    return "Long URL is required";
  }

  try {
    const existingUrl = await prisma.shorturl.findUnique({
      where: {
        longUrl,
      },
    });

    if (existingUrl) {
      return {
        longUrl: existingUrl.longUrl,
        uniqueId: existingUrl.uniqueId,
      };
    }

    console.log(baseUrl);

    const newUrl = await prisma.shorturl.create({
      data: {
        longUrl,
        uniqueId: generateUniqueId(),
      },
    });

    revalidatePath("/");
    return newUrl;
  } catch (error) {
    return `Failed to shorten URL ${error}`;
  }
};
