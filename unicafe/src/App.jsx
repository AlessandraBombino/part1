import { useState } from 'react'

const Statistics = (props) => {
  const { good, neutral, bad } = props
  if (good + neutral + bad == 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  }

  return (
      <table>
        <tbody>
            <StatisticLine text="good" value={good} />
            <StatisticLine text="neutral" value={neutral} />
            <StatisticLine text="bad" value={bad} />
            <StatisticLine text="all" value={good+neutral+bad} />
            <StatisticLine text="average" value={(good-bad) / (good + neutral +bad)} />
            <StatisticLine text="positive" value={(100*(good / (good+neutral+bad))).toFixed(1) + " %"} />
          </tbody>
      </table>
  )
}

const StatisticLine = (props) => {
  const { text, value } = props

  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}


const Button = (props) => {
  const { text, handleClick } = props
  return (
      <button onClick={handleClick}>{text}</button>
  )

}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  return (
    <div>
      <h1>give feedback</h1>
      <Button text="good" handleClick={() => setGood(good + 1)} />
      <Button text="neutral" handleClick={() => setNeutral(neutral + 1)} />
      <Button text="bad" handleClick={() => setBad(bad + 1)} />

      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
