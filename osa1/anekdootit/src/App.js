import { useState } from 'react'


const Button = ({ handleClick, text }) => (
  <div>
    <button onClick={handleClick}>
      {text}
    </button>
  </div>

)
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const App = () => {
  const anecdotes = [
    '0. If it hurts, do it more often.',
    '1. Adding manpower to a late software project makes it later!',
    '2. The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    '3. Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    '4. Premature optimization is the root of all evil.',
    '5. Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    '6. Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.'
  ]
   
  const [selected, setSelected] = useState(0)

  const handleClick = () => {
    setSelected(getRandomInt(7))
    console.log(selected)
  }

  return (
    <div>
      {anecdotes[selected]}
      <Button handleClick={handleClick} text='next anecdote'/>
    </div>
  )
}

export default App