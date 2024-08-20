import { useState } from 'react'


const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  console.log(selected)


  const [points, setPoints]  = useState(new Uint8Array(anecdotes.length))
  console.log(points)

  const [max, setMax] = useState(0)


  const handleVote = () => {
      const copy =  [...points]
      copy[selected] += 1
      setPoints(copy)

      const max_value = Math.max(...copy)
      console.log(max_value)
      const max_index = copy.findIndex((element) => element == max_value)
      console.log(max_index)

      setMax(max_index)


  }

  const generateRandomIndex = () => setSelected(Math.floor(Math.random() * (anecdotes.length)))



  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {points[selected]} votes</p>
      <button onClick={generateRandomIndex}>next anecdote</button>
      <button onClick={handleVote}>vote</button>
      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[max]}</p>
    </div>
  )
}

export default App
