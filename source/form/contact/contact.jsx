import {
  content,
  title,
  label,
  entry,
  message_button,
  grid,
} from "./contact.module.css";

export function ContactForm() {
  return (
    <div className={content} id="contact_form">
      <p className={title}>Contact</p>
      <div className={grid}>
        <label className={label}>
          First name
          <input placeholder="Enter your first name" className={entry} />
        </label>
        <label className={label}>
          Last name
          <input placeholder="Enter your last name" className={entry} />
        </label>
        <label className={label}>
          Email
          <input
            placeholder="Enter your email id"
            type="email"
            className={entry}
          />
        </label>
        <label className={label}>
          Profession
          <select className={entry} defaultValue="Choose a profession">
            <option disabled>Choose a profession</option>
            <option>Agent</option>
            <option>Homebuyer</option>
          </select>
        </label>
      </div>
      <label className={label}>
        Reason for your enquiry
        <textarea
          placeholder="Write your message here"
          className={entry}
          rows={3}
        />
      </label>
      <button className={message_button}>Send message</button>
    </div>
  );
}
