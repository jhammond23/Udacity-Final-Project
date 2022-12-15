import React, { useEffect, useState } from 'react'
import DisplayBubbles from './DisplayBubbles';
import { Dwarves } from './Dwarves';
import { Elves } from './Elves';
import { Halflings } from './Halflings';
import { Humans, humans } from './Humans';
import { Orcs } from './Orcs';
import Tilt from 'react-parallax-tilt';
import { useRef } from 'react';

const DisplayRace = () => {

    const [myRace, setMyRace] = useState('');
    const races = ['Humans', 'Dwarves', 'Orcs', 'Halflings', 'Elves']
    const ref = useRef(null);
    const scroll = (scrollOffset) => {
        ref.current.scrollLeft += scrollOffset;
      };

    return (
        <div className='r-exemplarBackground'>
            <header className='r-raceSelectorTitle'>XEMPLAR</header>


            <br />

            <div className='r-raceSelectorContainer'>
                <div className='r-raceSelector' ref={ref}>
                    <button className='r-scrollBtnTL' onClick={() => scroll(-150)}></button>

                    {races.map((race) => (
                        <Tilt>
                            <button className={`r-${race}`}
                                onClick={() => setMyRace(race)}
                                key={race}
                            >
                                <div className='r-raceNames'>{race}</div>
                            </button>
                        </Tilt>

                    ))}
                    <button className='r-scrollBtnTR' onClick={() => scroll(150)}></button>

                </div>
            </div>
            <div className='r-background'>
                {myRace === 'Humans' && <Humans />}
                {myRace === 'Dwarves' && <Dwarves />}
                {myRace === 'Orcs' && <Orcs />}
                {myRace === 'Halflings' && <Halflings />}
                {myRace === 'Elves' && <Elves />}
            </div>
        </div>

    )
}

export default DisplayRace