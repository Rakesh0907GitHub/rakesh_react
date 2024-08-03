import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(24)
  const addValue = () => {
    if (counter > 30) {
      setCounter(counter = 30)
    }
    else {
      setCounter(counter + 1)
    }
  }
  const removeValue = () => {
    if(counter>0){
      setCounter(counter-1)
    }
    else{
      setCounter(counter=0)
    }
    
  }
  return (
    <>
      <h1> Rakesh Current Age :{counter} </h1>
      <button onClick={addValue}> Increse Age : {counter}</button>
      <br />
      <button onClick={removeValue}> Decrease Age: {counter}</button>
    </>
  )
}

export default App
