import React from "react";
import { Btn1, Btn2, Btn3, Btn4, Btn5 } from "../../components";

export default function ButtonsPages({ word }) {
  return (
    <div className="div-box">
        <Btn1  word1={word}/>
        <Btn2 />
        <Btn3 />
        <Btn4 />
        <Btn5 />
      </div>
  );
}