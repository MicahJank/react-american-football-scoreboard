import React from "react";
import {useState} from "react"; 
import "../App.css";

function AwayButtons(props) {
    return (
        <>
          <button onClick={() => props.setScore(props.score + 7)} className="awayButtons__touchdown">Away Touchdown</button>
          <button onClick={() => props.setScore(props.score + 3)} className="awayButtons__fieldGoal">Away Field Goal</button>
        </>
    );
}

export default AwayButtons;