import React from 'react'
import { useLocation } from 'react-router'
import FecthCharacterById from '../services/FecthCharacterById'

function ModalCharacter() {
    const location = useLocation()
    const idCharacter = location.pathname.split('/')[2]    
    console.log(idCharacter)
  return (
    <>
    <FecthCharacterById id={idCharacter} />
    </>
  )
}

export default ModalCharacter