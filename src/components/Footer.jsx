import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <p className="btn"> © {currentYear} Sena Zorlu. All rights reserved.</p>
      
      <a  href="https://www.instagram.com/nanowiss.co?igsh=c2wzaHN1azU5Nm80"><box-icon name='instagram' type='logo' color='#0071e3' ></box-icon></a>
      <a  href="info@nanowiss.com"><box-icon type='solid' name='envelope' color='#0071e3'></box-icon></a>

    </footer>
  );
}

export default Footer;