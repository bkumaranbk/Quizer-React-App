import React from "react";

const Result = ({score, playAgain}) => (
  <div className="score-board">
    <div className="score">You scored <span className="score-result">{score}</span> / 5 correct answers!</div>
    <button className="playBtn" onClick={playAgain}>
      Play again!
    </button>
  </div>
);

export default Result;
