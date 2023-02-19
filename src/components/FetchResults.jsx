import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import FetchAllCharacters from "../services/FetchAllCharacters";
import FetchSigleCharacter from "../services/FetchSigleCharacter";
import SearchInputs from "./SearchInputs";

const FetchResults = () => {
  // get the search parameters of the current url
  const [searchParams] = useSearchParams();
  const [keywordSearch, setKeywordSearch] = useState("");

  // This hook is executed every time you change the search parameters. 
  // if there is a search parameter called "search", the value of this parameter is set to "KeywordSearch", 
  // otherwise an empty string is passed
  useEffect(() => {
    if (searchParams.get("search")) {      
      setKeywordSearch(searchParams.get("search"));
    } else {      
      setKeywordSearch("");
    }
  }, [searchParams]);

  return (
    <>
      <div className="isolate bg-white">
        <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
          <svg
            className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
            viewBox="0 0 1155 678"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
              fillOpacity=".3"
              d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
            />
            <defs>
              <linearGradient
                id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
                x1="1155.49"
                x2="-78.208"
                y1=".177"
                y2="474.645"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#9089FC"></stop>
                <stop offset="1" stopColor="#FF80B5"></stop>
              </linearGradient>
            </defs>
          </svg>
        </div>
        <main>
          <SearchInputs />
          <div className="relative p-0 lg:px-8">            
            {keywordSearch === "" ? (
              <section className="w-full mt-20 flex just">
                <FetchAllCharacters />
              </section>
            ) : (
              <section className="w-full mt-20 flex just">
                <FetchSigleCharacter keyword={keywordSearch} />
              </section>
            )}
          </div>
        </main>
      </div>
    </>
  );
};

export default FetchResults;
