import React from "react";
import logo from "../../../assets/logo.svg";
import './style.css';

export default function Logo() {
  return (
    <a href="/" className="logo__link">
      <img src={logo} alt="Logo farm product" />
      <span className="logo__text">Farm product</span>
    </a>
  );
}
