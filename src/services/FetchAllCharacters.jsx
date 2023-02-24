import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const FetchAllCharacters = () => {  

  const [allCharacter, setAllCharacter] = useState([]);

  useEffect(() => {
    console.log("Fetching all characters");
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => setAllCharacter(data.results));
    return () => {};
  }, []);

  return (
    <div className="container max-w-full flex place-items-center px-4 flex-wrap justify-evenly gap-y-2">
      {allCharacter.map((character) => (
        <Link key={character.id} to={`/character/${character.id}`}>
          <div
            key={character.id}
            className="w-64 flex justify-center flex-col items-center border-solid border-4 border-grey px-4 py-4"
          >
            {character.image ? (
              <img src={character.image} alt="" />
            ) : (
              <h1>Item Desconocido</h1>
            )}
            {!character.name ? (
              <h3>item Desconocido</h3>
            ) : (
              <h3>{character.name}</h3>
            )}
            {/* {character.origin == "unknown" ? (
            <h3>item Desconocido</h3>
          ) : (
            <h4>{character.origin}</h4>
          )}
          <h4>{character.location}</h4>
          <h4>{character.status}</h4>
          <h4>{character.id}</h4> */}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default FetchAllCharacters;
