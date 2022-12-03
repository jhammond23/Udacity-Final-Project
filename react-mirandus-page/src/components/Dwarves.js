import React from 'react'
import { useState } from 'react';
import DisplayBubbles from './DisplayBubbles';
import Exemplar from './Exemplar';


import convVid from './NFTpics/dwarves/dwarf-exemplar-the-conveyors.mp4';
import deepVid from './NFTpics/dwarves/dwarf-exemplar-the-deep-mountain-clan.mp4';
import glimVid from './NFTpics/dwarves/dwarf-exemplar-the-glimmering-clan.mp4';
import hollVid from './NFTpics/dwarves/dwarf-exemplar-the-hollowers.mp4';
import ironVid from './NFTpics/dwarves/dwarf-exemplar-the-iron-shapers.mp4';


import convImg from './NFTpics/dwarves/dwarf-exemplar-the-conveyors.png';
import deepImg from './NFTpics/dwarves/dwarf-exemplar-the-deep-mountain-clan.png';
import glimImg from './NFTpics/dwarves/dwarf-exemplar-the-glimmering-clan.png';
import hollImg from './NFTpics/dwarves/dwarf-exemplar-the-hollowers.png';
import ironImg from './NFTpics/dwarves/dwarf-exemplar-the-iron-shapers.png';


import convAbilImg from './NFTpics/dwarves/dwarf-exemplar-the-conveyors.svg';
import deepAbilImg from './NFTpics/dwarves/dwarf-exemplar-the-deep-mountain-clan.svg';
import glimAbilImg from './NFTpics/dwarves/dwarf-exemplar-the-glimmering-clan.svg';
import hollAbilImg from './NFTpics/dwarves/dwarf-exemplar-the-hollowers.svg';
import ironAbilImg from './NFTpics/dwarves/dwarf-exemplar-the-iron-shapers.svg';



