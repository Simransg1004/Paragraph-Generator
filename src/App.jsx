import { useState } from "react"

function App() {

  const [words, setWords] = useState()
  const [para, setPara] = useState('')

  const arr = ["apple", "banana", "computer", "developer", "software", "hello", "world", "laptop", "engine", "mask", "state", "talent"]

  const paragenarate = () => {
    let paragraph = ""
    for(let i = 0; i < words; i++) {
      console.log(Math.floor(Math.random()*13))
      paragraph += arr[Math.floor(Math.random()*13)] + " "
    }
    setPara(paragraph)
  }

  return (
    <>
      <h1>Para Generator</h1>
      <input type="number" placeholder="Enter number of words" value={words}
      onChange={(e) => setWords(e.target.value)}/>
      <button onClick={paragenarate}>Generate</button>
      <p>{para}</p>
    </>
  )
}

export default App
