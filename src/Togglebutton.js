import React, { useState } from 'react';
                                               // on off toggle button
const ToggleButton = () => {
  const [state, setIsOn] = useState(false);

  return (
    <div style={{marginLeft:"45%"  }} >
    <h1 style={{color:setIsOn ?'green':'red'}} >{state? 'On' : 'Off'}  </h1>
    <button style={{backgroundColor:"lightblue"}} onClick={() => setIsOn(!state)}>

      {state? 'On' : 'Off'}
    </button>
    </div>
  );
};

export default ToggleButton;