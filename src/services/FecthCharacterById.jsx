import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function FecthCharacterById( {id} ) {
  const [character, setCharacter] = useState({
    isLoading: false,
    data: [],
    error: null,
  });

  useEffect(() => {
    setCharacter({
      ...character,
      isLoading: true,
    });

    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.json())
      .then((data) => {        
        if (data != {}) {
          setCharacter({
            ...character,
            isLoading: false,
            data: data,
            error: null,
          });
        } else {
          setCharacter({
            isLoading: false,
            data: [],
            error: "No items found",
          });
        }
      })
      .catch((error) => {
        setCharacter({
          isLoading: false,
          data: [],
          error: error,
        });
      });
  }, [id]);

  console.log('Char', character.data.image)

  return (
    <>
      <div>
        {character.data &&
          
            <Link key={character.id} to={""}>
              <div className="w-64 flex justify-center flex-col items-center border-solid border-4 border-grey px-4 py-4 relative">
                {character.data.image ? (
                  <img src={character.data.image} alt="" />
                ) : (
                  <h1>Item Desconocido</h1>
                )}
                {!character.data.name ? (
                  <h3>item Desconocido</h3>
                ) : (
                  <h3>{character.data.name}</h3>
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
          }

        {character.error !== null && <h3>Hubo un error: {character.error}</h3>}
      </div>
    </>
  );
}

export default FecthCharacterById;
