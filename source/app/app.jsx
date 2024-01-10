import styles from "./App.module.css";
import logo from "/logo.svg";
import fullLogo from "/logo-name.svg";
import mobile from "/mobile.png";
import upload from "/upload.svg";
import style from "/style.svg";
import match from "/match.svg";

function ButtonGroup({ className }) {
  return (
    <div className={className}>
      <button className={styles.borderButton}>Contact</button>
      <button className={styles.filledButton}>Sign Up</button>
    </div>
  );
}

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.headerContainer}>
        <img src={fullLogo} className={styles.headerLogo} />
        <ButtonGroup className={styles.headerButtonContainer} />
      </div>
    </div>
  );
}

function HeroSection() {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.heroContent}>
        <img src={logo} className={styles.heroLogo}></img>
        <div className={styles.heroText}>
          <p>Find Your</p>
          <p>Dream Home</p>
          <p>Through Images</p>
        </div>
        <ButtonGroup className={styles.heroButtonContainer} />
      </div>
    </div>
  );
}

function MobileSection() {
  return (
    <div className={styles.mobilePage}>
      <div className={styles.mobileContainer}>
        <div className={styles.mobileContent}>
          <p className={styles.mobileContentHeading}>
            The Future of Home Search
          </p>
          <p className={styles.mobileContentParagraph}>
            Search any element in a real estate listing using AI & Computer
            Vision.
          </p>
          <button className={styles.filledButton}>Join our waitlist</button>
        </div>
        <img src={mobile} className={styles.mobileImage} />
      </div>
    </div>
  );
}

function InfoCard({ image, title, description, color }) {
  return (
    <div className={styles.infoCard}>
      <img src={image} className={styles.infoCardImage}></img>
      <div className={styles.infoCardText}>
        <p style={{ color: color }}>{title}</p>
        <p>{description}</p>
      </div>
    </div>
  );
}

function InfoSection() {
  return (
    <div className={styles.infoPage}>
      <div className={styles.infoContainer}>
        <div className={styles.infoPrelude}>
          <p>OUR PROCESS</p>
          <p>This is how PinHouse fetches you homes!</p>
        </div>
        <div className={styles.infoCardContainer}>
          <InfoCard
            image={upload}
            title="Upload"
            description="Include images of the homes you love in your home search"
            color="#fa8072"
          />
          <InfoCard
            image={style}
            title="Style"
            description="Filter by features, amenities, lighting, and architectural styles. Search anything."
            color="#3d5a80"
          />
          <InfoCard
            image={match}
            title="Match"
            description="Rank family priorities and see top % matches"
            color="#fdbfab"
          />
        </div>
      </div>
    </div>
  );
}

export function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <MobileSection />
      <InfoSection />
    </>
  );
}
