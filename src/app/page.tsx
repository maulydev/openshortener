import React from "react";
import HistoryList from "./components/HistoryList";


const Home = () => {
  return (
    <div className="container mx-auto text-center py-16 space-y-4">
      <h1 className="text-6xl font-bold">Open Shortener</h1>
      <p className="max-w-2xl mx-auto text-slate-400">
        Open is a free and open-source tool for shortening URLs. It provides a
        simple and efficient way to shorten long URLs, making them easier to
        share and manage.
      </p>
      <form className="space-x-4 !mt-12 max-w-2xl mx-auto flex">
        <input
          type="text"
          placeholder="Enter your URL"
          className="p-4 w-full focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-offset-2 ring-offset-slate-950 flex-1"
        />
        <button className="px-8 py-4 bg-blue-500 text-white">
          Shorten URL
        </button>
      </form>

      <div className="text-start max-w-2xl mx-auto py-4">
        <h3 className="font-bold text-xl">History</h3>
        <hr className="my-4" />
        <HistoryList />
      </div>
      <p className="text-slate-400">
        Made with ❤️ by{" "}
        <a href="https://github.com/maulydev/openshortener">Mauly Dotdev</a>
      </p>
    </div>
  );
};

export default Home;
