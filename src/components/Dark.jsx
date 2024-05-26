import React, { useEffect, useState } from 'react';

function Dark() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  
 
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.getElementById("body").className = isDarkMode ? "body" : "body dark"
    
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
