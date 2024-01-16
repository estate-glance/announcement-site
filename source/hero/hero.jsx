import {
  container,
  content,
  image_container,
  text_container,
  button_container,
  contact_button,
  signup_button,
} from "./hero.module.css";
import logo from "../../public/logo.png";

export function HeroSection() {
  return (
    <div className={container}>
      <div className={content}>
        <div className={image_container}>
          <img src={logo} />
        </div>
        <div className={text_container}>
          <p>Find Your</p>
          <p>Dream Home</p>
          <p>Through Images</p>
        </div>
        <div className={button_container}>
          <button className={contact_button}>Contact</button>
          <button className={signup_button}>Sign up</button>
        </div>
      </div>
    </div>
  );
}
