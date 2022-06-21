import { useState } from 'react'


const Statistic = (props) => {

  return (
    <div>
      {props.text} {props.feedback}
    </div>
  )
}


const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)





const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
  }
  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGoodClick} text='good'/>
      <Button handleClick={handleNeutralClick} text='neutral'/>
      <Button handleClick={handleBadClick} text='bad'/>
      <h1>statistics</h1>
      <Statistic text='good' feedback={good}/>
      <Statistic text='neutral' feedback={neutral}/>
      <Statistic text='bad' feedback={bad}/>
    </div>
  )
}

export default App