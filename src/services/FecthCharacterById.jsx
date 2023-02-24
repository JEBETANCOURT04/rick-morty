import React, { useState, useEffect } from "react";
import { GiDeathSkull, GiHeartBeats } from "react-icons/gi";

function FecthCharacterById({ id }) {
  const [character, setCharacter] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setTimeout(() => {
          setCharacter(data);
          setLoading(false);
        }, 1000);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="container flex justify-center">
      <div class="mt-20 border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
        <div class="animate-pulse flex space-x-4">
          <div class="rounded-full bg-slate-700 h-10 w-10"></div>
          <div class="flex-1 space-y-6 py-1">
            <div class="h-2 bg-slate-700 rounded"></div>
            <div class="space-y-3">
              <div class="grid grid-cols-3 gap-4">
                <div class="h-2 bg-slate-700 rounded col-span-2"></div>
                <div class="h-2 bg-slate-700 rounded col-span-1"></div>
              </div>
              <div class="h-2 bg-slate-700 rounded"></div>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }

  return (
    <>
      <div>
        {character && (
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
              <div className="container flex justify-center">
                <div className="mt-20 w-80 flex justify-center flex-col items-center border-solid border-4 border-grey px-4 py-4 relative">
                  <img src={character.image} alt="" />

                  <h3>{character.name}</h3>
                  {character.status === "Alive" ? (
                    <GiHeartBeats />
                  ) : (
                    <GiDeathSkull />
                  )}
                  <h4>{character.species}</h4>
                  <h4>{character.gender}</h4>
                  <h4>{character.origin.name}</h4>
                  <h4>{character.location.name}</h4>
                </div>
              </div>
            </main>
          </div>
        )}
      </div>
    </>
  );
}

export default FecthCharacterById;
