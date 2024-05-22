import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import ScrollReveal from 'scrollreveal'; 


function About() {

  useEffect(() => {
    ScrollReveal({ reset: true, distance: '60px', duration: 2500, delay: 400 });

    ScrollReveal().reveal('.main-title, .section-title', { delay: 500, origin: 'left' });
    ScrollReveal().reveal('.sec-01 .image, .info', { delay: 600, origin: 'bottom' });
    ScrollReveal().reveal('.text-box', { delay: 700, origin: 'right' });
    ScrollReveal().reveal('.sec-02 .image', { delay: 500, origin: 'top' });


    
  }, []); 

  return (
  <div>
    <Navbar/>
    <body>
    <script src="https://unpkg.com/scrollreveal"></script>
    <section className="sec-01">
      <div className="container">
        <h2 className="main-title">Our Mission & Vision</h2>

    <div className="content">
        <div className="image">
          <img src="./images/2.jpg" alt=""/>
          </div>
            <div className="text-box">
              <h3>Our Mission</h3>
              <ul>
                <li>To play a catalytic role in transforming the education received from academia in the field of rare diseases and nanotechnology into products for industry</li>
                <li>Supporting young scientists and supporting their projects and development.</li>
                <li>Increasing social awareness in rare diseases.</li>
                <li>To facilitate nanoparticle production, enabling accessible and affordable drug production.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="sec-02">
        <div className="container">
          <h3 className="section-title">Vision</h3>
          <div className="content">
            <div className="image">
              <img src="/images/5.jpg" alt=""/>
            </div>
            <div className="info">
              <h4 className="info-title">Our Vision</h4>
              <ul>
                <li>To play a catalytic role in transforming the education received from academia in the field of rare diseases and nanotechnology into products for industry</li>
                <li>Supporting young scientists and supporting their projects and development.</li>
                <li>Increasing social awareness in rare diseases.</li>
                <li>To facilitate nanoparticle production, enabling accessible and affordable drug production.</li>
              </ul>

            </div>
          </div>
        </div>

      </section>
      
    </body>
  </div>
  );
}

export default About;