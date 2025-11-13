import { useState } from "react"
import Display from "./components/Display"
import Button from "./components/Button"
import Statistics from "./components/Statistics"

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  
  const updateGood = () => {
    const goodNewValue = good + 1
    setGood(goodNewValue)
  }

  const updateNeutral = () => {
    const neutralNewValue = neutral + 1
    setNeutral(neutralNewValue)
  }

  const updateBad = () => {
    const badNewValue = bad + 1
    setBad(badNewValue)
  }
  
  return (
    <div>
      <Display text="give feedback" />
      <br />
      <Button onClick={updateGood} text="good" />&nbsp;
      <Button onClick={updateNeutral} text="neutral" />&nbsp;
      <Button onClick={updateBad} text="bad" />
      <br />
      <Display text="statistics" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
