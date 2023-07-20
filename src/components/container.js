import React from "react";
import { useState, useEffect } from "react";
import Header from "./header";
var Thresholdscore = 25;
const Container = () => {
  // const [Thresholdscore, setThresholdscore] = useState(25);
  console.log("container called");
  const [num, setNum] = useState(0);
  const [flip, setflip] = useState(1);
  const [player1name, setplayer1name] = useState("Player 1");
  const [player2name, setplayer2name] = useState("Player 2");
  const [Player1score, setPlayer1score] = useState(0);
  const [Player2score, setPlayer2score] = useState(0);
  const [winnerName, setwinnerName] = useState("");
  let images = [
    "first.png",
    "dice1.png",
    "dice2.png",
    "dice3.png",
    "dice4.png",
    "dice5.png",
    "dice6.png",
  ];
  useEffect(() => {
    checkWinner();
  }, [Player1score, Player2score]);
  const getNumber = () => {
    const x = Math.floor(Math.random() * 6) + 1;
    setNum(x);
    if (x == 6) {
      setflip(flip);
      if (flip % 2 !== 0) {
        const n = Player1score + x;
        setPlayer1score(n);
      } else {
        setPlayer2score(Player2score + x);
      }
    } else if (flip % 2 !== 0) {
      const n = Player1score + x;
      setPlayer1score(n);
      setflip(flip + 1);
      document.getElementById("first").style.display = "none";
      document.getElementById("second").style.display = "inline";
      console.log(flip);
    } else {
      setPlayer2score(Player2score + x);
      document.getElementById("first").style.display = "";
      document.getElementById("second").style.display = "none";
      setflip(flip + 1);
      console.log(flip);
    }
    setNum(x);
  };
  const New = () => {
    closeWinnerBox();
    setplayer1name("Player 1");
    setplayer2name("Player 2");
    setPlayer1score(0);
    setPlayer2score(0);
    setflip(1);
    setNum(0);
    document.getElementById("second").style.display = "none";
    document.getElementById("first").style.display = "";
  };
  const edit = () => {
    setplayer1name(prompt("Enter name of Player1"));
    setplayer2name(prompt("Enter the name of Player2"));
  };
  const TargetScore = () => {
    // setThresholdscore(parseInt(prompt("Enter name of Player1")));
    Thresholdscore = parseInt(prompt("Enter the Target Score"));
    console.log(Thresholdscore);
  };
  const checkWinner = () => {
    console.log(Thresholdscore);
    if (Player1score >= Thresholdscore) {
      showWinnerBox(player1name);
    } else if (Player2score >= Thresholdscore) {
      showWinnerBox(player2name);
    }
  };
  const showWinnerBox = (name) => {
    const winnerBox = document.getElementById("winner-box");
    winnerBox.style.display = "block";
    document.getElementById("container").style.display = "none";
    setwinnerName(name);
  };
  const closeWinnerBox = () => {
    const winnerBox = document.getElementById("winner-box");
    winnerBox.style.display = "none";
    document.getElementById("container").style.display = "";
  };
  return (
    <>
      <Header img={images} num1={num}></Header>
      <div class="playerContainer" id="container">
        <div class="player1">
          <h2 id="player1name">{player1name}</h2>
          <h3 class="currentscore">P1 Score :</h3>
          <h4 id="Player1score">{Player1score}</h4>
          <button id="first" onClick={getNumber}>
            Roll
          </button>
        </div>
        <div class="buttons">
          <button class="btn" onClick={edit}>
            EditNames
          </button>
          <button class="btn" onClick={New}>
            New Game
          </button>
          <button class="btn" onClick={TargetScore}>
            SetTarget
          </button>
        </div>
        <div class="player2">
          <h2 id="player2name">{player2name}</h2>
          <h3 class="currentscore">P2 Score :</h3>
          <h4 id="Player2score">{Player2score}</h4>
          <button id="second" onClick={getNumber}>
            Roll
          </button>
        </div>
      </div>
      <div id="winner-box">
        <h2>Congratulations!{winnerName} 🏆 You are the winner!</h2>
        <button onClick={New}>Play Again</button>
      </div>
    </>
  );
};
export default Container;
