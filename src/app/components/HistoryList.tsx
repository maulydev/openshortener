import React from "react";
import HistoryCard from "./HistoryCard";
import prisma from "../lib/prisma";

const HistoryList = async () => {
  const urls = (await prisma.shorturl.findMany()).toReversed();

  return (
    <section className="max-h-96 overflow-y-auto">
      {urls?.length > 0 ? (
        urls.map((url) => (
          <HistoryCard
            key={url.id}
            longUrl={url.longUrl}
            uniqueId={url.uniqueId}
          />
        ))
      ) : (
        <p className="p-4 text-slate-400">No history available.</p>
      )}
    </section>
  );
};

export default HistoryList;
