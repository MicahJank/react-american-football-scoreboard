import React from "react";
import {useState} from "react"; 
import "../App.css";

function HomeButtons(props) {

    return (
        <>
        <button onClick={() => props.setScore(props.score + 7)} className="homeButtons__touchdown">Home Touchdown</button>
        <button onClick={() => props.setScore(props.score + 3)} className="homeButtons__fieldGoal">Home Field Goal</button>
        </>
    );
}

export default HomeButtons;