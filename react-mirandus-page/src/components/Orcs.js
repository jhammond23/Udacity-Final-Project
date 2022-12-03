import React from 'react'
import { useState } from 'react';
import DisplayBubbles from './DisplayBubbles';
import Exemplar from './Exemplar';

//orc mp4 vids
import beatVid from './NFTpics/orcs/orc-exemplar-the-beating-heart-clan.mp4';
import boneVid from './NFTpics/orcs/orc-exemplar-the-bone-orcs.mp4';
import certVid from './NFTpics/orcs/orc-exemplar-the-orcs-of-certainty.mp4';
import cleaVid from './NFTpics/orcs/orc-exemplar-the-clear-bloods.mp4';
import longVid from './NFTpics/orcs/orc-exemplar-the-orcs-of-the-long-hunt.mp4';

//orc png pics
import beatImg from './NFTpics/orcs/orc-exemplar-the-beating-heart-clan.png';
import boneImg from './NFTpics/orcs/orc-exemplar-the-bone-orcs.png';
import certImg from './NFTpics/orcs/orc-exemplar-the-orcs-of-certainty.png';
import cleaImg from './NFTpics/orcs/orc-exemplar-the-clear-bloods.png';
import longImg from './NFTpics/orcs/orc-exemplar-the-orcs-of-the-long-hunt.png';

//orc ability svgs
import beatAbilImg from './NFTpics/orcs/orc-exemplar-the-beating-heart-clan.svg';
import boneAbilImg from './NFTpics/orcs/orc-exemplar-the-bone-orcs.svg';
import certAbilImg from './NFTpics/orcs/orc-exemplar-the-orcs-of-certainty.svg';
import cleaAbilImg from './NFTpics/orcs/orc-exemplar-the-clear-bloods.svg';
import longAbilImg from './NFTpics/orcs/orc-exemplar-the-orcs-of-the-long-hunt.svg';



const orcs = [
    {
        id : 16,
        name : 'Beating Heart Clan',
        description : `Orc hunters inspire terror in those who go alone in the woods, for good reason. They have a sixth sense that allows them to see the blood of their prey flowing through its veins and truly see it. The Beating Heart Clan is a clan of Exemplars who have made this sense into an amazing art form. They may be found all around the world. Hunters by profession and inclination, they are killers by instinct.

        Orcs with this ability can locate life-forms’ heat signatures around them on the hunt.`,
        rarity : 'Epic',
        abilityName : 'Pulse Perception',
        ability : 'Ability to see heat signatures.',
        abilImg : beatAbilImg,
        total : 2000,
        charImg : beatImg,
        charVid : beatVid,
    },
    {
        id : 17,
        name : 'Bone Orc',
        description : `In the native areas of the Bone Orcs, the jagged limestone cliffs stretch for miles in all directions. These rocks are so common that Orc bands have inhabited cracks and fissures for centuries, forcing them to build their homes within. Only by chance and accident did many orcs meet their deaths as they slid or tumbled. Accidental impalements were not uncommon, especially among seasoned fighters.

        The orcs were made to be the ultimate killing machine, and they have remained so ever since. They are not known for their great dexterity or balance, but only those with the toughest flesh and the greatest ability to heal could survive and thrive throughout history. The healing orcs of this region were known by outsiders as the Bone Orcs over time. Their natural healing abilities are so potent that even broken bones are said to be mended rapidly and with ease. They have now taken pride in being referred to as Exemplars, having a talent called Improved Mending.`,
        rarity : 'Epic',
        abilityName : 'Improved Mending',
        ability : 'Faster healing and almost immune to bleeding.',
        abilImg : boneAbilImg,
        total : 2000,
        charImg : boneImg,
        charVid : boneVid,
    },
    {
        id : 18,
        name : 'Clear Blood',
        description : `The Clear Bloods are a particularly odd race of Mirandus orcs. With curiosity, even their fellow Mirandus orcs from other tribes regard them, and any outsider who sees their customs is likely to find them disturbing at the very least. Unlike the majority of orcs, who are uninterested in the inner workings of their bodies, the Clear Bloods have a strong focus on medicines. But to outsiders, most of their dozens of medicines are considered deadly poisons.

        Some Clear Bloods are able to build immunities not only to the effects of those poisons but also to the consequences of all other poisons in the world by regularly administering these medicines throughout their lives. In order to be initiated into the Clear Blood, orcs must endure a number of painful procedures. However, as Exemplars, Clear Bloods are immune to almost any poison because to their inherited trait called Toxin Release.`,
        rarity : 'Epic',
        abilityName : 'Toxin Release',
        ability : 'Almost immune to poisons.',
        abilImg : cleaAbilImg,
        total : 2000,
        charImg : cleaImg,
        charVid : cleaVid,
    },
    {
        id : 19,
        name : 'Orc of Certainty',
        description : `Orcs are driven by instinct. They are clever, strong, and deadly in the wild. Some people think that their natural abilities give them a distinct edge because they can think and make difficult decisions in the same way as humans do. Some orc tribes have honed their most powerful instincts, giving them a decided edge in hunting, survival, and combat. The Orcs of Certainty are one such tribe. They’ve embraced a level of insight that’s well beyond the comprehension of humans, allowing them to detect aggression and fear in others. These orcs are nearly impossible to deceive, since they almost always have advance warning.

        Orcs of Certainty may be exemplars or orcs, and they have a special trait called Trace of Danger, which allows them to detect hostile creatures and the greed and avarice of those guarding treasure troves.`,
        rarity : 'Epic',
        abilityName : 'Trace of Danger',
        ability : 'Can sense aggressive creatures.',
        abilImg : certAbilImg,
        total : 2000,
        charImg : certImg,
        charVid : certVid,
    },
    {
        id : 20,
        name : 'Long Hunt',
        description : `Long, difficult searches are typical of their people. It provides them with a sense of adventure and excitement for lengthy amounts of time, allowing them to capture the most elusive and valuable game.`,
        rarity : 'Epic',
        abilityName : 'Satiated',
        ability : 'Can go longer without food or sleep',
        abilImg : longAbilImg,
        total : 2000,
        charImg : longImg,
        charVid : longVid,
    }
]

let myRace = 'Orcs'

const Orcs = () => {
    return (
        <div>
            {orcs.map((orc) => (
                <div>
                    <Exemplar exemplar={orc} />
                </div>
            ))}
        <DisplayBubbles race={orcs} myRace={myRace} />

        </div>
    )
}

export { Orcs, orcs}