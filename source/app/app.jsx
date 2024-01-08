import { useEffect, useState } from "react";
import {
  header,
  floating,
  branding,
  button,
  contact,
  sign_up,
  intro,
  icon,
  heading,
  blueColored,
  pinkColored,
  coralColored,
} from "./app.module.css";
import logoName from "/logo-name.svg";
import logo from "/logo.svg";

export function App() {
  const [pageScrolled, setPageScrolled] = useState(false);
  useEffect(function () {
    window.onscroll = function () {
      if (window.scrollY !== 0) {
        setPageScrolled(true);
      } else {
        setPageScrolled(false);
      }
    };
  }, []);
  return (
    <>
      {/* header */}
      <div className={`${pageScrolled ? floating : ""} ${header}`}>
        <img src={logoName} className={branding}></img>
        <button className={`${contact} ${button}`}>Contact</button>
        <button className={`${sign_up} ${button}`}>Sign Up</button>
      </div>

      {/* first section */}
      <div className={intro}>
        <div>
          <img src={logo} className={icon}></img>
          <p className={`${blueColored} ${heading}`}>Find Your</p>
          <p className={`${pinkColored} ${heading}`}>Dream Home</p>
          <p className={`${coralColored} ${heading}`}>Through Images</p>
        </div>
      </div>
    </>
  );
}
