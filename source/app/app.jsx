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
      <a href="#contactForm" className={styles.borderButton}>
        Contact
      </a>
      <a href="#signUpForm" className={styles.filledButton}>
        Sign Up
      </a>
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
          <a href="#signUpForm" className={styles.filledButton}>
            Join our waitlist
          </a>
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

function TextBox({ label, placeholder, type, area }) {
  const InputType = area ? "textarea" : "input";
  return (
    <label className={styles._label}>
      {label}
      <InputType
        className={styles.textBox}
        placeholder={placeholder}
        type={type}
        rows={5}
      />
    </label>
  );
}

function SignUpForm() {
  return (
    <div className={styles.signUpForm} id="signUpForm">
      <p className={styles.formTitle}>Sign up to join PinHous waitlist!</p>
      <div className={styles.formControls}>
        <TextBox label="Email" placeholder="Enter your email id" type="email" />
        <TextBox
          label="Password"
          placeholder="Create a password"
          type="password"
        />
      </div>
      <div className={styles.formButtonGroup}>
        <button className={styles.filledButton}>Sign Up</button>
        <button className={styles.borderButton}>Continue with Google</button>
      </div>
    </div>
  );
}

function ProfessionDropdown() {
  return (
    <label className={styles._label}>
      Profession
      <select
        style={{
          padding: "1rem",
          display: "block",
          marginTop: "0.5rem",
          border: "1px solid #d9d9d9",
          width: "100%",
          borderRadius: 99,
        }}
      >
        <option defaultValue={true} disabled>
          Select
        </option>
        <option>Agent</option>
        <option>Homebuyer</option>
      </select>
    </label>
  );
}

function ContactForm() {
  return (
    <div className={styles.contactForm} id="contactForm">
      <p className={styles.formTitle}>Contact</p>
      <div className={styles.contactFormLayout}>
        <TextBox label="First Name" placeholder="Enter your first name" />
        <TextBox label="Last Name" placeholder="Enter your last name" />
        <TextBox label="Email" placeholder="Enter your email id" type="email" />
        <ProfessionDropdown />
      </div>
      <TextBox
        label="Enquiry"
        placeholder="Write your message here"
        area={true}
      />
      <div className={styles.formButtonGroup}>
        <button className={styles.filledButton}>Send message</button>
      </div>
    </div>
  );
}

function FormSection() {
  return (
    <div className={styles.formPage}>
      <div className={styles.formContainer}>
        <SignUpForm />
        <hr className={styles.separator} />
        <ContactForm />
      </div>
    </div>
  );
}

function HiddenFormSection() {
  return (
    <div className={style.contactPage}>
      <ContactForm />
    </div>
  );
}

// add hidden page with contact form

export function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <MobileSection />
      <InfoSection />
      <FormSection />
      <HiddenFormSection />
    </>
  );
}
