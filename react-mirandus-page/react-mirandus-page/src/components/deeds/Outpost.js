import React from 'react'
import { useState } from 'react';
import Deed from '../Deed';
import DisplayBubbles from '../DisplayBubbles';

//NFT Img
import outpostImg from '../NFTpics/landDeeds/outpost/outpost.png';

//3D Img
import outpostThreeDImg from '../NFTpics/landDeeds/outpost/outpost3D.png';

//Flat Img
import outpostFlatImg from '../NFTpics/landDeeds/outpost/outpostLayout.png';


const outposts = [
    {
        id : 27,
        name : 'Outpost',
        description : `There are 200 Outpost deeds. An outpost has basic defensive walls that surround makeshift structures.`,
        rarity : 'Rare',
        threeDImg : outpostThreeDImg,
        total : 200,
        flatImg : outpostFlatImg,
        Img : outpostImg,
        houseSize : '10x20',
        FP5x5 : 4,
        BP5x5 : 4,
        RP5x5 : 0,
        BP10x10 : 1,
        BP10x20 : 0,
        BP20x20 : 0,
        BP20x40 : 0,
        sDeco : 4,
        mDeco : 0,
        lDeco : 0,
    }
]

let myDeed = 'Outpost'

const Outpost = () => {
    return (
        <div>
            {outposts.map((outpost) => (
                <div>
                    <Deed deed={outpost} />
                </div>
            ))}
        <DisplayBubbles race={outposts} myDeed={myDeed}/>

        </div>
    )
}

export { Outpost, outposts}