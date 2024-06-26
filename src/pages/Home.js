import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import ScrollReveal from 'scrollreveal';
import Footer from "../components/Footer";
import Team from "./Team.js";

function Home() {

  useEffect(() => {
    ScrollReveal({ reset: true, distance: '60px', duration: 2500, delay: 400 });
    ScrollReveal().reveal('.home .main-title', { delay: 500, origin: 'left' });
    ScrollReveal().reveal('.home .fcontent2 .image2 img', { delay: 300, origin: 'right' });

  }, []);


  return (
    <div>
       <img className="image1" src="./images/201.jpg" alt="" /> 
      <body id="body" className="body">
        <Navbar />
        <div>
          <section>
            <div className="home">

              <h1 className="main-title">Next Generation <br /> NanoBioTech Solutions</h1>
              <div className="ul1">
              <ul>
                    <li>nanoWISS is a deep technology and social impact<br /> startup that aims to faciliate applications in areas such as
                      treatment<br /> and agriculture that produce nanoparticles that set out <br />with the ideal of treating biofilm bacterial
                      infections in cystic fibrosis disease </li>

              </ul>
              </div>
              <div>
                <img className="image" src="./images/microscope.png" alt="" />
              </div>
              <div>


                <div className="home fcontent">
                  <h3>NanoWISS</h3>
                  <ul>
                    <li>nanoWISS is a deep technology and social impact startup that aims to faciliate applications in areas such as
                      treatment and agriculture that produce<br /> nanoparticles that set out with the ideal of treating biofilm bacterial
                      infections in cystic fibrosis disease and allowing patients to breathe deeper<br /> and aims to make nanoparticle production
                      efficient and to raise awareness of rare diseases.</li>

                  </ul>
                </div>

                <div className="home fcontent2">
                  <div className="pa">
                    <h3 className="pa-title">Projects</h3>
                    <ul>
                      <li>Reducing antibiotic resistance by treating various diseases, especially biofilm infections with nanoparticles.</li>
                      <li>Using nanoparticles to facilitate applications in agriculture and other sectors making nanoparticle production efficient and easy.</li>
                      <li>To protect nature and raise awareness of rare diseases while conducting our activities as a startup.</li>
                    </ul>
                  </div>
                  <div className="image2">
                    <img src="/images/5.jpg" alt="" />
                    <img src="/images/4.jpg" alt="" /><br />
                    <img src="/images/2.jpg" alt="" />
                    <img src="/images/3.jpg" alt="" />
                  </div>

                </div>

              </div>
            </div>
          </section>
        </div>
        <div id="team-section">
    <Team />
</div>
        <Footer />
      </body>
    </div>

  );
}

export default Home;