import { useState } from "react";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
  ];
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState([0, 0, 0, 0, 0, 0]);

  const handleChange = () => {
    const random = Math.floor(Math.random() * (0 - 6 + 1) + 6);
    console.log(random);
    setSelected(random);
  };

  const handleVote = (votes, selected) => {
    const copy = [...votes];
    copy[selected] += 1;
    setVotes(copy);
    console.log(maxIndex);
  };

  let maxVotes = Math.max(...votes);
  let maxIndex = votes.indexOf(maxVotes);

  return (
    <>
      <h1>Anectode of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <button onClick={handleChange}>Change Anecdote</button>
      <button
        onClick={() => {
          handleVote(votes, selected);
        }}
      >
        Vote
      </button>
      <h1>Most voted anectode</h1>
      <p>{anecdotes[maxIndex]}</p>
      <p>has {votes[selected]} votes</p>
    </>
  );
};

export default App;
