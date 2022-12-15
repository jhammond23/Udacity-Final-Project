import React from 'react'
import { useState } from 'react';
import Deed from '../Deed';
import DisplayBubbles from '../DisplayBubbles';

//NFT Img
import townArchDukeImg from '../NFTpics/landDeeds/town/townOfTheArchDuke.png';
import townDukeImg from '../NFTpics/landDeeds/town/townOfTheDuke.png';
import townMarqImg from '../NFTpics/landDeeds/town/townOfTheMarquess.png';
import townPrinImg from '../NFTpics/landDeeds/town/townOfThePrince.png';

//3D Img
import townArchDukeThreeDImg from '../NFTpics/landDeeds/town/townOfTheArchDuke3D.png';
import townDukeThreeDImg from '../NFTpics/landDeeds/town/townOfTheDuke3D.png';
import townMarqThreeDImg from '../NFTpics/landDeeds/town/townOfTheMarquess3D.png';
import townPrinThreeDImg from '../NFTpics/landDeeds/town/townOfThePrince3D.png';

//Flat Img
import townArchDukeFlatImg from '../NFTpics/landDeeds/town/townOfTheArchDukeLayout.png';
import townDukeFlatImg from '../NFTpics/landDeeds/town/townOfTheDukeLayout.png';
import townMarqFlatImg from '../NFTpics/landDeeds/town/townOfTheMarquessLayout.png';
import townPrinFlatImg from '../NFTpics/landDeeds/town/townOfThePrinceLayout.png';

const towns = [
    {
        id : 34,
        name : 'Town of the Arch Duke',
        description : `A shining tower is the center of this grand town, a true safe haven from evil and center of commerce. The Town of the Arch Duke is the largest of the town deeds. A palatial estate. Home to one of the (5) Arch Dukes of Mirandus. This town has many small, medium and large areas for decorative installments.`,
        rarity : 'Legendary',
        threeDImg : townArchDukeThreeDImg,
        total : 5,
        flatImg : townArchDukeFlatImg,
        Img : townArchDukeImg,
        houseSize : '20x40',
        FP5x5 : 36,
        BP5x5 : 22,
        RP5x5 : 8,
        BP10x10 : 18,
        BP10x20 : 4,
        BP20x20 : 3,
        BP20x40 : 0,
        sDeco : 12,
        mDeco : 6,
        lDeco : 0,
    },
    {
        id : 35,
        name : 'Town of the Duke',
        description : `The Town of the Duke is the third largest town type in Mirandus. It is home to one of (10) Dukes. A fine town adjacent to the duke’s formidable tower, traveled by many. There are several small decorative installment locations.`,
        rarity : 'Legendary',
        threeDImg : townDukeThreeDImg,
        total : 10,
        flatImg : townDukeFlatImg,
        Img : townDukeImg,
        houseSize : '20x40',
        FP5x5 : 24,
        BP5x5 : 20,
        RP5x5 : 4,
        BP10x10 : 16,
        BP10x20 : 3,
        BP20x20 : 0,
        BP20x40 : 0,
        sDeco : 16,
        mDeco : 3,
        lDeco : 0,
    },
    {
        id : 36,
        name : 'Town of the Marquess',
        description : `The Town of the Marquess is the smallest of the town types. it is home to one of (15) Marquesses. The palace of the marquess is situated nicely in this well-traveled town. There are many small and a few medium decorative installations.`,
        rarity : 'Legendary',
        threeDImg : townMarqThreeDImg,
        total : 15,
        flatImg : townMarqFlatImg,
        Img : townMarqImg,
        houseSize : '20x20',
        FP5x5 : 24,
        BP5x5 : 18,
        RP5x5 : 4,
        BP10x10 : 14,
        BP10x20 : 2,
        BP20x20 : 0,
        BP20x40 : 0,
        sDeco : 18,
        mDeco : 3,
        lDeco : 0,
    } ,
    {
        id : 37,
        name : 'Town of the Prince',
        description : `The Town of the Prince is the second largest of the town deeds. Another palatial estate. Home to one of the (10) Prince’s of Mirandus. This town has many small, and several medium areas for decorative installments. The town surrounding the prince’s palace is a lavish refuge from the perils of adventure.`,
        rarity : 'Legendary',
        threeDImg : townPrinThreeDImg,
        total : 10,
        flatImg : townPrinFlatImg,
        Img : townPrinImg,
        houseSize : '20x40',
        FP5x5 : 18,
        BP5x5 : 16,
        RP5x5 : 3,
        BP10x10 : 12,
        BP10x20 : 4,
        BP20x20 : 2,
        BP20x40 : 0,
        sDeco : 32,
        mDeco : 10,
        lDeco : 1,
    }
]

let myDeed = 'Towns'

const Town = () => {
    return (
        <div>
            {towns.map((town) => (
                <div>
                    <Deed deed={town} />
                </div>
            ))}
        <DisplayBubbles race={towns} myDeed={myDeed}/>

        </div>
    )
}

export { Town, towns}