import React from "react";
import Navbar from "../components/Navbar";

function Home() {
  return (<div>
    <Navbar/>
    <div>
    <section>
      
      <div className="home">
        <h1 className="main-title">Next Generation <br/> NanoBioTech Solutions</h1>
<div>
          <img src="./images/microscope.png" alt=""/>
          </div>
    <div>
      
        
            <div>
              <h3>NanoWISS</h3>
              <ul>
                <li>nanoWISS is a deep technology and social impact startup that aims to faciliate applications in areas such as 
                  treatment and agriculture that produce nanoparticles that set out with the ideal of treating biofilm bacterial 
                  infections in cystic fibrosis disease and allowing patients to breathe deeper and aims to make nanoparticle production 
                  efficient and to raise awareness of rare diseases.</li>
                
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
    </div>
  );
}

export default Home;