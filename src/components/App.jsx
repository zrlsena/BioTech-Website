import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Team from '../pages/Team';
import Contact from '../pages/Contact';

function App() {

  return (

    <body>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/team' element={<Team />} />
          <Route path='/contact' element={<Contact />} />


        </Routes>
      </BrowserRouter>
    </body>
  );
}

export default App;
