import React, { useState, useEffect } from "react";

const FetchAllCharacters = () => {
  const [character, setCharacter] = useState([]);

  const fetchData = async () => {
    const response = await fetch('https://rickandmortyapi.com/api/character')
    const data = await response.json()

    setCharacter(data.results)
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="w-full grid gap-4 grid-cols-3 place-items-center px-4">
      {character.map(character => (
        <div key={character.id} className="w-64 flex justify-center flex-col items-center border-solid border-4 border-grey px-4 py-4">
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
      ))}
    </div>
  );
};

export default FetchAllCharacters;