import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <p className="btn"> © {currentYear} Sena Zorlu. All rights reserved.</p>
      
      <a  href="https://www.instagram.com/zrlsena?igsh=aHQ5OGUwbzJxa2h4&utm_source=qr"><box-icon name='instagram' type='logo' color='#86868B' ></box-icon></a>
      <a  href="mailto:ssenazorlu@gmail.com"><box-icon type='solid' name='envelope' color='#86868B'></box-icon></a>

    </footer>
  );
}

export default Footer;