import {
  container,
  content,
  separator,
  signup_form_container,
  contact_form_container,
  mobile_contact_content,
  mobile_contact_container,
} from "./form.module.css";
import { SignupForm } from "./signup/signup";
import { ContactForm } from "./contact/contact";

export function FormSection() {
  return (
    <>
      <div className={container}>
        <div className={content}>
          <div className={signup_form_container}>
            <SignupForm />
          </div>
          <hr className={separator} />
          <div className={contact_form_container}>
            <ContactForm />
          </div>
        </div>
      </div>
      <div className={mobile_contact_container}>
        <div className={mobile_contact_content}>
          <ContactForm />
        </div>
      </div>
    </>
  );
}
