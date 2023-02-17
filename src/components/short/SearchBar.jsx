import React from "react";

const SearchBar = () => {
  return (
    <form>
      <div className="flex">
        <div className="relative w-full">
          <input
            type="search"
            id='product-search"'
            className="block rounded-ful p-2.5 rounded w-[30rem] lg:w-[40rem] z-20 text-sm text-gray-900 bg-gray-200 rounded-r-lg border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
            placeholder="Search For Products"
            required=""
          />
          <button
            type="submit"
            className="absolute top-0 right-0 p-2.5 lg:px-10 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-800 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <svg
              aria-hidden="true"
              className="w-5 h-5"
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
            <span className="sr-only">Search</span>
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchBar;
