import React, {useState}from "react";
import { Link } from "react-router-dom";
import Dark from './Dark';


function Navbar() {


const [isOpen, setIsOpen] = useState(false);

const toggleMenu = () =>{
  setIsOpen(!isOpen);
};

  return (
  <div>
    <body>
    <header>
    
      <div className="navbar">
        <div  className="logo"><a href="/">LOGO</a></div>
        
        <ul className="links">
          <li><a href="/">Anasayfa</a></li>
          <li><a href="/about">Hakkımızda</a></li>
          <li><a href="/team">Ekibimiz</a></li>
        </ul>
        <a href="https://www.instagram.com/zrlsena?igsh=aHQ5OGUwbzJxa2h4&utm_source=qr" className="action-btn" >Contact</a>
        
        <div className="toggle_btn">
        <i class={isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'} onClick={toggleMenu}></i>
        {isOpen && (
        <div className="dropdown-menu" >
          <li ><a href="/">Anasayfa</a></li>
          <li ><a href="/about">Hakkımızda</a></li>
          <li ><a href="/team">Ekibimiz</a></li>
          <li><a href="https://www.instagram.com/zrlsena?igsh=aHQ5OGUwbzJxa2h4&utm_source=qr" class="action-btn" >Contact</a></li>
          
        </div>
        )}
        </div>
      </div>

      <Dark/>
      
    </header>
    </body>
    </div>
  );
}

export default Navbar;
