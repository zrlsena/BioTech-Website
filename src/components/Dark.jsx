import React, { useEffect, useState } from 'react';

function Dark() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  
 
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    //  document.getElementById("atesbody").style.backgroundColor = isDarkMode ? "#F5F5F7" : "#1D1D1F" ;;
    // console.log(document.getElementById("atesbody").className)
    document.getElementById("atesbody").className = isDarkMode ? "body" : "body dark"
    localStorage.setItem('body dark', isDarkMode);
  };


  return (<div>
    <body>
      <div id="mode" className={`mode ${isDarkMode ? 'active' : ''}`} onClick={toggleDarkMode}>
        <i className="indicator"></i>
      </div>
    </body>
  </div>
  );
};

export default Dark;
