import React, { useEffect } from "react";
import Navbar from "../components/Navbar";

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
                <a href="mailto:nisatan@yahoo.com"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAbBJREFUSEvt1j9sTlEYx/FPg8RgKLEZTSxtF4nFZLNhIaQ2MTRNG2liwmKQaOPPICYJiQHd2sVo64BuXcTUsRWpjeA+cl45rnvf+77eW61wtnvPc37f8/w5zzlDtmgMbRHXf/Afi/y2CfUR3MZ+TGJxwBAcwzh2YQ6vO3q5x4fwCrsz2E1cwZc+N7ADNzCTrdvASLGRd/EvB09htgLwEmew2iP8AJ7iaIX9RBHNe2XwNVytEX+P81hogJ/AoyJde2vsrhf/g/OTx93AHZ07uIxPJeHI4S2ER93Gb4NDdBmnigi8TYSDeJ7y15SNgcAh/hGXEEUUOdvTREzzA4N75Pxi9neAo0rPlQqxm8df8TidgrJdpcdxlL6XemmMYhjz2NcQ43WcxIe8S2Vr+gZHJUdjCHi01aqxlKDRaGKzP9pjE7juHI/hTVq8M3W38nm9i2l8TnatgzubP42H6eMCnlWkp1WPc/3D6fJYqamLTQN3q7NNC3VTA+kLfBH3KxTz4moCdubrwMF4EEb5fRyvjic4XlJvAxxN5QXOFjfYWhncqzet2G2bx14r3vQi8u95/A2I1V0fhbK+uwAAAABJRU5ErkJggg=="/></a>
                <a href="https://www.linkedin.com/in/nisa-tan-6086171a2/"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAX1JREFUSEvt1rFLVlEYx/HPCw4hNBi0CA0pLo4F1lCSglNjmyAIDYUhOCQJEYmDhA42hPYHCG21uEiJUVuQtDVoTdaogg61iPfIDS4PqSDn5RX1bPd3zn2+5/ec5zz31jRo1BrEdeLAg7iMJazUIyv/c/wZtyqwAcznhkfwA7wOkO/orDf4eQEYD5AdXKw3+DY+Bcgb9NcbnOI/xBha8Q73kVxnHSfuOh3X3SV04BfWDwsSHV/Fz/DCLB6V2mNMh/kWdCMV5rXK3DYWkW7KRtxEDvAIXh7ibg1d2KyuyQH+gwtHnM1TTOYGp3i7+IHfZdqjodR2r+cGJ8epxX4tA9/BezRVQGljzfj7T8uR6lcYDqlewN2gpWpP570/coDv4W2AzCAVXXXcwJec4L4i1R8C5BkmgtaDjweB28oiqb4zh6FSGC3OaioE7MVy0J4Ulf7iHHye6moNnL3iSs3+ZrgG6du6WmpX0B7mvxXNYitoR647NX8gwfjBjw1zvAfOjXIfeRRb7AAAAABJRU5ErkJggg=="/></a>
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
                <a href="mailto:nisatan@yahoo.com"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAbBJREFUSEvt1j9sTlEYx/FPg8RgKLEZTSxtF4nFZLNhIaQ2MTRNG2liwmKQaOPPICYJiQHd2sVo64BuXcTUsRWpjeA+cl45rnvf+77eW61wtnvPc37f8/w5zzlDtmgMbRHXf/Afi/y2CfUR3MZ+TGJxwBAcwzh2YQ6vO3q5x4fwCrsz2E1cwZc+N7ADNzCTrdvASLGRd/EvB09htgLwEmew2iP8AJ7iaIX9RBHNe2XwNVytEX+P81hogJ/AoyJde2vsrhf/g/OTx93AHZ07uIxPJeHI4S2ER93Gb4NDdBmnigi8TYSDeJ7y15SNgcAh/hGXEEUUOdvTREzzA4N75Pxi9neAo0rPlQqxm8df8TidgrJdpcdxlL6XemmMYhjz2NcQ43WcxIe8S2Vr+gZHJUdjCHi01aqxlKDRaGKzP9pjE7juHI/hTVq8M3W38nm9i2l8TnatgzubP42H6eMCnlWkp1WPc/3D6fJYqamLTQN3q7NNC3VTA+kLfBH3KxTz4moCdubrwMF4EEb5fRyvjic4XlJvAxxN5QXOFjfYWhncqzet2G2bx14r3vQi8u95/A2I1V0fhbK+uwAAAABJRU5ErkJggg=="/></a>
                <a href="https://www.linkedin.com/in/nisa-tan-6086171a2/"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAX1JREFUSEvt1rFLVlEYx/HPCw4hNBi0CA0pLo4F1lCSglNjmyAIDYUhOCQJEYmDhA42hPYHCG21uEiJUVuQtDVoTdaogg61iPfIDS4PqSDn5RX1bPd3zn2+5/ec5zz31jRo1BrEdeLAg7iMJazUIyv/c/wZtyqwAcznhkfwA7wOkO/orDf4eQEYD5AdXKw3+DY+Bcgb9NcbnOI/xBha8Q73kVxnHSfuOh3X3SV04BfWDwsSHV/Fz/DCLB6V2mNMh/kWdCMV5rXK3DYWkW7KRtxEDvAIXh7ibg1d2KyuyQH+gwtHnM1TTOYGp3i7+IHfZdqjodR2r+cGJ8epxX4tA9/BezRVQGljzfj7T8uR6lcYDqlewN2gpWpP570/coDv4W2AzCAVXXXcwJec4L4i1R8C5BkmgtaDjweB28oiqb4zh6FSGC3OaioE7MVy0J4Ulf7iHHye6moNnL3iSs3+ZrgG6du6WmpX0B7mvxXNYitoR647NX8gwfjBjw1zvAfOjXIfeRRb7AAAAABJRU5ErkJggg=="/></a>
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
                <a href="mailto:nisatan@yahoo.com"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAbBJREFUSEvt1j9sTlEYx/FPg8RgKLEZTSxtF4nFZLNhIaQ2MTRNG2liwmKQaOPPICYJiQHd2sVo64BuXcTUsRWpjeA+cl45rnvf+77eW61wtnvPc37f8/w5zzlDtmgMbRHXf/Afi/y2CfUR3MZ+TGJxwBAcwzh2YQ6vO3q5x4fwCrsz2E1cwZc+N7ADNzCTrdvASLGRd/EvB09htgLwEmew2iP8AJ7iaIX9RBHNe2XwNVytEX+P81hogJ/AoyJde2vsrhf/g/OTx93AHZ07uIxPJeHI4S2ER93Gb4NDdBmnigi8TYSDeJ7y15SNgcAh/hGXEEUUOdvTREzzA4N75Pxi9neAo0rPlQqxm8df8TidgrJdpcdxlL6XemmMYhjz2NcQ43WcxIe8S2Vr+gZHJUdjCHi01aqxlKDRaGKzP9pjE7juHI/hTVq8M3W38nm9i2l8TnatgzubP42H6eMCnlWkp1WPc/3D6fJYqamLTQN3q7NNC3VTA+kLfBH3KxTz4moCdubrwMF4EEb5fRyvjic4XlJvAxxN5QXOFjfYWhncqzet2G2bx14r3vQi8u95/A2I1V0fhbK+uwAAAABJRU5ErkJggg=="/></a>
                <a href="https://www.linkedin.com/in/nisa-tan-6086171a2/"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAX1JREFUSEvt1rFLVlEYx/HPCw4hNBi0CA0pLo4F1lCSglNjmyAIDYUhOCQJEYmDhA42hPYHCG21uEiJUVuQtDVoTdaogg61iPfIDS4PqSDn5RX1bPd3zn2+5/ec5zz31jRo1BrEdeLAg7iMJazUIyv/c/wZtyqwAcznhkfwA7wOkO/orDf4eQEYD5AdXKw3+DY+Bcgb9NcbnOI/xBha8Q73kVxnHSfuOh3X3SV04BfWDwsSHV/Fz/DCLB6V2mNMh/kWdCMV5rXK3DYWkW7KRtxEDvAIXh7ibg1d2KyuyQH+gwtHnM1TTOYGp3i7+IHfZdqjodR2r+cGJ8epxX4tA9/BezRVQGljzfj7T8uR6lcYDqlewN2gpWpP570/coDv4W2AzCAVXXXcwJec4L4i1R8C5BkmgtaDjweB28oiqb4zh6FSGC3OaioE7MVy0J4Ulf7iHHye6moNnL3iSs3+ZrgG6du6WmpX0B7mvxXNYitoR647NX8gwfjBjw1zvAfOjXIfeRRb7AAAAABJRU5ErkJggg=="/></a>
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
                <a href="mailto:nisatan@yahoo.com"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAbBJREFUSEvt1j9sTlEYx/FPg8RgKLEZTSxtF4nFZLNhIaQ2MTRNG2liwmKQaOPPICYJiQHd2sVo64BuXcTUsRWpjeA+cl45rnvf+77eW61wtnvPc37f8/w5zzlDtmgMbRHXf/Afi/y2CfUR3MZ+TGJxwBAcwzh2YQ6vO3q5x4fwCrsz2E1cwZc+N7ADNzCTrdvASLGRd/EvB09htgLwEmew2iP8AJ7iaIX9RBHNe2XwNVytEX+P81hogJ/AoyJde2vsrhf/g/OTx93AHZ07uIxPJeHI4S2ER93Gb4NDdBmnigi8TYSDeJ7y15SNgcAh/hGXEEUUOdvTREzzA4N75Pxi9neAo0rPlQqxm8df8TidgrJdpcdxlL6XemmMYhjz2NcQ43WcxIe8S2Vr+gZHJUdjCHi01aqxlKDRaGKzP9pjE7juHI/hTVq8M3W38nm9i2l8TnatgzubP42H6eMCnlWkp1WPc/3D6fJYqamLTQN3q7NNC3VTA+kLfBH3KxTz4moCdubrwMF4EEb5fRyvjic4XlJvAxxN5QXOFjfYWhncqzet2G2bx14r3vQi8u95/A2I1V0fhbK+uwAAAABJRU5ErkJggg=="/></a>
                <a href="https://www.linkedin.com/in/nisa-tan-6086171a2/"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAX1JREFUSEvt1rFLVlEYx/HPCw4hNBi0CA0pLo4F1lCSglNjmyAIDYUhOCQJEYmDhA42hPYHCG21uEiJUVuQtDVoTdaogg61iPfIDS4PqSDn5RX1bPd3zn2+5/ec5zz31jRo1BrEdeLAg7iMJazUIyv/c/wZtyqwAcznhkfwA7wOkO/orDf4eQEYD5AdXKw3+DY+Bcgb9NcbnOI/xBha8Q73kVxnHSfuOh3X3SV04BfWDwsSHV/Fz/DCLB6V2mNMh/kWdCMV5rXK3DYWkW7KRtxEDvAIXh7ibg1d2KyuyQH+gwtHnM1TTOYGp3i7+IHfZdqjodR2r+cGJ8epxX4tA9/BezRVQGljzfj7T8uR6lcYDqlewN2gpWpP570/coDv4W2AzCAVXXXcwJec4L4i1R8C5BkmgtaDjweB28oiqb4zh6FSGC3OaioE7MVy0J4Ulf7iHHye6moNnL3iSs3+ZrgG6du6WmpX0B7mvxXNYitoR647NX8gwfjBjw1zvAfOjXIfeRRb7AAAAABJRU5ErkJggg=="/></a>
              </div>
            </div>
            </div>

          </div>
      </section>
    </div>
  );
};

export default Team;