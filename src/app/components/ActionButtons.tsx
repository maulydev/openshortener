import Link from "next/link";
import { useState } from "react";
import { IoCheckmark } from "react-icons/io5";
import { LuClipboardCopy, LuExternalLink } from "react-icons/lu";

const ActionButtons = ({ shortenedUrl }: { shortenedUrl: string }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    if (!navigator.clipboard) {
      return alert("Clipboard not supported");
    }
    await navigator.clipboard.writeText(shortenedUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex space-x-2">
      <Link
        target="_blank"
        href={shortenedUrl}
        className="p-4 dark:bg-slate-800 dark:hover:bg-slate-700 bg-blue-500 hover:bg-blue-600 active:bg-blue-700 block text-white"
      >
        <LuExternalLink />
      </Link>
      <button className="dark:bg-slate-800 dark:hover:bg-slate-700 bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white p-4" onClick={copyToClipboard}>
        {copied ? (
          <IoCheckmark className="text-green-500" />
        ) : (
          <LuClipboardCopy />
        )}
      </button>
    </div>
  );
};

export default ActionButtons;