const dwarves = [
    {
        id : 11,
        name : 'Conveyor',
        description : `The ability to move massive rocks and rich ores is highly prized, as their deity, Gravis is said to hold up the mountains deep within the ground.`,
        rarity : 'Epic',
        abilityName : 'Legs of the Pillar',
        ability : 'Bonus to Carrying Weight',
        abilImg : convAbilImg,
        total : 2000,
        charImg : convImg,
        charVid : convVid,
    },
    {
        id : 12,
        name : 'Deep Mountain Clan',
        description : `Some say the dwarves of the deep mountains are as numerous as the stones within which they dwell. There are dozens (perhaps hundreds) of clans under the mountains and spread throughout the veins of the planet, and many of them have not seen the sky in countless centuries. They sing songs in hypnotic deep voices of the ancient kings of Mirandus’ past. They work hard in their mines, feast heartily at the slightest occasion, and live fruitful lives of boundless joy.

        The Exemplars known as Deep Mountain Clan have evolved through generations to see without sight in the dark. It is said that a Deep Mountain Clan dwarf can sense their surroundings with great precision, even in the darkest pitch blackness.`,
        rarity : 'Epic',
        abilityName : 'Surface Sense',
        ability : 'Can see in pitch black interiors.',
        abilImg : deepAbilImg,
        total : 2000,
        charImg : deepImg,
        charVid : deepVid,
    },
    {
        id : 13,
        name : 'Glimmering Clan',
        description : `The Glimmering Clan’s members are known to have developed excellent skills in finding “treasure in the trash,” as well as riches in the rubble. It has been suggested that some of the most valuable objects discovered during dwarven mining operations have gone unnoticed and been carelessly discarded. Members of the Glimmering Clan, who are constantly working to make extra money to cover their costs, are often seen searching the various dumps and scrap heaps that populate Mirandus for valuable items. The Glimmering Clan has a reputation of being very good hagglers, with members always trying to buy things cheaply and sell them for more expensive prices.

        These mining professionals, like those who search for gold or silver in streams, seem to be guided by something deeper than a desire for money. They rummage through mounds of mining debris, regardless of the size of the “waste” pile.
        
        When the Glimmering Clan appears on a busy mining site, the leaders of the operation are frequently frustrated since they find ore that had been overlooked. The Glimmering Clan is particularly useful to mining managers who wish to sift through their crew’s discards. These dwarves, as Exemplars, have a talent called Ascertain Ore that enhances mining output by a percentage.`,
        rarity : 'Epic',
        abilityName : 'Ascertain Ore',
        ability : 'Bonus to mining output.',
        abilImg : glimAbilImg,
        total : 2000,
        charImg : glimImg,
        charVid : glimVid,
    },
    {
        id : 14,
        name : 'Hollower',
        description : `Living in the mountains and mines has endowed dwarves with a variety of special talents and abilities, most of which the outside world finds quite useful. Searching for the greatest riches on the stones is frequently a needle-in-a-haystack task, especially because little gems are sometimes valued by their scarcity. In these cases, it’s usually best to develop a strong working relationship with the dwarves: they will be more than happy to extract valuable minerals in exchange for some of your excess goods, and always seem to have an extra pick-ax when yours breaks. Dwarven mining equipment is famous (or infamous) for its incredible strength and reliability; an average pick-axe made out of standard brass will last through about 60,000 strikes before it needs to be replaced. Dwarven mining equipment is not normally available for purchase; one must become a valued client of the dwarves in order to procure some of their produce. However, certain nobles and wealthy merchants are rumored to own some expertly crafted dwarven pick-axes (rumored to be worth thousands of gold coins, thanks to their durability).

        The Hollowers have made intuition a priority in their history, and they’ve focused on it. They may sense unseen fractures within the stones, allowing them to extract the most out of each strike with their hammer or pick. Some even say that the greatest Hollowers can sense the exact location of the sought treasure and uncover it with no wasted time at all. Others simply make the case the Hollowers are consistently lucky.
        
        Despite the fact that these Exemplars don’t display a fracture-preventing ability, they do have a characteristic called Feel for Fractures. This trait allows them to mine without expending as much energy.`,
        rarity : 'Epic',
        abilityName : 'Feel for Fractures',
        ability : 'Reduced energy costs when mining.',
        abilImg : hollAbilImg,
        total : 2000,
        charImg : hollImg,
        charVid : hollVid,
    },
    {
        id : 15,
        name : 'Iron Shaper',
        description : `Although the majority of dwarves dwell in caves, not all of them do so. For many generations, some have mingled with the numerous civilizations on Mirandus, running shops, performing trades, and providing a variety of services to its inhabitants. The Iron Shapers are one such dwarven clan. The greatest blacksmiths in the land are members of this illustrious family, and they devote their entire lives to maintaining their edge.

        The Hammer Way is an uncommon technique by which they educate their children. It creates the perceptions of young Iron Shapers about the world, always focusing on their trade’s tools. When a youngster’s very first successful hammer strike is made, it’s as if the world has suddenly changed for them.
        
        On Hammer Day, Iron Shapers from all around the world pay their respects to their newest brother or sister by bringing them gifts. Many of Iron Shapers were too young at the time to recall or comprehend the significance of Hammer Day.
        
        Iron Shapers are individuals who have been forged by the fire, and as Exemplars, they have the Way of the Anvil trait. Reduced energy costs when blacksmithing and the ability to make high-quality weapons and iron implements are among their advantages as Exemplars.`,
        rarity : 'Epic',
        abilityName : 'Way of the Anvil',
        ability : 'Reduced energy costs when blacksmithing.',
        abilImg : ironAbilImg,
        total : 2000,
        charImg : ironImg,
        charVid : ironVid,
    }
]

let myRace = 'Dwarves'
/*name this fetchExemplar and use the race as a prop*/

const Dwarves = () => {
    return (
        <div>
            {dwarves.map((dwarf) => (
                <div>
                    <Exemplar exemplar={dwarf} />
                </div>
            ))}
        <DisplayBubbles race={dwarves} myRace={myRace}/>

        </div>
    )
}

export { Dwarves, dwarves}