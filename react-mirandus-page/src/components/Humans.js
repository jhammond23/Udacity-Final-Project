import React from 'react'
import { useState } from 'react';
import { Link } from "react-router-dom";
import Exemplar from './Exemplar';
import DisplayBubbles from './DisplayBubbles';


//videos
import alchVid from './NFTpics/humans/human-exemplar-the-alchemist.mp4';
import rideVid from './NFTpics/humans/human-exemplar-rider-of-the-north.mp4';
import cartVid from './NFTpics/humans/human-exemplar-the-cartographers.mp4';
import goldVid from './NFTpics/humans/human-exemplar-the-goldsmith.mp4';
import greeVid from './NFTpics/humans/human-exemplar-the-greencloaks.mp4';
import pitfVid from './NFTpics/humans/human-exemplar-the-pit-fighters.mp4';
import seafVid from './NFTpics/humans/human-exemplar-the-seafarer.mp4';
import stroVid from './NFTpics/humans/human-exemplar-the-stronghands.mp4';
import trueVid from './NFTpics/humans/human-exemplar-true-provider.mp4';
import weavVid from './NFTpics/humans/human-exemplar-the-weavers.mp4';

//pictures
import alchImg from './NFTpics/humans/human-exemplar-the-alchemist.png';
import rideImg from './NFTpics/humans/human-exemplar-rider-of-the-north.png';
import cartImg from './NFTpics/humans/human-exemplar-the-cartographers.png';
import goldImg from './NFTpics/humans/human-exemplar-the-goldsmith.png';
import greeImg from './NFTpics/humans/human-exemplar-the-greencloaks.png';
import pitfImg from './NFTpics/humans/human-exemplar-the-pit-fighters.png';
import seafImg from './NFTpics/humans/human-exemplar-the-seafarer.png';
import stroImg from './NFTpics/humans/human-exemplar-the-stronghands.png';
import trueImg from './NFTpics/humans/human-exemplar-true-provider.png';
import weavImg from './NFTpics/humans/human-exemplar-the-weavers.png';

//abilities
import alchAbilImg from './NFTpics/humans/alchAbilImg.svg';
import cartAbilImg from './NFTpics/humans/cartAbilImg.svg';
import goldAbilImg from './NFTpics/humans/goldAbilImg.svg';
import greeAbilImg from './NFTpics/humans/greeAbilImg.svg';
import pitfAbilImg from './NFTpics/humans/pitfAbilImg.svg';
import seafAbilImg from './NFTpics/humans/seafAbilImg.svg';
import stroAbilImg from './NFTpics/humans/stroAbilImg.svg';
import trueAbilImg from './NFTpics/humans/trueAbilImg.svg';
import rideAbilImg from './NFTpics/humans/rideAbilImg.svg';
import weavAbilImg from './NFTpics/humans/weavAbilImg.svg';

