import React from "react";

const Header = () => {
  const getDate = () => {
    const date = new Date();
    return (
      <React.Fragment>
        <div className="text-lg">
          <span>{date.getDate()}</span>/<span>{date.getMonth() + 1}</span>
          <p className="font-bold text-xl">
            <span>{date.getHours()}</span>:<span>{date.getMinutes()}</span>
          </p>
        </div>
      </React.Fragment>
    );
  };

  return (
    <div className="mb-10 hidden md:flex flex-row justify-between items-center">
      <div className="w-72 relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 absolute left-2 top-3 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <input
          placeholder="Search"
          className="border border-solid focus:outline-none focus:border-fuchsia-500 border-gray-100 py-2 px-10 w-full rounded-3xl"
          type="text"
        />
      </div>
      <div className="flex flex-row justify-end items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 ml-5 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
          />
        </svg>
        <div className="ml-10">{getDate()}</div>
      </div>
    </div>
  );
};

export default Header;
