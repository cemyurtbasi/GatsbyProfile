import React from "react";
import HeadlineWithFocus from "../components/HeadlineWithFocus";
import Obfuscate from "react-obfuscate";
import { FaEnvelopeO, FaTwitter, FaGithub, FaInstagram } from "react-icons/lib/fa/";
import Helmet from "react-helmet";

export default props => {
  return (
    <div className="c-content-box">
      <Helmet title="Contact me" />

      <HeadlineWithFocus>
        You can get in touch <span>anytime through</span>
      </HeadlineWithFocus>
      <ul className="c-contact-list">
        <li className="c-contact-list__item">
          <FaEnvelopeO />
          <Obfuscate email="cemyurtbasi@gmail.com" />
        </li>
        <li className="c-contact-list__item">
          <FaTwitter />
          <a
            href="https://twitter.com/cemyurtbasi"
            target="_blank"
            rel="noopener noreferrer"
          >
            @cemyurtbasi
          </a>
        </li>
        <li className="c-contact-list__item">
          <FaGithub />
          <a
            href="https://github.com/cemyurtbasi"
            target="_blank"
            rel="noopener noreferrer"
          >
            cemyurtbasi
          </a>
        </li>
        <li className="c-contact-list__item">
          <FaInstagram />
          <a
            href="https://instagram.com/cmyrtbs"
            target="_blank"
            rel="noopener noreferrer"
          >
            cmyrtbs
          </a>
        </li>
      </ul>
      <h2
        className={`
        js-action-button-anchor
        c-content-box__subheadline 
        c-content-box__subheadline--with-button
      `}
      >
        Do not forget
      </h2>
    </div>
  );
};
