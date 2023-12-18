import React, { useContext } from 'react'

import { GlobalContext } from '../../../App'
export default function Btn2() {
const {word} = useContext(GlobalContext)

  return (
    <div>{word}</div>
  )
}
