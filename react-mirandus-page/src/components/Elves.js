import React from 'react'
import { useState } from 'react';
import DisplayBubbles from './DisplayBubbles';
import Exemplar from './Exemplar';

//videos
import allsVid from './NFTpics/elves/elf-exemplar-the-allsight-elves.mp4';
import brigVid from './NFTpics/elves/elf-exemplar-the-brightsun-elves.mp4';
import darkVid from './NFTpics/elves/elf-exemplar-the-darksun-elves.mp4';
import eartVid from './NFTpics/elves/elf-exemplar-the-earthlight-elves.mp4';
import everVid from './NFTpics/elves/elf-exemplar-the-everflow-elf.mp4';

//pictures
import allsImg from './NFTpics/elves/elf-exemplar-the-allsight-elves.png';
import brigImg from './NFTpics/elves/elf-exemplar-the-brightsun-elves.png';
import darkImg from './NFTpics/elves/elf-exemplar-the-darksun-elves.png';
import eartImg from './NFTpics/elves/elf-exemplar-the-earthlight-elves.png';
import everImg from './NFTpics/elves/elf-exemplar-the-everflow-elf.png';

//abilities
import allsAbilImg from './NFTpics/elves/elf-exemplar-the-allsight-elves.svg';
import brigAbilImg from './NFTpics/elves/elf-exemplar-the-brightsun-elves.svg';
import darkAbilImg from './NFTpics/elves/elf-exemplar-the-darksun-elves.svg';
import eartAbilImg from './NFTpics/elves/elf-exemplar-the-earthlight-elves.svg';
import everAbilImg from './NFTpics/elves/elf-exemplar-the-everflow-elf.svg';




const elves = [
    {
        id : 26,
        name : 'Allsight',
        description : `The Allsight Elves, with regard to the other Elven tribes, are a mystery. Because of this, little is known about them. The Allsight Elves have an enigmatic relationship with magic that other Elves and humans, orcs, halflings and dwarves will struggle to comprehend.

        These Elves are credited with preserving time for the human race on numerous occasions throughout history. They are regarded as the keepers of time by some of the nation’s oldest tales, and they have saved the world on many occasions. It is thought that they may be found in all time. If this is true, it implies that they have a unique and helpful knowledge of not just the past, but also the future. The Allsights’ exceptional expertise with projectile weapons is due to their greatly improved eyesight.
        
        Allsight Elves are exemplars. They get a bonus to ranged weapons, but perhaps more significantly, Allsight Elves have a boost to chance encounters that range from chances from the ability Futurus to advantages in battle.`,
        rarity : 'Ancient',
        abilityName : 'Futurus',
        ability : 'Bonus to Ranged Weapons',
        abilImg : allsAbilImg,
        total : 200,
        charImg : allsImg,
        charVid : allsVid,
    },
    {
        id : 27,
        name : 'Brightsun',
        description : `Elves are widely dispersed through Mirandus, although they are considerably rarer than humans, dwarves, and orcs. Elves come in a variety of different varieties throughout Mirandus. Despite the fact that the types vary in many ways and attribute various origins to their abilities, they all acknowledge that they are descendants of the same Elven forefathers.

        The Brightsun Elves are the elves of the sun. The sun is seen as the source of all power and the giver of everything that has been exposed to its rays. They are described as “clothed in brilliant light” and as Exemplars, they have a unique power.
        
        This talent, known as the Satiation of Sol, allows the Brightsuns to transform solar energy into health at any time of day when the sun is out.`,
        rarity : 'Ancient',
        abilityName : 'Satiation of Sol',
        ability : 'In daylight, you can convert energy to health.',
        abilImg : brigAbilImg,
        total : 200,
        charImg : brigImg,
        charVid : brigVid,
    },
    {
        id : 28,
        name : 'Darksun',
        description : `The Darksuns are a religious order of Elves who fully embrace their dark side. They aren’t evil per se. Rather, Darksuns are often quite kind and peaceful, even compared to other Elven clans. They have a unique sense of wise acceptance towards life. The Darksuns’ longevity is largely attributed to this. They are, in essence, a Doomsday Religion with the apocalypse of darkness they anticipate as their ultimate triumph fast approaching.

        Your Darksun Elf Exemplar may not give you the otherworldly wisdom of the Darksuns, but you’ll definitely get their ability to see at night. You’ll know what’s coming in the dark. When others cannot see you, you can still see them.
        
        This ancient race believes the sun will fade away, leaving only their kind behind. `,
        rarity : 'Ancient',
        abilityName : 'Starlight Vision',
        ability : 'You see well at night, as long as you are outside.',
        abilImg : darkAbilImg,
        total : 200,
        charImg : darkImg,
        charVid : darkVid,
    },
    {
        id : 29,
        name : 'Earthlight',
        description : `Though Elven magic is typically concentrated around the sun, not all elven skills rely on its power for their magical energy. The Earthlight Elves are one such group; like many of their brethren, they enjoy the sun but are also connected with their powers no matter where they exist.

        For these well-versed magic users, spells are still fueled by light, but the light on which they rely is an undetectable force provided by the planet rather than the sun. Earthlight Elves are far more at ease using magic than even the most experienced human mages because they have the Earth beneath their feet.`,
        rarity : 'Ancient',
        abilityName : 'Serenity',
        ability : 'All spells come naturally, costing less energy to cast.',
        abilImg : eartAbilImg,
        total : 200,
        charImg : eartImg,
        charVid : eartVid,
    },
    {
        id : 30,
        name : 'Everflow',
        description : `The rarest of the intelligent species that reside in Mirandus is the magnificent Everflow Elves, and they are also among the most uncommon. The Everflow Elves have an in-depth and intuitive grasp of magical energy, but they spend a lifetime studying and meditating on the conductive flow of magic. They see magic not as a collection of “spells” that must be cast, but rather as the natural movement of energy that may be harnessed to overcome any barrier with ease.

        The Everflow Elves are wonderfully gorgeous, and those who meet them personally may profit from their powers. Exemplars of the Everflow Elves are granted a significant boost to casting speed as Exemplars.`,
        rarity : 'Ancient',
        abilityName : 'Aspect of Magic',
        ability : 'Bonus to casting speed.',
        abilImg : everAbilImg,
        total : 200,
        charImg : everImg,
        charVid : everVid,
    }
]

let myRace = 'Elves'

const Elves = () => {
    return (
        <div>
            {elves.map((elf) => (
                <div>
                    <Exemplar exemplar={elf} />
                </div>
            ))}
        <DisplayBubbles race={elves} myRace={myRace} />

        </div>
    )
}

export { Elves, elves}