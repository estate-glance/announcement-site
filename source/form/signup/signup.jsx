import {
  content,
  title,
  label,
  entry,
  signup_button,
  google_button,
} from "./signup.module.css";

export function SignupForm() {
  return (
    <div className={content}>
      <p className={title}>Sign up to join PinHous waitlist!</p>
      <label className={label}>
        <p>Email</p>
        <input
          placeholder="Enter your email id"
          type="email"
          className={entry}
        />
      </label>
      <label className={label}>
        Password
        <input
          placeholder="Create a password"
          type="password"
          className={entry}
        />
      </label>
      <button className={signup_button}>Sign up</button>
      <button className={google_button}>Continue with Google</button>
    </div>
  );
}
