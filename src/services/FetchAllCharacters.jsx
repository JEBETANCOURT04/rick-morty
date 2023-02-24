import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { GiDeathSkull, GiHeartBeats } from "react-icons/gi";
import LoadCard from "../components/LoadCard";

const FetchAllCharacters = () => {
  const [allCharacter, setAllCharacter] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);    
    setTimeout(() => {
      fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => {
        setAllCharacter(data.results);
        setLoading(false);
      });
    }, 1500)
  }, []);

  if (loading) {
    return (
      <LoadCard />
    );
  }

  return (
    <div className="container max-w-full flex place-items-center px-4 flex-wrap justify-evenly gap-y-2">
      {allCharacter.map((character) => (        
          <div
            key={character.id}
            className="w-72 h-96 flex justify-center flex-col items-center border-solid border-4 border-grey px-4 py-4"
          >
            <img className="w-3/4 mt-0.5" src={character.image} alt="" />
            <h3 className="mt-1.5">{character.name}</h3>
            {character.status === "Alive" ? <GiHeartBeats /> : <GiDeathSkull />}
            <div className="text-center">
              <h4>Specie: {character.species}</h4>
              <h4>Gender: {character.gender}</h4>
              <h4>Origin: {character.origin.name}</h4>
              <h4>Location: {character.location.name}</h4>
            </div>
          </div>        
      ))}
    </div>
  );
};

export default FetchAllCharacters;

// return () => {}
