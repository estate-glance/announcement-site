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
import upload from "/upload.svg";
import style from "../../public/style.svg";
import match from "../../public/match.svg";

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

      {/* second section */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          maxWidth: 1500,
          margin: "0 auto",
          minHeight: 500,
          gap: "1rem",
        }}
      >
        <div
          style={{
            flex: "1",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            fontSize: "2rem",
            textAlign: "center",
          }}
        >
          <img src={upload} style={{ maxWidth: "100%" }}></img>
          <p className={`${coralColored} ${heading}`}>Upload</p>
          <p>Include images of the homes you love in your home search</p>
        </div>
        <div
          style={{
            flex: "1",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            fontSize: "2rem",
            textAlign: "center",
          }}
        >
          <img src={style} style={{ maxWidth: "100%" }}></img>
          <p className={`${blueColored} ${heading}`}>Style</p>
          <p>
            Filter by features, amenities, lighting, and architectural styles.
            Search anything.
          </p>
        </div>
        <div
          style={{
            flex: "1",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            fontSize: "2rem",
            textAlign: "center",
          }}
        >
          <img src={match} style={{ maxWidth: "100%" }}></img>
          <p className={`${pinkColored} ${heading}`}>Match</p>
          <p>Rank family priorities and see top % matches</p>
        </div>
      </div>
    </>
  );
}
