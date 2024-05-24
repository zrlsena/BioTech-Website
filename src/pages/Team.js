import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import 'boxicons';
import ScrollReveal from 'scrollreveal';
import Footer from "../components/Footer";

function Team() {

  useEffect(() => {
    ScrollReveal({ reset: true, distance: '60px', duration: 2500, delay: 400 });
    ScrollReveal().reveal('.team-section', { delay: 500, origin: 'left' });
  }, []);

  return (
    <div>
      <Navbar />

      <section className="team-section">
        <div className="team-title">
          <h1>Our Team</h1>
        </div>

        <div className="team-cards">

          <div className="team-card">
            <div className="image">
              <img src="images/p1.jpg" />
            </div>
            <div className="team-detail">
              <h3>Person1</h3>
              <p>Akademik Danışman</p>
              <div className="p-icons">
                <a href="mailto:ssenazorlu@gmail.com"><box-icon name='gmail' type='logo' animation='tada-hover' color='#0071e3' ></box-icon></a>
                <a href="https://www.linkedin.com/in/sena-z-4b57721a3/"><box-icon name='linkedin' type='logo' animation='tada-hover' color='#0071e3' ></box-icon></a>
              </div>
            </div>
          </div>



          <div className="team-card">
            <div className="image">
              <img src="images/p2.jpg" />
            </div>
            <div className="team-detail">
              <h3>Person2</h3>
              <p>Proje Yürütücüsü</p>
              <div className="p-icons">
                <a href="mailto:ssenazorlu@gmail.com"><box-icon name='gmail' type='logo' animation='tada-hover' color='#0071e3' ></box-icon></a>
                <a href="https://www.linkedin.com/in/sena-z-4b57721a3/"><box-icon name='linkedin' type='logo' animation='tada-hover' color='#0071e3' ></box-icon></a>
              </div>
            </div>
          </div>



          <div className="team-card">
            <div className="image">
              <img src="images/p3.jpg" />
            </div>
            <div className="team-detail">
              <h3>Person3</h3>
              <p>Proje Ortağı</p>
              <div className="p-icons">
                <a href="mailto:ssenazorlu@gmail.com"><box-icon name='gmail' type='logo' animation='tada-hover' color='#0071e3' ></box-icon></a>
                <a href="https://www.linkedin.com/in/sena-z-4b57721a3/"><box-icon name='linkedin' type='logo' animation='tada-hover' color='#0071e3' ></box-icon></a>
              </div>
            </div>
          </div>


          <div className="team-card">
            <div className="image">
              <img src="images/p4.jpg" />
            </div>
            <div className="team-detail">
              <h3>Person4</h3>
              <p>Proje Ortağı</p>
              <div className="p-icons">
                <a href="mailto:ssenazorlu@gmail.com"><box-icon name='gmail' type='logo' animation='tada-hover' color='#0071e3' ></box-icon></a>
                <a href="https://www.linkedin.com/in/sena-z-4b57721a3/"><box-icon name='linkedin' type='logo' animation='tada-hover' color='#0071e3' ></box-icon></a>
              </div>
            </div>
          </div>

        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default Team;