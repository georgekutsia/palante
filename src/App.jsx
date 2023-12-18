import React, { useState } from 'react'
import { ButtonPages } from './pages'
import './index.css'
export const GlobalContext = React.createContext();

function App() {
  const [word, setWord] = useState(1)

  return (
    <GlobalContext.Provider value={{word, setWord,}}>
        <button onClick={()=>setWord(word + 1)} >WordChange</button>
      <ButtonPages  word={word}/>
    </GlobalContext.Provider>
  )
}

export default App