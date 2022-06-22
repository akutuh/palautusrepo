import { useState } from 'react'

const Percentage = (props) => {
  if(props.feedbackall === 0){
    return (
      <div>
        positive 0 %
      </div>
    )
  }
  return (
    <div>
      positive {props.feedbackgood / props.feedbackall * 100} %
    </div>
  )
}

const Average = (props) => {
  if(props.feedbackall === 0){
    return (
      <div>
        average 0
      </div>
    )
  }
  return (
    <div>
      average {(props.feedbackgood - props.feedbackbad)/props.feedbackall}
    </div>
  )
}

const Allfeedback = (props) => {
  return (
    <div>
      {props.text} {props.feedback}
    </div>
  )
}

const Statistic = (props) => {

  return (
    <div>
      {props.text} {props.feedback}
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
      <Statistic text='good' feedback={good}  />
      <Statistic text='neutral' feedback={neutral}  />
      <Statistic text='bad' feedback={bad}  />
      <Allfeedback text='all' feedback={all}  />
      <Average feedbackall={all} feedbackgood={good} feedbackbad={bad}  />
      <Percentage feedbackall={all} feedbackgood={good}  />
    </div>
  )
}

export default App
