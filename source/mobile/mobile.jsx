import {
  container,
  content,
  text_container,
  title,
  description,
  signup_button,
  image_container,
} from "./mobile.module.css";

export function MobileSection() {
  return (
    <div className={container}>
      <div className={content}>
        <div className={text_container}>
          <p className={title}>The Future of Home Search</p>
          <p className={description}>
            Search any element in a real estate listing using AI & Computer
            Vision.
          </p>
          <button className={signup_button}>Join our waitlist</button>
        </div>
        <div className={image_container} />
      </div>
    </div>
  );
}
