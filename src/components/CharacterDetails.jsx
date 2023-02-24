import React from 'react'
import { useLocation } from 'react-router'
import FecthCharacterById from '../services/FecthCharacterById'

function CharacterDetails() {
    const location = useLocation()
    const idCharacter = location.pathname.split('/')[2]        
  return (
    <>
    <FecthCharacterById id={idCharacter} />
    </>
  )
}

export default CharacterDetails