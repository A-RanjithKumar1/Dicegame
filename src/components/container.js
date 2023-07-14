import React from "react";
import { useState, useEffect } from "react";
import Header from "./header";
const Container = () => {
  const [num, setNum] = useState(0);
  const [flip, setflip] = useState(1);
  const [player1name, setplayer1name] = useState("Player 1");
  const [player2name, setplayer2name] = useState("Player 2");
  const [Player1overallscore, setPlayer1overallscore] = useState(0);
  const [Player2overallscore, setPlayer2overallscore] = useState(0);
  const [Player1score, setPlayer1score] = useState(0);
  const [Player2score, setPlayer2score] = useState(0);
  let images = [
    "first.png",
    "dice1.png",
    "dice2.png",
    "dice3.png",
    "dice4.png",
    "dice5.png",
    "dice6.png",
  ];
  const getNumber = () => {
    const x = Math.floor(Math.random() * 6) + 1;
    setNum(x);
    if (flip % 2 !== 0) {
      console.log("flip passed");
      console.log("number", x);
      const n = Player1score + x;
      setPlayer1score(n);
    } else {
      setPlayer2score(Player2score + x);
      console.log(Player2score);
    }
  };
  console.log("playerscore", Player1score, num);
  console.log("numvalue", num);
  const New = () => {
    console.log("New called clicked on New");
    setplayer1name("Player 1");
    setplayer2name("Player 2");
    setPlayer1overallscore(0);
    setPlayer2overallscore(0);
    setPlayer1score(0);
    setPlayer2score(0);
  };
  const hold = () => {
    console.log("hold called clicked on switch");
    console.log(Player1score);
    setflip(flip + 1);
    console.log(flip);
    setPlayer1score(Player1score + num);
    setPlayer1overallscore(Player1overallscore + Player1score);
    setPlayer2overallscore(Player2overallscore + Player2score);
    setPlayer1score(0);
    setPlayer2score(0);
    setNum(0);
  };
  const edit = () => {
    setplayer1name(prompt("Enter name of Player1"));
    setplayer2name(prompt("Enter the name of Player2"));
  };
  return (
    <>
      <Header img={images} num1={num}></Header>
      <div class="playerContainer">
        <div class="player1">
          <h2 id="player1name">{player1name}</h2>
          <h4 id="Player1overallscore">{Player1overallscore}</h4>
          <h3 class="currentscore">Current Score :</h3>
          <h4 id="Player1score">{Player1score}</h4>
        </div>
        <div class="buttons">
          <button class="btn" onClick={getNumber}>
            Roll
          </button>

          <button class="btn" onClick={New}>
            New Game
          </button>
          <button class="btn" onClick={edit}>
            EditNames
          </button>
          <button class="btn" onClick={hold}>
            Switch
          </button>
        </div>
        <div class="player2">
          <h2 id="player2name">{player2name}</h2>
          <h4 id="Player2overallscore">{Player2overallscore}</h4>
          <h3 class="currentscore">Current Score :</h3>
          <h4 id="Player2score">{Player2score}</h4>
        </div>
      </div>
    </>
  );
};
export default Container;
