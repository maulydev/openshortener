import React from "react";
import HistoryCard from "./HistoryCard";
import prisma from "../lib/prisma";

const HistoryList = async () => {
  const urls = await prisma.shorturl.findMany();

  return (
    <section className="max-h-96 overflow-y-auto">
      {urls.map((url) => (
        <HistoryCard
          key={url.id}
          longUrl={url.longUrl}
          uniqueId={url.uniqueId}
        />
      ))}
    </section>
  );
};

export default HistoryList;
