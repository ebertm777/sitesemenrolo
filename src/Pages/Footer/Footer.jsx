import React from "react";

import Whatsapp from "../../Assets/Image/whatsapp.png";
import Gmail from "../../Assets/Image/gmail.png";
import { EmailIcon, FooterBody, WhatsappIcon } from "./footerStyles";

export const Footer = () => {
  return (
    <FooterBody>
      <WhatsappIcon>
        <img src={Whatsapp} alt="gmail" style={{ maxWidth: "35px" }}></img>
        <p style={{ marginLeft: "3px", maxWidth: "220px" }}>21 99846-1079</p>
      </WhatsappIcon>
      <EmailIcon>
        <img src={Gmail} alt="gmail" style={{ maxWidth: "35px" }}></img>
        <p style={{ marginLeft: "3px", maxWidth: "220px" }}>sitesemenrolo@gmail.com</p>
      </EmailIcon>
    </FooterBody>
  );
};
