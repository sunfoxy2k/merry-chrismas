import React from "react";
import Tree from "./Tree";
import Gifts from "./Gifts";
import Lights from "./Lights";
import Cat from "./Cat";

export default function ChrismasCat() {
  return (
    <div className="container relative w-full">
      <svg
        className="w-full max-h-screen"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 520 390"
      >
        <Tree />
        <Gifts />
        <Lights />
        <Cat />
      </svg>
    </div>
  );
}