import { useEffect, useState } from "react";
import { Dwarves } from './Dwarves';
import { Humans } from './Humans';
import '../mirandushub/mirandushub.css';
import Exemplar from "./Exemplar";
import { useRef } from "react";



const BubblesOut = ({race}) => {
    const [True, setTrue] = useState(true);

//uncomment below for slide-out animation
    return (
        <div className={ `r-bubbleCont ${true ? 'notActive' : 'notActive'}`}>
            {race.map((bubble) => (
                <button className='r-bubbleBtn'>
                    <a href={'#' + bubble.name} key={race.charImg}>
                        <img src={bubble.charImg} className='r-topNavBubbles' alt={bubble.name}></img>
                        <div className='r-namePlate'>{bubble.name}</div>
                    </a>
                </button>
            ))}
        </div>
  )
}

const BubblesIn = ({race}) => {
    const [False, setFalse] = useState(false);
    const ref = useRef(null);
    const scroll = (scrollOffset) => {
        ref.current.scrollLeft += scrollOffset;
      };
  return (
    <div className={ False ? 'r-bubbleCont active' : `r-bubbleCont active`} ref={ref}>
        <button className="r-scrollBtnL" onClick={() => scroll(-150)}></button>
        {race.map((bubble) => (
            <button className='r-bubbleBtn'>
                <a href={'#' + bubble.name} key={race.charImg}>
                    <img src={bubble.charImg} className='r-topNavBubbles' alt={bubble.name}></img>
                    <div className='r-namePlate'>{bubble.name}</div>
                </a>
            </button>
        ))}


        <button className="r-scrollBtnR" onClick={() => scroll(150)}></button>

    </div>
  )
}

export { BubblesIn, BubblesOut }