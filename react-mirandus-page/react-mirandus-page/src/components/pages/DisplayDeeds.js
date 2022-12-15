import React, { useEffect, useState } from 'react'
import Tilt from 'react-parallax-tilt';
import { useRef } from 'react';
import { Homestead } from '../deeds/Homestead';
import { Outpost } from '../deeds/Outpost';
import { Hamlet } from '../deeds/Hamlets';
import { Village } from '../deeds/Villages';
import { Town } from '../deeds/Towns';

const DisplayDeeds = () => {

    const [myDeed, setmyDeed] = useState('');
    const deeds = ['Homestead', 'Outpost', 'Hamlets', 'Villages', 'Towns']
    const ref = useRef(null);
    const scroll = (scrollOffset) => {
        ref.current.scrollLeft += scrollOffset;
      };

    return (
        <div className='r-deedsBG'>
            <header className='r-deedSelectorTitle'>EED</header>


            <br />

            <div className='r-deedSelectorContainer'>
                <div className='r-deedSelector' ref={ref}>
                    <button className='r-scrollBtnTL' onClick={() => scroll(-150)}></button>

                    {deeds.map((deed) => (
                        <Tilt>
                            <button className={`r-${deed}`}
                                onClick={() => setmyDeed(deed)}
                                key={deed}
                            >
                                <div className='r-deedNames'>{deed}</div>
                            </button>
                        </Tilt>

                    ))}
                    <button className='r-scrollBtnTR' onClick={() => scroll(150)}></button>

                </div>
            </div>
            <div className='r-background'>
                {myDeed === 'Homestead' && <Homestead />}
                {myDeed === 'Outpost' && <Outpost />}
                {myDeed === 'Hamlets' && <Hamlet />}
                {myDeed === 'Villages' && <Village />}
                {myDeed === 'Towns' && <Town />}

            </div>
        </div>

    )
}

export default DisplayDeeds