import React from "react";
const Header = (props) => {
  console.log(props.img[props.num1]);
  let img = require("../images/" + props.img[props.num1]);
  return (
    <>
      <div class="header">Roll And Chill</div>
      <div class="diceContainer">
        <img src={img} id="display" alt="img" />
      </div>
    </>
  );
};

export default Header;
