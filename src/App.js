import { useState } from "react";


const Button = ({handleClick,text}) => {
  return(
    <>
      <button onClick={handleClick}>{text}</button>
    </>
  )
}

const Review = ({text, value}) => {
  return(
    <>
      <td>{text}</td>
      <td>{value}</td>
    </>
  )
}

const Statistics = ({feed}) => {
  console.log(feed)
  if((feed.good + feed.neutral + feed.bad) === 0){
    return(
      <>
        <p>No feedback given</p>
      </>
    )
  }
  else{
    return(
      <>
        <table>
          <tbody>
            <tr><Review text="good" value={feed.good}/></tr>
            <tr><Review text="neutral" value={feed.neutral}/></tr>
            <tr><Review text="bad" value={feed.bad}/></tr>
            <tr><Review text="all" value={feed.bad + feed.neutral + feed.good}/></tr>
            <tr><Review text="average" value={(-feed.bad + feed.good)}/></tr>
            <tr><Review text="positive" value={(feed.good * 100)/(feed.bad + feed.neutral + feed.good) + "%"}/></tr>
          </tbody>
        </table>
      </>
    )
  }
}

const App = () => {

  const [feed,setFeed] = useState({good: 0, neutral:0, bad: 0});

  const addGood = () => {
    setFeed({...feed, good: feed.good + 1})
  }  

  const addNeutral = () => {
    setFeed({...feed, neutral: feed.neutral + 1})
  }

  const addBad = () => {
    setFeed({...feed, bad: feed.bad + 1})
  }

  return(
    <>
      <h1>Give feedback</h1>
      <Button handleClick={addGood} text="good"/>
      <Button handleClick={addNeutral} text="neutral"/>
      <Button handleClick={addBad} text="bad"/>
      <h2>statistics</h2>
      <Statistics feed={feed} />
    </>
  )
}

export default App;

