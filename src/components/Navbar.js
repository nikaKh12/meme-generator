import React from "react";
import TrollFace from "../images/troll-face.png";

export default function Navbar() {
  return (
    <header className="header">
      <img src={TrollFace} className="header-image" alt="Trollface" />
      <h3 className="header-title">Meme Generator</h3>
      <h4 className="header-project">React Course - Project 3</h4>
    </header>
  );
}
