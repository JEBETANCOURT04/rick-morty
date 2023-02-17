import React, {useEffect, useState} from 'react'
import SearchInputs from '../components/SearchInputs'

const FetchSigleCharacter = ({ keyword }) => {    

    const [character, setCharacter] = useState([])    

    const fetchData = async () => {
        const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${keyword}`)
        const data = await response.json()

        setCharacter(data.results)
    }

    // useEffect(() => {
        if(keyword == null){ 
            <h1>Nada en el buscador</h1>           
        }else{
            const result = async () => {
                await fetchData()
            }

            result()
        }
    // }, [])    

  return (
    <>
    <div className="w-full grid gap-4 grid-cols-3 place-items-center px-4">
      {character.map(character => (
        <a href="">
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
        </a>
      ))}
    </div>
    </>
  )
}

export default FetchSigleCharacter