let myRace = 'Humans'
const humans = [
    {
        id : 1,
        name : 'Alchemist',
        description : `The art of potion brewing is never instinctive, but it must be learnt through years of study and trial. It necessitates a considerable amount of time and a total grasp on all parts that make up the world around us. Members of the elite human society known as the Alchemists are widely recognized to be the finest potion creators. They are so well-versed that they can make the most treasured potions and fines herbes with available ingredients, no matter where in the world they are. Alchemists are a useful group to know, as their elixirs may sometimes assist you with tasks that seem impossible. However, be advised: They are very aware of their abilities and have strong egos. 
        
        Alchemists are Exemplars with a bonus to potion-making and are the sort of person you want in your party if you intend on going into some of Mirandus' more dangerous regions.`,
        rarity : 'Rare',
        abilityName : 'Potions',
        ability : 'Bonus to potion making.',
        abilImg : alchAbilImg,
        total : 2500,
        charImg : alchImg,
        charVid : alchVid,
    },
    {
        id : 2,
        name : 'Cartographer',
        description : `It is a tremendous gift to have and comprehend the world from an accurate viewpoint. Many of history’s finest minds in Mirandus have had this talent, using it to create legendary maps that recounted a lesser-known tale of the land.
        
        Without the geographical tale that maps might tell, explorers would never have conquered the wild regions, gone through the deserts, or sailed across the immense seas. Today, the legacy of legendary mapmakers from long ago lives on through human Exemplars known as Cartographers. They are born with inborn senses of direction, navigation, and distance. When as tiny children (typically toddlers), they are discovered carefully examining their surroundings and drawing maps in the dirt with intricate intricacies that exceed their years.
        
        After a Cartographer has mastered his or her abilities as an adult, he or she may effortlessly create a tapestry of maps from the pieces of the world. All map development is aided by these Exemplars, who have Cartography, receive a significant boost to all map creation.`,
        rarity : 'Rare',
        abilityName : 'Cartography',
        ability : 'Bonus to map creation.',
        abilImg : cartAbilImg,
        total : 2500,
        charImg : cartImg,
        charVid : cartVid,
    },{
        id : 3,
        name : 'Gold Smith',
        description : `Mirandus is a world full of valuable metals, precious resources, and priceless gems and jewels. The Goldsmiths exemplar society of humans has spent many generations perfecting the skills of working with precious metals, such as gold. The Goldsmiths have an affinity for these metals, which seem to come to life under their nimble fingers and superior instruments.A Goldsmith may always find work anywhere in the world, creating exquisite jewelry from gold and silver.

        Goldsmiths, as Exemplars, receive a significant boost to jewelry manufacturing, making them some of the most sought-after artisans in the land.`,
        rarity : 'Rare',
        abilityName : 'Jewelry',
        ability : 'Bonus to jewelry crafting.',
        abilImg : goldAbilImg,
        total : 2500,
        charImg : goldImg,
        charVid : goldVid
    },{
        id : 4,
        name : 'Greencloak',
        description : `Some people seem to have a natural instinct for the woods. They can hear the trees’ beating heart and know how to push wood to its limits when it comes to construction.It’s thought that The Greencloaks came from a clan deep in the woods, where the bustle of cities and the thrum of man could not divert them as they communed with nature. They have the potential to do things with wood that no other craftsperson could achieve, both in terms of cutting and construction.

        If you need to clear land to plant a farm, having a Greencloak on your side will give you an enormous boost in both clearing and turning the timber into something productive. The Greencloaks, as Exemplars, are without equal in their connection to the forests and trees. Bonus to Wood Gathering and Carpentry.`,
        rarity : 'Rare',
        abilityName : 'Woodsman',
        ability : 'Bonus to wood gathering and carpentry.',
        abilImg : greeAbilImg,
        total : 2500,
        charImg : greeImg,
        charVid : greeVid,
    },{
        id : 5,
        name : 'Pit Fighter',
        description : `Pit Fighters are said to be the roughest and toughest of the Humans. With a rough beginning, the Pit Fighters are strong in fights in the arena and frequently receive the prize.`,
        rarity : 'Rare',
        abilityName : 'Unarmed Melee',
        ability : 'Bonus when fighting empty handed.',
        abilImg : pitfAbilImg,
        total : 2500,
        charImg : pitfImg,
        charVid : pitfVid,
    },{
        id : 6,
        name : 'Rider of the North',
        description : `The greatest Mirandus riders are from the northern high plains, where it’s said that humans are born with the wandering blood. These nomadic riders truly enjoy traveling and freewheeling adventure. A Rider of the North can cover greater distances in a day than most people do in their entire lives. Their horses are magnificent creatures of breathtaking majesty, with whom their riders have an unbreakable bond.

        It is claimed that a Rider of the North is so selfless in his valor that he would sacrifice his life for his horse at a moment’s notice if required. The horses would do the same. The Riders of the North receive Equestrian, a significant boosts to all horse-related abilities and skills.`,
        rarity : 'Rare',
        abilityName : 'Equestrian',
        ability : 'Bonus to all horse skills and abilities.',
        abilImg : rideAbilImg,
        total : 2500,
        charImg : rideImg,
        charVid : rideVid,
    },{
        id : 7,
        name : 'Seafarer',
        description : `You are a mariner, a seaman. You’re envied by those who are bound to their landlocked responsibilities, and you’re revered by the most civilized residents of towns and cities. They are ignorant of your existence. They don’t feel the same sense of abandonment as you when you’re gently rocked by the surf. They have no idea of the thrilling rush of adrenaline that comes with a squall as it approaches to swallow your crew and ship into its ravenous chaos. They do not truly reside, as you are well aware.

        Seafarers are compelled to explore beyond the seas with no restrictions. If a Seafarer knows how to get to an uncharted island distant from home, they can go there on their journey without risking too much. Seafarers can travel farther and faster than other players. In fact, if a non-seafaring adventurer of Mirandus has route instructions to a tremendous treasure trove hundreds of miles out to sea, they should connect with a Seafarer to get them there safely… for a price.
        
        On a tossed ship, seamen are at ease, and they navigate by the stars. They can row more effectively and use less energy than other people. They can go further and more securely. They may avoid random encounters and seek out hidden marvels using hints and maps. The Seafarer may find anything in the open sea as long as they know its location.`,
        rarity : 'Rare',
        abilityName : 'Seafaring',
        ability : 'Bonus to sailing.',
        abilImg : seafAbilImg,
        total : 2500,
        charImg : seafImg,
        charVid : seafVid,
    },{
        id : 8,
        name : 'Stronghand',
        description : `Stronghands, the human Exemplars known as Mirandus’ finest artisans, can be found in every corner of this extraordinary game world. Stronghands may be found in almost any town or village.

        Through the darkest nights, the wettest days, and the most hair-raising experiences, Explorers have trusted in their own hands. The Stronghands’ legacy has been passed down through many generations of the globe’s most tenacious workers. The Blacksmiths despise inactivity and take pleasure in their most productive days. For the Stronghands, inventiveness is more than a job; it’s a way of life.
        
        If you have a Stronghand for a buddy, your adventures and quests will go more smoothly. These Exemplars benefit from the Expediency Trait, which gives them a speed boost to all crafting.`,
        rarity : 'Rare',
        abilityName : 'Expediency',
        ability : 'Bonus to all crafting.',
        abilImg : stroAbilImg,
        total : 2500,
        charImg : stroImg,
        charVid : stroVid,
    },{
        id : 9,
        name : 'True Provider',
        description : `Humans, as the world’s first farmers and providers of food, have always possessed the greatest agricultural abilities. Humans experience an overpowering and inexplicable desire to care for and nurture others throughout history. They are impartial and non-discriminatory; they derive pleasure from creating, producing, and delivering the benefits of their efforts. The finest of these worldwide human servant heroes are the True Providers, who are known as Exemplars.

        The endless joy they derive from their actions result in additional heroic bonuses to all farming and ranching activity.`,
        rarity : 'Rare',
        abilityName : 'Agriculturist',
        ability : 'Bonus to all farming and ranching abilities.',
        abilImg : trueAbilImg,
        total : 2500,
        charImg : trueImg,
        charVid : trueVid,
    },{
        id : 10,
        name : 'Weaver',
        description : `When their children are very young, The Weavers’ frequently give them a shuttle and thread to play with, and the first thing they ever weave with their hands is always treasured family heirloom. The weavers are believed to have the ability to create some of the finest clothing in the time it takes an ordinary loom operator to make some basic roughspun.

        The Weavers are known for their outstanding weaving skills, which allows them to construct anything from fine woven cloth as a crafting material, to specific types of armor, long before anybody else does. As an Exemplar, they will be unrivaled in cloth production ability, making them exceedingly uncommon!`,
        rarity : 'Rare',
        abilityName : 'Clothing',
        ability : 'Bonus to cloth and clothing generation.',
        abilImg : weavAbilImg,
        total : 2500,
        charImg : weavImg,
        charVid : weavVid
    }
]

/*name this fetchExemplar and use the race as a prop*/

const Humans = () => {
    return (
        <div>
            {humans.map((human) => (
                <div>
                    <Exemplar exemplar={human} />
                </div>
            ))}

            <DisplayBubbles race={humans} myRace={myRace} />

        </div>
    )
}


export { Humans, humans }