import {
  container,
  content,
  text_container,
  prelude,
  title,
  card_container,
  card,
  card_icon,
  card_text,
  card_title,
  card_description,
} from "./info.module.css";
import upload from "../../public/upload.png";
import style from "../../public/style.png";
import match from "../../public/match.png";

export function InfoSection() {
  return (
    <div className={container}>
      <div className={content}>
        <div className={text_container}>
          <p className={prelude}>OUR PROCESS</p>
          <p className={title}>This is how PinHous fetches you homes!</p>
        </div>
        <div className={card_container}>
          <div className={card}>
            <div className={card_icon}>
              <img src={upload} />
            </div>
            <div className={card_text}>
              <p className={card_title} style={{ color: "#fa8072" }}>
                Upload
              </p>
              <p className={card_description}>
                Include images of the homes you love in your home search
              </p>
            </div>
          </div>

          <div className={card}>
            <div className={card_icon}>
              <img src={style} />
            </div>
            <div className={card_text}>
              <p className={card_title} style={{ color: "#3d5a80" }}>
                Style
              </p>
              <p className={card_description}>
                Filter by features, amenities, lighting, and architectural
                styles. Search anything.
              </p>
            </div>
          </div>

          <div className={card}>
            <div className={card_icon}>
              <img src={match} />
            </div>
            <div className={card_text}>
              <p className={card_title} style={{ color: "#fdbfab" }}>
                Match
              </p>
              <p className={card_description}>
                Rank family priorities and see top % matches
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
