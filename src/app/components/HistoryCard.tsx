"use client";

import { baseUrl } from "../lib";
import ActionButtons from "./ActionButtons";

const HistoryCard = ({
  longUrl,
  uniqueId,
}: {
  longUrl: string;
  uniqueId: string;
}) => {
  const shortenedUrl = `${baseUrl}/${uniqueId}`;

  return (
    <div className="flex justify-between shadow-lg shadow-slate-900 py-4 gap-4">
      <span className="select-none w-full line-clamp-1">
        <p className="text-slate-900 dark:text-slate-50">{shortenedUrl}</p>
        <small className="block text-slate-500 truncate md:w-96">
          {longUrl || "No URL provided"}
        </small>
      </span>

      <ActionButtons shortenedUrl={shortenedUrl} />
    </div>
  );
};

export default HistoryCard;
