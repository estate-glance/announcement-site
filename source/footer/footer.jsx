import { container, content, branding, socials } from "./footer.module.css";
import fullLogo from "../../public/full-logo.png";
import linkedin from "../../public/linkedin.png";

export function FooterSection() {
  return (
    <div className={container}>
      <div className={content}>
        <div className={branding}>
          <img src={fullLogo} />
          <p>Copyright © 2024 Estate Glance inc</p>
          <p>All Rights Reserved</p>
        </div>
        <div className={socials}>
          <p>Follow us</p>
          <a href="https://www.linkedin.com/company/pinhous">
            <img src={linkedin} />
          </a>
        </div>
      </div>
    </div>
  );
}
