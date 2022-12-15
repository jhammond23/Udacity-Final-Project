import React from 'react'
import { useState } from 'react';
import DisplayBubbles from './DisplayBubbles';
import Exemplar from './Exemplar';

//NFT Img
import homeImg from './NFTpics/landDeeds/homestead/homestead.png';
import outpostImg from './NFTpics/landDeeds/outpost/outpost.png';
import farmHamlImg from './NFTpics/landDeeds/hamlet/farmingHamlet.png';
import rancHamlImg from './NFTpics/landDeeds/hamlet/ranchingHamlet.png';
import villBaroImg from './NFTpics/landDeeds/village/villageOfTheBaron.png';
import villEarlImg from './NFTpics/landDeeds/village/villageOfTheEarl.png';
import villFarmImg from './NFTpics/landDeeds/village/villageOfTheFarmer.png';
import villViscImg from './NFTpics/landDeeds/village/villageOfTheViscount.png';
import townArchDukeImg from './NFTpics/landDeeds/town/townOfTheArchDuke.png';
import townDukeImg from './NFTpics/landDeeds/town/townOfTheDuke.png';
import townMarqImg from './NFTpics/landDeeds/town/townOfTheMarquess.png';
import townPrinImg from './NFTpics/landDeeds/town/townOfThePrince.png';







//3D Img
import homeThreeDImg from './NFTpics/landDeeds/homestead/homestead3D.png';
import outpostThreeDImg from './NFTpics/landDeeds/outpost/outpost3D.png';
import farmHamlThreeDImg from './NFTpics/landDeeds/hamlet/farmingHamlet3D.png';
import rancHamlThreeDImg from './NFTpics/landDeeds/hamlet/ranchingHamlet3D.png';
import villBaroThreeDImg from './NFTpics/landDeeds/village/villageOfTheBaron3D.png';
import villEarlThreeDImg from './NFTpics/landDeeds/village/villageOfTheEarl3D.png';
import villFarmThreeDImg from './NFTpics/landDeeds/village/villageOfTheFarmer3D.png';
import villViscThreeDImg from './NFTpics/landDeeds/village/villageOfTheViscount3D.png';
import townArchDukeThreeDImg from './NFTpics/landDeeds/town/townOfTheArchDuke3D.png';
import townDukeThreeDImg from './NFTpics/landDeeds/town/townOfTheDuke3D.png';
import townMarqThreeDImg from './NFTpics/landDeeds/town/townOfTheMarquess3D.png';
import townPrinThreeDImg from './NFTpics/landDeeds/town/townOfThePrince3D.png';







//Flat Img
import homeFlatImg from './NFTpics/landDeeds/homestead/homesteadLayout.png';
import outpostFlatImg from './NFTpics/landDeeds/outpost/outpostLayout.png';
import farmHamlFlatImg from './NFTpics/landDeeds/hamlet/farmingHamletLayout.png';
import rancHamlFlatImg from './NFTpics/landDeeds/hamlet/ranchingHamletLayout.png';
import villBaroFlatImg from './NFTpics/landDeeds/village/villageOfTheBaronLayout.png';
import villEarlFlatImg from './NFTpics/landDeeds/village/villageOfTheEarlLayout.png';
import villFarmFlatImg from './NFTpics/landDeeds/village/villageOfTheFarmerLayout.png';
import villViscFlatImg from './NFTpics/landDeeds/village/villageOfTheViscountLayout.png';
import townArchDukeFlatImg from './NFTpics/landDeeds/town/townOfTheArchDukeLayout.png';
import townDukeFlatImg from './NFTpics/landDeeds/town/townOfTheDukeLayout.png';
import townMarqFlatImg from './NFTpics/landDeeds/town/townOfTheMarquessLayout.png';
import townPrinFlatImg from './NFTpics/landDeeds/town/townOfThePrinceLayout.png';










const deeds = [
    {
        id : 26,
        name : 'Homestead',
        description : `There are 1,000 Homestead deeds. A small place to lay your head and rest from your adventures. What were you expecting? It’s a Homestead!`,
        rarity : 'Uncommon',
        threeDImg : homeThreeDImg,
        total : 1000,
        flatImg : homeFlatImg,
        NFTImg : homeImg,
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
    },
    {
        id : 27,
        name : 'Outpost',
        description : `There are 200 Outpost deeds. An outpost has basic defensive walls that surround makeshift structures.`,
        rarity : 'Rare',
        threeDImg : outpostThreeDImg,
        total : 200,
        flatImg : outpostFlatImg,
        NFTImg : outpostImg,
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
    },
    {
        id : 28,
        name : 'Farming Hamlet',
        description : `The Farming Hamlet is one of the two types of Hamlets in Mirandus. There are 200 total Farming Hamlets available to own in Mirandus. Making them quite plentiful through the land. More crops to you!`,
        rarity : 'Rare',
        threeDImg : farmHamlThreeDImg,
        total : 200,
        flatImg : farmHamlFlatImg,
        NFTImg : farmHamlImg,
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
        NFTImg : rancHamlImg,
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
    },
    {
        id : 30,
        name : 'Village of the Baron',
        description : `The Village of the Baron is the third largest of the villages in the land. It is home to one of (20) Barons in Mirandus. There are several small and one medium decorative installation in this village.`,
        rarity : 'Epic',
        threeDImg : villBaroThreeDImg,
        total : 20,
        flatImg : villBaroFlatImg,
        NFTImg : villBaroImg,
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
        NFTImg : villEarlImg,
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
        NFTImg : villFarmImg,
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
        NFTImg : villViscImg,
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

    },
    {
        id : 34,
        name : 'Town of the Arch Duke',
        description : `A shining tower is the center of this grand town, a true safe haven from evil and center of commerce. The Town of the Arch Duke is the largest of the town deeds. A palatial estate. Home to one of the (5) Arch Dukes of Mirandus. This town has many small, medium and large areas for decorative installments.`,
        rarity : 'Legendary',
        threeDImg : townArchDukeThreeDImg,
        total : 5,
        flatImg : townArchDukeFlatImg,
        NFTImg : townArchDukeImg,
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
        NFTImg : townDukeImg,
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
        NFTImg : townMarqImg,
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
        NFTImg : townPrinImg,
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


/*name this fetchExemplar and use the race as a prop*/
