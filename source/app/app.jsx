import styles from "./App.module.css";
import logo from "/logo.svg";
import fullLogo from "/logo-name.svg";
import mobile from "/mobile.png";

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

export function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <MobileSection />
    </>
  );
}
