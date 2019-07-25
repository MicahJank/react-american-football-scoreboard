import React from "react";
import {useState} from "react";
import HomeButton from "./homeButtons";
import "../App.css";

function LionsScore(props) {
    // const [lionsScore, setLionsScore] = useState(0); // lions state hook with a default value of 0
    return (
        <div className="home">
        <h2 className="home__name">Lions</h2>
        <div className="home__score">{props.score}</div>
        </div>
    );
}

export default LionsScore;