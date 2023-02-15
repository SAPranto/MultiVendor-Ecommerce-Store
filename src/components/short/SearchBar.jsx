import React from "react";

const SearchBar = () => {
  return (
    <form>
      <div className="flex xl:pr-10">
        <button
          id="dropdown-button"
          data-dropdown-toggle="dropdown"
          className="flex-shrink-0 z-10 inline-flex items-center shadow py-2.5 px-3 pr-8 pl-6 text font-medium text-center bg-green-800 border-green rounded-l-3xl hover:bg-black focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
          type="button"
        >
          Fashions
          <svg
            aria-hidden="true"
            className="w-4 h-6 ml-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div className="relative w-full">
          <input
            type="search"
            id="search-dropdown"
            className="block p-2.5 w-[30rem] lg:w-[32rem] z-20  text-gray-900 bg-gray-50 rounded-r-full border-l-2 border border-green-800 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
            placeholder="What Are You Looking For"
            required
          />
          <button
            type="submit"
            className="flex gap-2 absolute top-0 right-0 p-2.5  font-medium bg-green-800 rounded-r-3xl border border-green-800 hover:bg-green-600 focus:ring-4 focus:outline-none transition duration-300 ease-in-out transform"
          >
            <svg
              aria-hidden="true"
              className="w-5 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <span className="pr-5">Search</span>
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchBar;
