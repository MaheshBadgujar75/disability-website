import { useState } from 'react'
import './App.css'
import Navbar from './Components/navbar'
import Home from './Components/home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Home />
    </>
  )
}

export default App
