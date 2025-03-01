"use client";

import { shortenUrl } from "@/actions/shortenUrl";
import React, { useState } from "react";
import ActionButtons from "./ActionButtons";
import { MdOutlineClear } from "react-icons/md";
import { baseUrl } from "../lib";
import { CgSpinner } from "react-icons/cg";

const Form = () => {
  const [urlInput, setUrlInput] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [generatedUrl, setGeneratedUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrlInput(e.target.value);
    if (e.target.value.trim() !== "") {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const longUrl = formData.get("longurl") as string;

    if (!longUrl) {
      alert("Long URL is required");
      return;
    }

    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const response: any = await shortenUrl(longUrl);
      const shortenedUrl = `${baseUrl}/${response.uniqueId}`;

      if (typeof response === "string") {
        alert(response);
      } else {
        setGeneratedUrl(shortenedUrl);
      }
      setLoading(false);
    } catch (error) {
      alert(`Failed to shorten URL: ${error}`);
      setLoading(false);
    }
  };

  const handleClear = () => {
    setUrlInput("");
    setIsButtonDisabled(true);
    setGeneratedUrl("");
  };

  return (
    <form onSubmit={onSubmit}>
      <section className="gap-2 !mt-12 max-w-2xl mx-auto flex flex-col md:flex-row">
        <input
          name="longurl"
          type="url"
          placeholder="Enter your URL"
          value={urlInput}
          onChange={handleInputChange}
          className="border-2 border-slate-300 bg-slate-100 p-2 md:p-4 w-full focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-offset-2 dark:ring-offset-slate-950 flex-1 text-slate-950"
        />
        <button
          disabled={isButtonDisabled}
          className={`px-8 md:py-4 py-2 backdrop-blur-3xl ${
            isButtonDisabled
              ? "bg-blue-500 dark:opacity-50"
              : "bg-blue-500 hover:bg-blue-600 active:bg-blue-700"
          } text-white disabled:cursor-not-allowed`}
        >
          {loading ? (
            <span className="block py-1">
              <CgSpinner className="animate-spin w-14 mx-auto" />
            </span>
          ) : (
            "Shorten"
          )}
        </button>
      </section>
      {generatedUrl && (
        <section className="mt-4 flex max-w-2xl mx-auto space-x-2">
          <p className="p-4 w-full bg-blue-300 text-start text-slate-950 truncate">
            {generatedUrl}
          </p>
          <ActionButtons shortenedUrl={generatedUrl} />
          <button
            onClick={handleClear}
            className="p-4 bg-red-500 hover:bg-red-600 active:bg-red-700 text-white"
          >
            <MdOutlineClear />
          </button>
        </section>
      )}
    </form>
  );
};

export default Form;
