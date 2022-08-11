import { useState } from "react";

const StatisticLine = ({ value, text }) => {
  return (
    <>
      <tr>
        <td>{text}:</td>
        <td>{value}</td>
      </tr>
    </>
  );
};

const Statistics = ({
  goodProp,
  neutralProp,
  badProp,
  totalProp,
  averageProp,
  percentageProp,
}) => {
  return (
    <>
      <table>
        <tbody>
          <StatisticLine key={"countGood"} text={"good"} value={goodProp} />
          <StatisticLine
            key={"countNeutral"}
            text={"neutral"}
            value={neutralProp}
          />
          <StatisticLine key={"countBad"} text={"bad"} value={badProp} />{" "}
          <StatisticLine key={"countAll"} text={"total"} value={totalProp} />{" "}
          <StatisticLine
            key={"countAverage"}
            text={"average"}
            value={averageProp}
          />{" "}
          <StatisticLine
            key={"countPositive"}
            text={"percentage"}
            value={percentageProp}
          />
        </tbody>
      </table>
    </>
  );
};

const Button = ({ label, callback }) => {
  return <button onClick={callback}>{label}</button>;
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  let total = good + neutral + bad;
  let average = ((good - bad) / total).toFixed(3);
  let goodPercentage = `${((good / total) * 100).toPrecision(3)}%`;

  return (
    <>
      <h1>Give Feedback</h1>
      <Button
        key={"good"}
        label={"good"}
        callback={() => {
          setGood(good + 1);
        }}
      />
      <Button
        key={"neutral"}
        label={"neutral"}
        callback={() => {
          setNeutral(neutral + 1);
        }}
      />
      <Button
        key={"bad"}
        label={"bad"}
        callback={() => {
          setBad(bad + 1);
        }}
      />
      <h1>Statistics</h1>
      {total > 0 ? (
        <>
          <Statistics
            goodProp={good}
            badProp={bad}
            neutralProp={neutral}
            totalProp={total}
            averageProp={average}
            percentageProp={goodPercentage}
          ></Statistics>
        </>
      ) : (
        <p>No feedbacks given</p>
      )}
    </>
  );
};

export default App;
