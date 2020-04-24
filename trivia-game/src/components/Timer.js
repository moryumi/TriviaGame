
import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom'


 function Timer() {
    const [seconds, setSeconds] = useState(15);
    const [isActive, setIsActive] = useState(true);
  

    useEffect(() => {
      let interval = null;
      if (seconds>0) {
        interval = setInterval(() => {
          setSeconds(seconds => seconds - 1);
        }, 1000);
      } else if (seconds == 0) {
          
        setIsActive(false);
        clearInterval(interval);
      }
      return () => clearInterval(interval);
    },[isActive,seconds]);
  
    return (
        <div>
            {isActive ? seconds  : <Redirect to='/timesup'/>} 
        
        </div>
        
    );
  };

export default Timer;