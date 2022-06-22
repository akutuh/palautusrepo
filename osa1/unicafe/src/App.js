import { useState } from 'react'

const Statistics = (props) => {
  if (props.feedbackall === 0){
    return (
      <div>
        No feedback given
      </div>
    )
  }
  return (
    <div>
      <table>
        <tbody>
          <StatisticLine text="good" value={props.feedbackgood} />
          <StatisticLine text="neutral" value={props.feedbackneutral} />
          <StatisticLine text="bad" value={props.feedbackbad} />
          <StatisticLine text="all" value={props.feedbackall} />
          <StatisticLine text="average" value={(props.feedbackgood - props.feedbackbad)/props.feedbackall}/>
          <StatisticLine text="positive" value={props.feedbackgood / props.feedbackall * 100}  />
        </tbody>
      </table>
    </div>
  )
}

const StatisticLine = (props) => {
  if (props.text === "positive") {
    return (
      <tr>
        <td>{props.text}</td>
        <td>{props.value} %</td>
      </tr>
    )
  }
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
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
