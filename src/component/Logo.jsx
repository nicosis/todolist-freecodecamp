import React from "react";
import logo from "../img/freecodecamp-logo.png";
import "../styles/Logo.css";

const Logo = () => {
  return (
    <div>
      <div className="freecodecamp-logo-contenedor">
        <img className="freecodecamp-logo" src={logo} alt="logo" />
      </div>
    </div>
  );
};

export default Logo;
