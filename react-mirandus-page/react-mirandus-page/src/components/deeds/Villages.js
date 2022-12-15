import React from 'react'
import { useState } from 'react';
import Deed from '../Deed';
import DisplayBubbles from '../DisplayBubbles';

//NFT Img
import villBaroImg from '../NFTpics/landDeeds/village/villageOfTheBaron.png';
import villEarlImg from '../NFTpics/landDeeds/village/villageOfTheEarl.png';
import villFarmImg from '../NFTpics/landDeeds/village/villageOfTheFarmer.png';
import villViscImg from '../NFTpics/landDeeds/village/villageOfTheViscount.png';
//3D Img
import villBaroThreeDImg from '../NFTpics/landDeeds/village/villageOfTheBaron3D.png';
import villEarlThreeDImg from '../NFTpics/landDeeds/village/villageOfTheEarl3D.png';
import villFarmThreeDImg from '../NFTpics/landDeeds/village/villageOfTheFarmer3D.png';
import villViscThreeDImg from '../NFTpics/landDeeds/village/villageOfTheViscount3D.png';

//Flat Img
import villBaroFlatImg from '../NFTpics/landDeeds/village/villageOfTheBaronLayout.png';
import villEarlFlatImg from '../NFTpics/landDeeds/village/villageOfTheEarlLayout.png';
import villFarmFlatImg from '../NFTpics/landDeeds/village/villageOfTheFarmerLayout.png';
import villViscFlatImg from '../NFTpics/landDeeds/village/villageOfTheViscountLayout.png';

const villages = [
    {
        id : 30,
        name : 'Village of the Baron',
        description : `The Village of the Baron is the third largest of the villages in the land. It is home to one of (20) Barons in Mirandus. There are several small and one medium decorative installation in this village.`,
        rarity : 'Epic',
        threeDImg : villBaroThreeDImg,
        total : 20,
        flatImg : villBaroFlatImg,
        Img : villBaroImg,
        houseSize : '20x20',
        FP5x5 : 7,
        BP5x5 : 8,
        RP5x5 : 0,
        BP10x10 : 8,
        BP10x20 : 0,
        BP20x20 : 0,
        BP20x40 : 0,
        sDeco : 11,
        mDeco : 1,
        lDeco : 0,
    },
    {
        id : 31,
        name : 'Village of the Earl',
        description : `A secure village with sturdy walls, located near the earl’s manor. The Village of the Earl is the largest of the village deeds. Home to one of the (20) Earls of Mirandus. This town has 16 small and 2 medium areas for decorative installments.`,
        rarity : 'Epic',
        threeDImg : villEarlThreeDImg,
        total : 20,
        flatImg : villEarlFlatImg,
        Img : villEarlImg,
        houseSize : '20x20',
        FP5x5 : 8,
        BP5x5 : 16,
        RP5x5 : 4,
        BP10x10 : 12,
        BP10x20 : 1,
        BP20x20 : 0,
        BP20x40 : 0,
        sDeco : 16,
        mDeco : 2,
        lDeco : 0,
    },
    {
        id : 32,
        name : 'Village of the Farmer',
        description : `The Village of the Farmer is the smallest of the villages in Mirandus. It is home to one of (20) village Farmers in Mirandus. The village head runs this large agricultural center from their mansion.`,
        rarity : 'Epic',
        threeDImg : villFarmThreeDImg,
        total : 20,
        flatImg : villFarmFlatImg,
        Img : villFarmImg,
        houseSize : '20x20',
        FP5x5 : 66,
        BP5x5 : 12,
        RP5x5 : 8,
        BP10x10 : 4,
        BP10x20 : 0,
        BP20x20 : 0,
        BP20x40 : 0,
        sDeco : 16,
        mDeco : 0,
        lDeco : 0,
    },
    {
        id : 33,
        name : 'Village of the Viscount',
        description : `The Village of the Viscount is the second largest of the villages. It is home to one of (20) Viscounts in Mirandus. A well-planned village near the manor of the viscount.`,
        rarity : 'Epic',
        threeDImg : villViscThreeDImg,
        total : 20,
        flatImg : villViscFlatImg,
        Img : villViscImg,
        houseSize : '20x20',
        FP5x5 : 8,
        BP5x5 : 12,
        RP5x5 : 4,
        BP10x10 : 10,
        BP10x20 : 1,
        BP20x20 : 0,
        BP20x40 : 0,
        sDeco : 16,
        mDeco : 1,
        lDeco : 0,

    }
]

let myDeed = 'Villages'

const Village = () => {
    return (
        <div>
            {villages.map((village) => (
                <div>
                    <Deed deed={village} />
                </div>
            ))}
        <DisplayBubbles race={villages} myDeed={myDeed}/>

        </div>
    )
}

export { Village, villages}