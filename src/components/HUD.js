import React, { useState } from 'react';
import './HUD.css';

function HUD() {

  let [ pressCount, setPressCount ] = useState(0);

  const adjustHUD = () => {
    let offset;

    if (pressCount === 0) {
      offset = "-33vh";
    } else if (pressCount === 1) {
      offset = "-6vh";
    } else if (pressCount === 2) {
      offset = "-95vh";
    } else {
      offset = "-67vh";
    }
    document.getElementById("HUD").style.bottom = `${offset}`;
    
    pressCount <= 2
    ? setPressCount(pressCount + 1)
    : setPressCount(pressCount = 0);
  }

  return(
    <section id="HUD" className="HUD">
      <button className="HUD__pill-button" onClick={adjustHUD} />
    </section>
  );
}

export default HUD;