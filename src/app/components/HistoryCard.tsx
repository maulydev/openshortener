"use client"

import React, { useState } from "react";
import { IoCheckmark } from "react-icons/io5";
import { LuClipboardCopy } from "react-icons/lu";

const HistoryCard = ({
  longUrl,
  uniqueId,
}: {
  longUrl: string;
  uniqueId: string;
}) => {
  const [copied, setCopied] = useState(false);

  const shortenedUrl = window.location.origin + "/" + uniqueId;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shortenedUrl || "https://www.example.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  

  return (
    <div className="flex justify-between shadow-lg shadow-slate-900 p-4">
      <span  className="select-none">
        <p>{shortenedUrl || "https://www.example.com"}</p>
        <small className="text-slate-500">
          {longUrl || "https://www.example.com"}
        </small>
      </span>
      <button className="bg-slate-800 p-4" onClick={copyToClipboard}>
        {copied ? <IoCheckmark className="text-blue-500" /> : <LuClipboardCopy />}
      </button>
    </div>
  );
};

export default HistoryCard;
