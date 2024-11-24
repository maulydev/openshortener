"use client";

import { shortenUrl } from "@/actions/shortenUrl";
import React, { useState } from "react";
import ActionButtons from "./ActionButtons";
import { MdOutlineClear } from "react-icons/md";
import { baseUrl } from "../lib";

const Form = () => {
  const [urlInput, setUrlInput] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [generatedUrl, setGeneratedUrl] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrlInput(e.target.value);
    if (e.target.value.trim() !== "") {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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
    } catch (error) {
      alert(`Failed to shorten URL: ${error}`);
    }
  };

  const handleClear = () => {
    setUrlInput("");
    setIsButtonDisabled(true);
    setGeneratedUrl("");
  };

  return (
    <form onSubmit={onSubmit}>
      <section className="space-x-2 !mt-12 max-w-2xl mx-auto flex">
        <input
          name="longurl"
          type="text"
          placeholder="Enter your URL"
          value={urlInput}
          onChange={handleInputChange}
          className="border-2 border-slate-300 bg-slate-100 p-4 w-full focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-offset-2 dark:ring-offset-slate-950 flex-1 text-slate-950"
        />
        <button
          disabled={isButtonDisabled}
          className={`px-8 py-4 backdrop-blur-3xl ${
            isButtonDisabled
              ? "bg-blue-500 dark:opacity-50"
              : "bg-blue-500 hover:bg-blue-600 active:bg-blue-700"
          } text-white disabled:cursor-not-allowed`}
        >
          Shorten URL
        </button>
      </section>
      {generatedUrl && (
        <section className="mt-4 flex max-w-2xl mx-auto space-x-2">
          <p className="p-4 w-full bg-blue-300 text-start text-slate-950">
            {generatedUrl}
          </p>
          <ActionButtons shortenedUrl={generatedUrl} />
          <button onClick={handleClear} className="p-4 bg-red-500 hover:bg-red-600 active:bg-red-700 text-white">
            <MdOutlineClear />
          </button>
        </section>
      )}
    </form>
  );
};

export default Form;
