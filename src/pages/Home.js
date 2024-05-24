import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import ScrollReveal from 'scrollreveal';
import Footer from "../components/Footer";

function Home() {

  useEffect(() => {
    ScrollReveal({ reset: true, distance: '60px', duration: 2500, delay: 400 });
    ScrollReveal().reveal('.home .main-title', { delay: 500, origin: 'left' });
    ScrollReveal().reveal('.home .fcontent', { delay: 700, origin: 'right' });

  }, []);


  return (
    <div>
      <Navbar />
      <div>
        <section>

          <div className="home">
            <h1 className="main-title">Next Generation <br /> NanoBioTech Solutions</h1>
            <div>
              <img className="image" src="./images/microscope.png" alt="" />
            </div>
            <div>


              <div className="home fcontent">
                <h3>NanoWISS</h3>
                <ul>
                  <li>nanoWISS is a deep technology and social impact startup that aims to faciliate applications in areas such as <br />
                    treatment and agriculture that produce nanoparticles that set out with the ideal of treating<br /> biofilm bacterial
                    infections in cystic fibrosis disease and allowing patients <br /> to breathe deeper and aims to make nanoparticle production
                    <br /> efficient and to raise awareness of rare diseases.</li>

                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer/>
    </div>

  );
}

export default Home;