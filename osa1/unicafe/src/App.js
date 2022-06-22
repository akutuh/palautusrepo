import { useState } from 'react'

const Statistics = (props) => {
  return (
    <div>
      <p>good {props.feedbackgood}</p>
      <p>neutral {props.feedbackneutral}</p>
      <p>bad {props.feedbackbad}</p>
      <p>all {props.feedbackall}</p>
      <p>average {(props.feedbackgood - props.feedbackbad)/props.feedbackall}</p>
      <p>positive {props.feedbackgood / props.feedbackall * 100} %</p>
    </div>
  )
}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

  const handleGoodClick = () => {
    setAll(all + 1)
    setGood(good + 1)
  }

  const handleNeutralClick = () => {
    setAll(all + 1)
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    setAll(all + 1)
    setBad(bad + 1)
  }
  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGoodClick} text='good' />
      <Button handleClick={handleNeutralClick} text='neutral' />
      <Button handleClick={handleBadClick} text='bad' />
      <h1>statistics</h1>
      <Statistics feedbackall={all} feedbackgood={good} feedbackneutral={neutral} feedbackbad={bad}  />
    </div>
  )
}

export default App
