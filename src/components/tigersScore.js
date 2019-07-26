import React from "react";
import {useState} from "react";
import HomeButton from "./homeButtons";
import "../App.css";

function TigersScore(props) {
    return (
        <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{props.score}</div>
      </div>
    );
}

export default TigersScore;