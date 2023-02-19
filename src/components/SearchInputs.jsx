import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const SearchInputs = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState("");

  // Saves in "value" the input every time it changes
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  // prevents the page from reloading and sends us to the page indicated in the "navigate"
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/results?search=${value}`);
  };

  return (
    <>
      <div className="mt-10 flex items-center justify-center gap-x-6">
        <Link
          to={"/results"}
          className="rounded-md bg-indigo-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Get all characters
        </Link>
        <label className="relative block">
          <span className="sr-only">Search</span>
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <svg className="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"></svg>
          </span>
          <form onSubmit={handleSubmit} className="flex">
            <input
              className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
              placeholder="Search for a keyword..."
              type="text"
              onChange={handleChange}
              name="search"
            />

            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Search
            </button>
          </form>
        </label>
      </div>
    </>
  );
};

export default SearchInputs;
