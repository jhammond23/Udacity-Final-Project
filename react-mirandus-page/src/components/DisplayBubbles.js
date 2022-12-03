import {useState} from 'react';
import React from 'react';
import { BubblesIn, BubblesOut } from './Bubbles';
import Humans from './Humans';


export default function DisplayBubbles({race, myRace}) {
  const [isShown, setIsShown] = useState(false);

  const handleClick = event => {
    // 👇️ toggle shown state
    setIsShown(current => !current);

    // 👇️ or simply set it to true
    // setIsShown(true);
  };
  return (
    <div>
        <button className={isShown ? 'bubbleDisplayerOn' : 'bubbleDisplayerOff'} onClick={handleClick}
        >{myRace}</button>
    
        {/* 👇️ show elements on click */}

        <div
          style={{
            left: "0",
            transition: "all 1s",
            visibility: !isShown ? "hidden" : "visible",
          }}
        >
        { !isShown && <BubblesOut race={race} /> }

        </div>
        { isShown && <BubblesIn race={race} />}

        
    </div>
    );
}
