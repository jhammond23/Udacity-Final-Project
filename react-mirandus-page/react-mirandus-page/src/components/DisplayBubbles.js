import {useState} from 'react';
import React from 'react';
import { BubblesIn, BubblesOut } from './Bubbles';


export default function DisplayBubbles({race, myRace, deed, myDeed}) {
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
        >{myRace}{myDeed}</button>
    
        {/* 👇️ show elements on click */}

        <div
          style={{
            left: "0",
            transition: "all 1s",
            visibility: !isShown ? "hidden" : "visible",
          }}
        >
        { !isShown && <BubblesOut race={race} deed={deed} /> }

        </div>
        { isShown && <BubblesIn race={race} deed={deed} />}

        
    </div>
    );
}
