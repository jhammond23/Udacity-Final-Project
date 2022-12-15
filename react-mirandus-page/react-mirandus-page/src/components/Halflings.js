import React from 'react'
import { useState } from 'react';
import DisplayBubbles from './DisplayBubbles';
import Exemplar from './Exemplar';

//videos
import evenVid from './NFTpics/halflings/halfling-exemplar-the-evenstrides.mp4';
import longSVid from './NFTpics/halflings/halfling-exemplar-the-longsongs.mp4';
import mumsVid from './NFTpics/halflings/halfling-exemplar-the-mumsends.mp4';
import neveVid from './NFTpics/halflings/halfling-exemplar-the-neverlooks.mp4';
import prouVid from './NFTpics/halflings/halfling-exemplar-the-proudhearths.mp4';

//pictures
import evenImg from './NFTpics/halflings/halfling-exemplar-the-evenstrides.png';
import longSImg from './NFTpics/halflings/halfling-exemplar-the-longsongs.png';
import mumsImg from './NFTpics/halflings/halfling-exemplar-the-mumsends.png';
import neveImg from './NFTpics/halflings/halfling-exemplar-the-neverlooks.png';
import prouImg from './NFTpics/halflings/halfling-exemplar-the-proudhearths.png';

//abilities
import evenAbilImg from './NFTpics/halflings/halfling-exemplar-the-evenstrides.svg';
import longSAbilImg from './NFTpics/halflings/halfling-exemplar-the-longsongs.svg';
import mumsAbilImg from './NFTpics/halflings/halfling-exemplar-the-mumsends.svg';
import neveAbilImg from './NFTpics/halflings/halfling-exemplar-the-neverlooks.svg';
import prouAbilImg from './NFTpics/halflings/halfling-exemplar-the-proudhearths.svg';




const halflings = [
    {
        id : 21,
        name : 'Evenstrides',
        description : `A lesser-known aspect of the halfling race is the Evenstrides, a clan that excels at running up and down hills. The Evenstrides are a fun clan to play as due to their unique ability to run up slopes despite being so small. -> A lesser-known feature of the halfling breed is the Evenstrides, Even though halflings are shorter than most humans, these movement specialists are able to perfectly organize the forces involved to create the most efficient method of running, no matter the terrain. They can almost always outrun humans and orcs both in terms of sprint speed and endurance.

        Evenstrides can use running as a way of getting around because they have great balance and can manage their weight distribution. Evenstrides are the most common type of halfling.
        
        Evenstrides are able to run with less energy cost as Exemplars due to the Swiftness trait, which allows them to operate at full speed for a short duration.`,
        rarity : 'Legendary',
        abilityName : 'Swiftness',
        ability : 'Reduced energy costs when running.',
        abilImg : evenAbilImg,
        total : 800,
        Img : evenImg,
        charVid : evenVid,
    },
    {
        id : 22,
        name : 'Longsong',
        description : `The smallest people on Mirandus are the little folk, or halflings. They’re the happiest of Mirandus’ inhabitants, since they make up the majority of its writers, storyteller, and musicians. They prefer to live quiet existences so that they may create beautiful things without being distracted by a chaotic world. The tales and songs of Mirandus are full of little folk, who play a part in every story.

        The Longsongs, a race of halflings that have excelled at music, are the most accomplished among them. A friend of a Longsong is someone who keeps you company well. They claim that the Longsongs hide tremendous magic within their songs, and that elders may cast spells from sound.
        
        The bonus of halfling longsongs is that when they play music, they receive a reduction in energy cost for spells.`,
        rarity : 'Legendary',
        abilityName : 'Alacrity of Sound',
        ability : 'Reduced energy costs when playing music.',
        abilImg : longSAbilImg,
        total : 800,
        Img : longSImg,
        charVid : longSVid,
    },
    {
        id : 23,
        name : 'Mumsends',
        description : `Deep in the hilly halfling region, there is a little hamlet known as Mumsend, which is sometimes called the quiet village. The inhabitants of this tight-knit neighborhood are mostly members of the clan known as the Mumsends. These halflings are generally perceptive spectators who seldom speak. The Mumsends’ ability to move silently is one of a kind. In other words, the Mumsends are masters in the field of creeping up without being noticed. Within their community, society is designed around individuals who are particularly good at not only sneaking up on others but also avoiding being sneaked upon themselves. Whisper is the game that determines public standing in Mumsend, and while it may appear to be a silly game, the outcomes are enforceable across the town.

        Whisper has a complex set of rules, but the basic idea is that Mumsends try to sneak up on their pals and neighbors and scare them out of their minds with a quiet greeting. Those who elicit the most startles earn the greatest degrees of respect from society. For many Mumsends, the game has had a significant impact on their lives, for better or worse.
        
        Mumsends are known for moving in almost complete silence, thanks to their trait called Stilled Passage. This can allow them to sneak into areas filled with dangerous creatures or to pick pockets, making it just a bit easier for them to line their purses.`,
        rarity : 'Legendary',
        abilityName : 'Stilled Passage',
        ability : 'Move in almost complete silence.',
        abilImg : mumsAbilImg,
        total : 800,
        Img : mumsImg,
        charVid : mumsVid,
    },
    {
        id : 24,
        name : 'Neverlook',
        description : `Eavesdropping and hiding brings the Neverlooks great pride.  To them, a conversation overheard is meant to be shared — and profited from.`,
        rarity : 'Legendary',
        abilityName : 'Fade',
        ability : 'If crouched and motionless, you are almost invisible.',
        abilImg : neveAbilImg,
        total : 800,
        Img : neveImg,
        charVid : neveVid,
    },
    {
        id : 25,
        name : 'Proudhearths',
        description : `The tiny people of the world, known as “little folk,” are also known for their great pleasure and appreciation in eating and drinking. These characteristics are rather odd for a race that is much smaller than humans, yet they are real.

        The most talented halfling chefs are revered in much the same way that certain royal families are in other countries, and their cuisine is suitable for any Mirandus king. The Proudhearths are known as the greatest chefs among halflings. A Proudhearth halfling’s culinary specialty is preparing a vast meal in record time, no matter how many people are involved. It is claimed that even with just a few ingredients, a Proudheart can prepare an extravagant multi-dish dinner that will be remembered fondly by the entire party for the rest of their lives.
        
        Hearthmasters are a feature found in some Proudhearths that reduces the energy cost of cooking and brewing.`,
        rarity : 'Legendary',
        abilityName : 'Hearth Master',
        ability : 'Reduced energy costs when cooking and brewing.',
        abilImg : prouAbilImg,
        total : 800,
        Img : prouImg,
        charVid : prouVid,
    }
]

let myRace= 'Halflings'

const Halflings = () => {
    return (
        <div>
            {halflings.map((halfling) => (
                <div>
                    <Exemplar exemplar={halfling} />
                </div>
            ))}
        <DisplayBubbles race={halflings} myRace={myRace} />

        </div>
    )
}

export { Halflings, halflings}