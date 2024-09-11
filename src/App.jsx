import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TextExtractor from "./components/TextExtractor"
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TextExtractor/>
    </>
  )
}

export default App
