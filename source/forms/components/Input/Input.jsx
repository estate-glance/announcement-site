import { _label, input } from "./Input.module.css";

export function Input({ label, placeholder }) {
  return (
    <div>
      <label className={_label}>
        {label}
        <input className={input} placeholder={placeholder} />
      </label>
    </div>
  );
}
