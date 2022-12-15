import React from 'react'
import { useState } from 'react';
import Deed from '../Deed';
import DisplayBubbles from '../DisplayBubbles';

//NFT Img
import farmHamlImg from '../NFTpics/landDeeds/hamlet/farmingHamlet.png';
import rancHamlImg from '../NFTpics/landDeeds/hamlet/ranchingHamlet.png';
//3D Img
import farmHamlThreeDImg from '../NFTpics/landDeeds/hamlet/farmingHamlet3D.png';
import rancHamlThreeDImg from '../NFTpics/landDeeds/hamlet/ranchingHamlet3D.png';

//Flat Img
import farmHamlFlatImg from '../NFTpics/landDeeds/hamlet/farmingHamletLayout.png';
import rancHamlFlatImg from '../NFTpics/landDeeds/hamlet/ranchingHamletLayout.png';

const hamlets = [
    {
        id : 28,
        name : 'Farming Hamlet',
        description : `The Farming Hamlet is one of the two types of Hamlets in Mirandus. There are 200 total Farming Hamlets available to own in Mirandus. Making them quite plentiful through the land. More crops to you!`,
        rarity : 'Rare',
        threeDImg : farmHamlThreeDImg,
        total : 200,
        flatImg : farmHamlFlatImg,
        Img : farmHamlImg,
        houseSize : '10x20',
        FP5x5 : 36,
        BP5x5 : 4,
        RP5x5 : 4,
        BP10x10 : 3,
        BP10x20 : 0,
        BP20x20 : 0,
        BP20x40 : 0,
        sDeco : 8,
        mDeco : 0,
        lDeco : 0,
    },
    {
        id : 29,
        name : 'Ranching Hamlet',
        description : `The Ranching Hamlet is one of the two types of Hamlets in Mirandus. There are 200 total Ranching Hamlet available to own in Mirandus. Making them quite plentiful through the land. More Milk and Bacon to you!`,
        rarity : 'Rare',
        threeDImg : rancHamlThreeDImg,
        total : 200,
        flatImg : rancHamlFlatImg,
        Img : rancHamlImg,
        houseSize : '10x20',
        FP5x5 : 10,
        BP5x5 : 5,
        RP5x5 : 33,
        BP10x10 : 3,
        BP10x20 : 0,
        BP20x20 : 0,
        BP20x40 : 0,
        sDeco : 5,
        mDeco : 0,
        lDeco : 0,
    }
]

let myDeed = 'Hamlets'

const Hamlet = () => {
    return (
        <div>
            {hamlets.map((hamlet) => (
                <div>
                    <Deed deed={hamlet} />
                </div>
            ))}
        <DisplayBubbles race={hamlets} myDeed={myDeed}/>

        </div>
    )
}

export { Hamlet, hamlets}