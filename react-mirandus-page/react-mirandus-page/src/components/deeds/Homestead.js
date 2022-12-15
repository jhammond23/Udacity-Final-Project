import React from 'react'
import { useState } from 'react';
import Deed from '../Deed';
import DisplayBubbles from '../DisplayBubbles';

//NFT Img
import homeImg from '../NFTpics/landDeeds/homestead/homestead.png';

//3D Img
import homeThreeDImg from '../NFTpics/landDeeds/homestead/homestead3D.png';

//Flat Img
import homeFlatImg from '../NFTpics/landDeeds/homestead/homesteadLayout.png';


const homesteads = [
    {
        id : 26,
        name : 'Homestead',
        description : `There are 1,000 Homestead deeds. A small place to lay your head and rest from your adventures. What were you expecting? It’s a Homestead!`,
        rarity : 'Uncommon',
        threeDImg : homeThreeDImg,
        total : 1000,
        flatImg : homeFlatImg,
        Img : homeImg,
        houseSize : '10x10',
        FP5x5 : 1,
        BP5x5 : 1,
        RP5x5 : 0,
        BP10x10 : 0,
        BP10x20 : 0,
        BP20x20 : 0,
        BP20x40 : 0,
        sDeco : 1,
        mDeco : 0,
        lDeco : 0,
    }
]

let myDeed = 'Homestead'

const Homestead = () => {
    return (
        <div>
            {homesteads.map((homestead) => (
                <div>
                    <Deed deed={homestead} />
                </div>
            ))}
        <DisplayBubbles race={homesteads} myDeed={myDeed}/>

        </div>
    )
}

export { Homestead, homesteads}