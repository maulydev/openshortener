import React from "react";
import Form from "./components/Form";
import HistoryList from "./components/HistoryList";

const Home = () => {
  return (
    <div className="container mx-auto text-center py-16 space-y-4 p-4">
      <h1 className="mt-8 text-4xl lg:text-6xl font-bold text-slate-950 dark:text-slate-50">Open Shortener</h1>
      <p className="max-w-2xl mx-auto text-slate-800 dark:text-slate-400">
        Open is a free and open-source tool for shortening URLs. It provides a
        simple and efficient way to shorten long URLs, making them easier to
        share and manage.
      </p>

      <Form />

      <div className="text-start max-w-2xl mx-auto py-4">
        <h3 className="font-bold text-xl dark:text-slate-50">History</h3>
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
