//TODO: STEP 1 - Import the useState hook.
import React from "react";
import {useState} from "react";
import './App.css';
import BottomRow from "./BottomRow";
import LionsScore from "./components/lionsScore";
import TigersScore from "./components/tigersScore";
import HomeButton from "./components/homeButtons";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.

  const [lionsScore, setLionsScore] = useState(0); // lions state hook with a default value of 0

  const [tigersScore, setTigersScore] = useState(0); // tigers state hook with a default value of 0

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
         <LionsScore score={lionsScore} />
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{tigersScore}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <HomeButton setScore={setLionsScore} score={lionsScore}/>
        </div>
        <div className="awayButtons">
          <button onClick={() => setTigersScore(tigersScore + (7 + 1))} className="awayButtons__touchdown">Away Touchdown</button>
          <button onClick={() => setTigersScore(tigersScore + 3)} className="awayButtons__fieldGoal">Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}

export default App;
