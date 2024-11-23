"use client"

import React, { useState } from "react";
import { IoCheckmark } from "react-icons/io5";
import { LuClipboardCopy } from "react-icons/lu";

const HistoryCard = ({
  original,
  shortened,
}: {
  original: string;
  shortened: string;
}) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shortened || "https://www.google.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex justify-between shadow-lg shadow-slate-900 p-4">
      <span  className="select-none">
        <p>{shortened || "https://www.google.com"}</p>
        <small className="text-slate-500">
          {original || "https://www.google.com"}
        </small>
      </span>
      <button className="bg-slate-800 p-4" onClick={copyToClipboard}>
        {copied ? <IoCheckmark className="text-blue-500" /> : <LuClipboardCopy />}
      </button>
    </div>
  );
};

export default HistoryCard;
