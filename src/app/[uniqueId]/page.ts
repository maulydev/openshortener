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
    // Ensure URL has a protocol before redirecting
    let redirectUrl = url.longUrl;
    if (!redirectUrl.startsWith('http://') && !redirectUrl.startsWith('https://')) {
      redirectUrl = 'https://' + redirectUrl;
    }
    redirect(redirectUrl);
  }
};

export default Redirect;