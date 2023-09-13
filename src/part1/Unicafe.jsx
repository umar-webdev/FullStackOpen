import React, { useState } from "react";

const Unicafe = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  return (
    <div>
      <h1>give Feedback</h1>
      <button
        onClick={() => {
          setGood(good + 1);
        }}
      >
        good
      </button>
      <button
        onClick={() => {
          setNeutral(neutral + 1);
        }}
      >
        neutral
      </button>
      <button
        onClick={() => {
          setBad(bad + 1);
        }}
      >
        bad
      </button>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default Unicafe;

const Statistics = (props) => {
  const total = props.good + props.neutral + props.bad ;
  const positive = props.good * (100/total)
  console.log(positive);
  return (
    <>
      <h1>Statistics</h1>
      <p>good {props.good}</p>
      <p>neutral {props.neutral}</p>
      <p>bad {props.bad}</p>
      <p>all {props.good + props.neutral + props.bad}</p>
      <p>average { total/ 3}</p>
      <p>Positive {positive}</p>
    </>
  );
};
