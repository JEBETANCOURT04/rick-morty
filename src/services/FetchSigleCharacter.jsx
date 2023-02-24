import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GiDeathSkull, GiHeartBeats } from "react-icons/gi";
import LoadCard from "../components/LoadCard";
//import SearchInputs from "../components/SearchInputs";

const FetchSigleCharacter = ({ keyword }) => {
  // A state is created which contains a manipulable object
  const [character, setCharacter] = useState({
    isLoading: false,
    data: [],
    error: null,
  });

  // when the component is rendered, a copy of the state object is made but with a different value in the isLoading property
  useEffect(() => {
    setCharacter({
      ...character,
      isLoading: true,
    });
    setTimeout(() => {
      fetch(`https://rickandmortyapi.com/api/character/?name=${keyword}`)
      .then((response) => response.json())
      .then((data) => {
        // if data has a "results" property, a copy of the state is created and the data is changed
        if (data.hasOwnProperty("results")) {
          setCharacter({
            ...character,
            isLoading: false,
            data: data.results,
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
      .catch((error) =>
        setCharacter({
          ...character,
          isLoading: false,
          data: [],
          error: "Entró al catch",
        })
      );
    }, 1500)
  }, [keyword]);

  if (character.isLoading) {
    return (
      <LoadCard />
    );
  }

  return (
    <>
      <div className="container max-w-full flex place-items-center px-4 flex-wrap justify-evenly gap-y-2">      
        {character.data.length > 0 &&
          character.data.map((character) => (
            <Link key={character.id} to={`/character/${character.id}`}>
              <div className="w-64 flex justify-center flex-col items-center border-solid border-4 border-grey px-4 py-4 relative">
                <img className="w-3/4" src={character.image} alt="" />
                <h3 className="">{character.name}</h3>
                {character.status === "Alive" ? (
                  <GiHeartBeats />
                ) : (
                  <GiDeathSkull />
                )}
                <div className="text-center">
                  <h4>Specie: {character.species}</h4>
                  <h4>Gender: {character.gender}</h4>
                  <h4>Origin: {character.origin.name}</h4>
                  <h4>Location: {character.location.name}</h4>
                </div>
              </div>
            </Link>
          ))}

        {character.error !== null && <h3>Hubo un error: {character.error}</h3>}
      </div>
    </>
  );
};

export default FetchSigleCharacter;
