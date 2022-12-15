import { useEffect, useState } from "react";
import { Dwarves } from './Dwarves';
import { Humans } from './Humans';
import '../mirandushub/mirandushub.css';
import Exemplar from "./Exemplar";
import { useRef } from "react";
import Tilt from 'react-parallax-tilt';



const BubblesOut = ({race, deed}) => {
    const [True, setTrue] = useState(true);

//uncomment below for slide-out animation
    return (
        <div className={`r-bubbleCont ${true ? 'notActive' : 'notActive'}`}>
            {race.map((bubble) => (
                <Tilt className='r-bubbleBtn'>
                    <a href={'#' + bubble.name} key={race.Img}>
                        <img src={bubble.Img} className='r-topNavBubbles' alt={bubble.name}></img>
                        <div className='r-namePlate'>{bubble.name}</div>
                    </a>
                </Tilt>
            ))}
        </div>
  )
}

const BubblesIn = ({race, deed}) => {
    const [False, setFalse] = useState(false);
    const ref = useRef(null);
    const scroll = (scrollOffset) => {
        ref.current.scrollLeft += scrollOffset;
      };
  return (
    <div className={ False ? 'r-bubbleCont active' : `r-bubbleCont active`} ref={ref}>
        <button className="r-scrollBtnL" onClick={() => scroll(-150)}></button>
        {race.map((bubble) => (
            <Tilt className='r-bubbleBtn'>
                <a href={'#' + bubble.name} key={race.Img}>
                    <img src={bubble.Img} className='r-topNavBubbles' alt={bubble.name}></img>
                    <div className='r-namePlate'>{bubble.name}</div>
                </a>
            </Tilt>
        ))}


        <button className="r-scrollBtnR" onClick={() => scroll(150)}></button>

    </div>
  )
}

export { BubblesIn, BubblesOut }