import React, { useState } from 'react';
import './HUD.css';

function HUD() {

  let [ pressCount, setPressCount ] = useState(0);

  const adjustHUD = () => {
    let styleAdjust

    // let offset = "";
    // let adjustHUD = document.getElementById("HUD").style.bottom = `${offset}`;


    if (pressCount === 0) {
      document.getElementById("HUD").style.bottom = "-67vh";
    } else if (pressCount === 1) {
      document.getElementById("HUD").style.bottom = "-33vh";
    } else if (pressCount === 2) {
      document.getElementById("HUD").style.bottom = "-6vh";
    } else {
      document.getElementById("HUD").style.bottom = "-95vh";
      setPressCount(pressCount = -1);
    }

    setPressCount(pressCount + 1);

  }

  return(
    <section id="HUD" className="HUD">
      <button className="HUD__pill-button" onClick={adjustHUD} />
    </section>
  );
}

export default HUD;