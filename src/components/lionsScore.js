import React from "react";
import {useState} from "react";
import HomeButton from "./homeButtons";
import "../App.css";

function LionsScore(props) {
    return (
        <div className="home">
            <h2 className="home__name">Lions</h2>
            <div className="home__score">{props.score}</div>
        </div>
    );
}

export default LionsScore;