import { redirect } from "next/navigation";
import prisma from "../lib/prisma";

const Redirect = async ({ params}: { params: Promise<{ uniqueId: string }>}) => {
  
  const uniqueId = (await params)?.uniqueId;

  const url = await prisma.shorturl.findUnique({
    where: {
      uniqueId,
    },
  });

  if (url) {
    redirect(url.longUrl);
  }
};

export default Redirect;