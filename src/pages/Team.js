import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import 'boxicons';

import ScrollReveal from 'scrollreveal'; 

function Team() {

  useEffect(() => {
    ScrollReveal({ reset: true, distance: '60px', duration: 2500, delay: 400 });
    ScrollReveal().reveal('.team-section', { delay: 500, origin: 'left' });

  }, []); 
  
  return (
  <div>
    <Navbar/>
    
      <section className="team-section">
        <div className="team-title">
          <h1>Our Team</h1>
        </div>

        <div className="team-cards">
         
          <div className="team-card">
            <div className="image">
              <img src="images/team.jpg"/>
            </div>
            <div className="team-detail">
              <h3>Nisa</h3>
              <p>Proje Ortağı</p>
              <div className="p-icons">
                <a href="mailto:nisatan@yahoo.com"><box-icon name='gmail' type='logo' animation='tada' color='#e040fb' ></box-icon></a>
                <a href="https://www.linkedin.com/in/nisa-tan-6086171a2/"><box-icon name='linkedin' type='logo' animation='tada' color='#e040fb' ></box-icon></a>
              </div>
            </div>
            </div>
          

          
            <div className="team-card">
            <div className="image">
              <img src="images/team.jpg"/>
            </div>
            <div className="team-detail">
              <h3>Nisa</h3>
              <p>Proje Ortağı</p>
              <div className="p-icons">
                <a href="mailto:nisatan@yahoo.com"><box-icon name='gmail' type='logo' animation='tada' color='#e040fb' ></box-icon></a>
                <a href="https://www.linkedin.com/in/nisa-tan-6086171a2/"><box-icon name='linkedin' type='logo' animation='tada' color='#e040fb' ></box-icon></a>
              </div>
            </div>
            </div>
          

          
            <div className="team-card">
            <div className="image">
              <img src="images/team.jpg"/>
            </div>
            <div className="team-detail">
              <h3>Nisa</h3>
              <p>Proje Ortağı</p>
              <div className="p-icons">
                <a href="mailto:nisatan@yahoo.com"><box-icon name='gmail' type='logo' animation='tada' color='#e040fb' ></box-icon></a>
                <a href="https://www.linkedin.com/in/nisa-tan-6086171a2/"><box-icon name='linkedin' type='logo' animation='tada' color='#e040fb' ></box-icon></a>
              </div>
            </div>
            </div>
          

            <div className="team-card">
            <div className="image">
              <img src="images/team.jpg"/>
            </div>
            <div className="team-detail">
              <h3>Nisa</h3>
              <p>Proje Ortağı</p>
              <div className="p-icons">
                <a href="mailto:nisatan@yahoo.com"><box-icon name='gmail' type='logo' animation='tada' color='#e040fb' ></box-icon></a>
                <a href="https://www.linkedin.com/in/nisa-tan-6086171a2/"><box-icon name='linkedin' type='logo' animation='tada' color='#e040fb' ></box-icon></a>
              </div>
            </div>
            </div>

          </div>
      </section>
    </div>
  );
};

export default Team;