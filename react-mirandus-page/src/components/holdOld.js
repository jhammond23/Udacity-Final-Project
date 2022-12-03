import React from 'react'
import { useState } from 'react';
import alchImg from './NFTpics/human-exemplar-the-alchemist.png';
import rideImg from './NFTpics/human-exemplar-rider-of-the-north.png';
import cartImg from './NFTpics/human-exemplar-the-cartographers.png';
import goldImg from './NFTpics/human-exemplar-the-goldsmith.png';
import greeImg from './NFTpics/human-exemplar-the-greencloaks.png';
import pitfImg from './NFTpics/human-exemplar-the-pit-fighters.png';
import seafImg from './NFTpics/human-exemplar-the-seafarer.png';
import stroImg from './NFTpics/human-exemplar-the-stronghands.png';
import trueImg from './NFTpics/human-exemplar-true-provider.png';
import weavImg from './NFTpics/human-exemplar-the-weavers.png';
import alchAbilImg from './NFTpics/alchAbilImg.svg';
import cartAbilImg from './NFTpics/cartAbilImg.svg';
import goldAbilImg from './NFTpics/goldAbilImg.svg';
import greeAbilImg from './NFTpics/greeAbilImg.svg';
import pitfAbilImg from './NFTpics/pitfAbilImg.svg';
import seafAbilImg from './NFTpics/seafAbilImg.svg';
import stroAbilImg from './NFTpics/stroAbilImg.svg';
import trueAbilImg from './NFTpics/trueAbilImg.svg';
import rideAbilImg from './NFTpics/rideAbilImg.svg';
import weavAbilImg from './NFTpics/weavAbilImg.svg';




    const AllExemplars = {
        humans : [
            {
                id : 1,
                name : 'Alchemist',
                description : `The art of potion brewing is never instinctive, but it must be learnt through years of study and trial. It necessitates a considerable amount of time and a total grasp on all parts that make up the world around us. Members of the elite exemplar society known as the Alchemists are widely recognized to be the finest potion creators. They are so well-versed that they can make the most treasured potions and fines herbes with available ingredients, no matter where in the world they are. Alchemists are a useful group to know, as their elixirs may sometimes assist you with tasks that seem impossible. However, be advised: They are very aware of their abilities and have strong egos. Alchemists are Exemplars with a bonus to potion-making and are the sort of person you want in your party if you intend on going into some of Mirandus' more dangerous regions.`,
                rarity : 'Rare',
                abilityName : 'Potions',
                ability : 'Bonus to potion making.',
                abilImg : alchAbilImg,
                total : 2500,
                charImg : alchImg,
            },
            {
                id : 2,
                name : 'Cartographer',
                description : `It is a tremendous gift to have and comprehend the world from an accurate viewpoint. Many of history’s finest minds in Mirandus have had this talent, using it to create legendary maps that recounted a lesser-known tale of the land.
                
                Without the geographical tale that maps might tell, explorers would never have conquered the wild regions, gone through the deserts, or sailed across the immense seas. Today, the legacy of legendary mapmakers from long ago lives on through exemplar Exemplars known as Cartographers. They are born with inborn senses of direction, navigation, and distance. When as tiny children (typically toddlers), they are discovered carefully examining their surroundings and drawing maps in the dirt with intricate intricacies that exceed their years.
                
                After a Cartographer has mastered his or her abilities as an adult, he or she may effortlessly create a tapestry of maps from the pieces of the world. All map development is aided by these Exemplars, who have Cartography, receive a significant boost to all map creation.`,
                rarity : 'Rare',
                abilityName : 'Cartography',
                ability : 'Bonus to map creation.',
                abilImg : cartAbilImg,
                total : 2500,
                charImg : cartImg,
            },{
                id : 3,
                name : 'Gold Smith',
                description : `Mirandus is a world full of valuable metals, precious resources, and priceless gems and jewels. The Goldsmiths exemplar society of allExemplars has spent many generations perfecting the skills of working with precious metals, such as gold. The Goldsmiths have an affinity for these metals, which seem to come to life under their nimble fingers and superior instruments.A Goldsmith may always find work anywhere in the world, creating exquisite jewelry from gold and silver.

                Goldsmiths, as Exemplars, receive a significant boost to jewelry manufacturing, making them some of the most sought-after artisans in the land.`,
                rarity : 'Rare',
                abilityName : 'Jewelry',
                ability : 'Bonus to jewelry crafting.',
                abilImg : goldAbilImg,
                total : 2500,
                charImg : goldImg,
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
            },{
                id : 5,
                name : 'Pit Fighter',
                description : `Pit Fighters are said to be the roughest and toughest of the allExemplars. With a rough beginning, the Pit Fighters are strong in fights in the arena and frequently receive the prize.`,
                rarity : 'Rare',
                abilityName : 'Unarmed Melee',
                ability : 'Bonus when fighting empty handed.',
                abilImg : pitfAbilImg,
                total : 2500,
                charImg : pitfImg,
            },{
                id : 6,
                name : 'Rider of the North',
                description : `The greatest Mirandus riders are from the northern high plains, where it’s said that allExemplars are born with the wandering blood. These nomadic riders truly enjoy traveling and freewheeling adventure. A Rider of the North can cover greater distances in a day than most people do in their entire lives. Their horses are magnificent creatures of breathtaking majesty, with whom their riders have an unbreakable bond.

                It is claimed that a Rider of the North is so selfless in his valor that he would sacrifice his life for his horse at a moment’s notice if required. The horses would do the same. The Riders of the North receive Equestrian, a significant boosts to all horse-related abilities and skills.`,
                rarity : 'Rare',
                abilityName : 'Equestrian',
                ability : 'Bonus to all horse skills and abilities.',
                abilImg : rideAbilImg,
                total : 2500,
                charImg : rideImg,
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
            },{
                id : 8,
                name : 'Stronghand',
                description : `Stronghands, the exemplar Exemplars known as Mirandus’ finest artisans, can be found in every corner of this extraordinary game world. Stronghands may be found in almost any town or village.

                Through the darkest nights, the wettest days, and the most hair-raising experiences, Explorers have trusted in their own hands. The Stronghands’ legacy has been passed down through many generations of the globe’s most tenacious workers. The Blacksmiths despise inactivity and take pleasure in their most productive days. For the Stronghands, inventiveness is more than a job; it’s a way of life.
                
                If you have a Stronghand for a buddy, your adventures and quests will go more smoothly. These Exemplars benefit from the Expediency Trait, which gives them a speed boost to all crafting.`,
                rarity : 'Rare',
                abilityName : 'Expediency',
                ability : 'Bonus to all crafting.',
                abilImg : stroAbilImg,
                total : 2500,
                charImg : stroImg,
            },{
                id : 9,
                name : 'True Provider',
                description : `allExemplars, as the world’s first farmers and providers of food, have always possessed the greatest agricultural abilities. allExemplars experience an overpowering and inexplicable desire to care for and nurture others throughout history. They are impartial and non-discriminatory; they derive pleasure from creating, producing, and delivering the benefits of their efforts. The finest of these worldwide exemplar servant heroes are the True Providers, who are known as Exemplars.

                The endless joy they derive from their actions result in additional heroic bonuses to all farming and ranching activity.`,
                rarity : 'Rare',
                abilityName : 'Agriculturist',
                ability : 'Bonus to all farming and ranching abilities.',
                abilImg : trueAbilImg,
                total : 2500,
                charImg : trueImg,
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
            }
        ], orcs : [
            {
                id : 11,
                name : 'Beating Heart Clan',
                description : `Orc hunters inspire terror in those who go alone in the woods, for good reason. They have a sixth sense that allows them to see the blood of their prey flowing through its veins and truly see it. The Beating Heart Clan is a clan of Exemplars who have made this sense into an amazing art form. They may be found all around the world. Hunters by profession and inclination, they are killers by instinct.

                Orcs with this ability can locate life-forms’ heat signatures around them on the hunt.`,
                rarity : 'Epic',
                abilityName : 'Pulse Perception',
                ability : 'Ability to see heat signatures.',
                abilImg : weavAbilImg,
                total : 2000,
                charImg : weavImg,
            }, 
            {
                id : 12,
                name : 'Bone Orc',
                description : `In the native areas of the Bone Orcs, the jagged limestone cliffs stretch for miles in all directions. These rocks are so common that Orc bands have inhabited cracks and fissures for centuries, forcing them to build their homes within. Only by chance and accident did many orcs meet their deaths as they slid or tumbled. Accidental impalements were not uncommon, especially among seasoned fighters.

                The orcs were made to be the ultimate killing machine, and they have remained so ever since. They are not known for their great dexterity or balance, but only those with the toughest flesh and the greatest ability to heal could survive and thrive throughout history. The healing orcs of this region were known by outsiders as the Bone Orcs over time. Their natural healing abilities are so potent that even broken bones are said to be mended rapidly and with ease. They have now taken pride in being referred to as Exemplars, having a talent called Improved Mending.
                
                Bone Orcs are resilient to bleeding and heal quickly.`,
                rarity : 'Epic',
                abilityName : 'Improved Mending',
                ability : 'Faster healing and almost immune to bleeding.',
                abilImg : weavAbilImg,
                total : 2000,
                charImg : weavImg,
            },
            {
                id : 13,
                name : 'Clear Blood',
                description : `The Clear Bloods are a particularly odd race of Mirandus orcs. With curiosity, even their fellow Mirandus orcs from other tribes regard them, and any outsider who sees their customs is likely to find them disturbing at the very least. Unlike the majority of orcs, who are uninterested in the inner workings of their bodies, the Clear Bloods have a strong focus on medicines. But to outsiders, most of their dozens of medicines are considered deadly poisons.

                Some Clear Bloods are able to build immunities not only to the effects of those poisons but also to the consequences of all other poisons in the world by regularly administering these medicines throughout their lives. In order to be initiated into the Clear Blood, orcs must endure a number of painful procedures. However, as Exemplars, Clear Bloods are immune to almost any poison because to their inherited trait called Toxin Release.`,
                rarity : 'Epic',
                abilityName : 'Toxin Release',
                ability : 'Almost immune to poisons.',
                abilImg : weavAbilImg,
                total : 2000,
                charImg : weavImg,
            },
            {
                id : 14,
                name : 'Orc of Certainty',
                description : `Orcs are driven by instinct. They are clever, strong, and deadly in the wild. Some people think that their natural abilities give them a distinct edge because they can think and make difficult decisions in the same way as allExemplars do. Some orc tribes have honed their most powerful instincts, giving them a decided edge in hunting, survival, and combat. The Orcs of Certainty are one such tribe. They’ve embraced a level of insight that’s well beyond the comprehension of allExemplars, allowing them to detect aggression and fear in others. These orcs are nearly impossible to deceive, since they almost always have advance warning.

                Orcs of Certainty may be exemplars or orcs, and they have a special trait called Trace of Danger, which allows them to detect hostile creatures and the greed and avarice of those guarding treasure troves.`,
                rarity : 'Epic',
                abilityName : 'Trace of Danger',
                ability : 'Can sense aggressive creatures.',
                abilImg : weavAbilImg,
                total : 2000,
                charImg : weavImg,
            },
            {
                id : 15,
                name : 'Orc of the Long Hunt',
                description : `Long, difficult searches are typical of their people. It provides them with a sense of adventure and excitement for lengthy amounts of time, allowing them to capture the most elusive and valuable game.`,
                rarity : 'Epic',
                abilityName : 'Satiated',
                ability : 'Can go much longer without food or sleep.',
                abilImg : weavAbilImg,
                total : 2000,
                charImg : weavImg,
            }
            
        ], dwarves : [
            {
                id : 16,
                name : 'Conveyor',
                description : `The ability to move massive rocks and rich ores is highly prized, as their deity, Gravis is said to hold up the mountains deep within the ground.`,
                rarity : 'Epic',
                abilityName : 'Legs of the Pillar',
                ability : 'Bonus to Carrying Weight',
                abilImg : weavAbilImg,
                total : 2000,
                charImg : weavImg,
            },
            {
                id : 17,
                name : 'Deep Mountain Clan',
                description : `Some say the dwarves of the deep mountains are as numerous as the stones within which they dwell. There are dozens (perhaps hundreds) of clans under the mountains and spread throughout the veins of the planet, and many of them have not seen the sky in countless centuries. They sing songs in hypnotic deep voices of the ancient kings of Mirandus’ past. They work hard in their mines, feast heartily at the slightest occasion, and live fruitful lives of boundless joy.

                The Exemplars known as Deep Mountain Clan have evolved through generations to see without sight in the dark. It is said that a Deep Mountain Clan dwarf can sense their surroundings with great precision, even in the darkest pitch blackness.`,
                rarity : 'Epic',
                abilityName : 'Surface Sense',
                ability : 'Can see in pitch black interiors.',
                abilImg : weavAbilImg,
                total : 2000,
                charImg : weavImg,
            },
            {
                id : 18,
                name : 'Glimmering Clan',
                description : `The Glimmering Clan’s members are known to have developed excellent skills in finding “treasure in the trash,” as well as riches in the rubble. It has been suggested that some of the most valuable objects discovered during dwarven mining operations have gone unnoticed and been carelessly discarded. Members of the Glimmering Clan, who are constantly working to make extra money to cover their costs, are often seen searching the various dumps and scrap heaps that populate Mirandus for valuable items. The Glimmering Clan has a reputation of being very good hagglers, with members always trying to buy things cheaply and sell them for more expensive prices.

                These mining professionals, like those who search for gold or silver in streams, seem to be guided by something deeper than a desire for money. They rummage through mounds of mining debris, regardless of the size of the “waste” pile.
                
                When the Glimmering Clan appears on a busy mining site, the leaders of the operation are frequently frustrated since they find ore that had been overlooked. The Glimmering Clan is particularly useful to mining managers who wish to sift through their crew’s discards. These dwarves, as Exemplars, have a talent called Ascertain Ore that enhances mining output by a percentage.`,
                rarity : 'Epic',
                abilityName : 'Ascertain Ore',
                ability : 'Bonus to mining output.',
                abilImg : weavAbilImg,
                total : 2000,
                charImg : weavImg,
            },
            {
                id : 19,
                name : 'Hollower',
                description : `Living in the mountains and mines has endowed dwarves with a variety of special talents and abilities, most of which the outside world finds quite useful. Searching for the greatest riches on the stones is frequently a needle-in-a-haystack task, especially because little gems are sometimes valued by their scarcity. In these cases, it’s usually best to develop a strong working relationship with the dwarves: they will be more than happy to extract valuable minerals in exchange for some of your excess goods, and always seem to have an extra pick-ax when yours breaks. Dwarven mining equipment is famous (or infamous) for its incredible strength and reliability; an average pick-axe made out of standard brass will last through about 60,000 strikes before it needs to be replaced. Dwarven mining equipment is not normally available for purchase; one must become a valued client of the dwarves in order to procure some of their produce. However, certain nobles and wealthy merchants are rumored to own some expertly crafted dwarven pick-axes (rumored to be worth thousands of gold coins, thanks to their durability).

                The Hollowers have made intuition a priority in their history, and they’ve focused on it. They may sense unseen fractures within the stones, allowing them to extract the most out of each strike with their hammer or pick. Some even say that the greatest Hollowers can sense the exact location of the sought treasure and uncover it with no wasted time at all. Others simply make the case the Hollowers are consistently lucky.
                
                Despite the fact that these Exemplars don’t display a fracture-preventing ability, they do have a characteristic called Feel for Fractures. This trait allows them to mine without expending as much energy.`,
                rarity : 'Epic',
                abilityName : 'Feel for Fractures',
                ability : 'Reduced energy costs when mining.',
                abilImg : weavAbilImg,
                total : 2000,
                charImg : weavImg,
            },
            {
                id : 20,
                name : 'Iron Shaper',
                description : `Although the majority of dwarves dwell in caves, not all of them do so. For many generations, some have mingled with the numerous civilizations on Mirandus, running shops, performing trades, and providing a variety of services to its inhabitants. The Iron Shapers are one such dwarven clan. The greatest blacksmiths in the land are members of this illustrious family, and they devote their entire lives to maintaining their edge.

                The Hammer Way is an uncommon technique by which they educate their children. It creates the perceptions of young Iron Shapers about the world, always focusing on their trade’s tools. When a youngster’s very first successful hammer strike is made, it’s as if the world has suddenly changed for them.
                
                On Hammer Day, Iron Shapers from all around the world pay their respects to their newest brother or sister by bringing them gifts. Many of Iron Shapers were too young at the time to recall or comprehend the significance of Hammer Day.
                
                Iron Shapers are individuals who have been forged by the fire, and as Exemplars, they have the Way of the Anvil trait. Reduced energy costs when blacksmithing and the ability to make high-quality weapons and iron implements are among their advantages as Exemplars.`,
                rarity : 'Epic',
                abilityName : 'Way of the Anvil',
                ability : 'Reduced energy costs when blacksmithing.',
                abilImg : weavAbilImg,
                total : 2000,
                charImg : weavImg,
            }
        ], halflings : [
            {
                id : 21,
                name : 'Evenstride',
                description : `A lesser-known aspect of the halfling race is the Evenstrides, a clan that excels at running up and down hills. The Evenstrides are a fun clan to play as due to their unique ability to run up slopes despite being so small. -> A lesser-known feature of the halfling breed is the Evenstrides, Even though halflings are shorter than most allExemplars, these movement specialists are able to perfectly organize the forces involved to create the most efficient method of running, no matter the terrain. They can almost always outrun allExemplars and orcs both in terms of sprint speed and endurance.

                Evenstrides can use running as a way of getting around because they have great balance and can manage their weight distribution. Evenstrides are the most common type of halfling.
                
                Evenstrides are able to run with less energy cost as Exemplars due to the Swiftness trait, which allows them to operate at full speed for a short duration.`,
                rarity : 'Legendary',
                abilityName : 'Swiftness',
                ability : 'Reduced energy costs when running.',
                abilImg : weavAbilImg,
                total : 800,
                charImg : weavImg,
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
                abilImg : weavAbilImg,
                total : 800,
                charImg : weavImg,
            },
            {
                id : 23,
                name : 'Mumsend',
                description : `Deep in the hilly halfling region, there is a little hamlet known as Mumsend, which is sometimes called the quiet village. The inhabitants of this tight-knit neighborhood are mostly members of the clan known as the Mumsends. These halflings are generally perceptive spectators who seldom speak. The Mumsends’ ability to move silently is one of a kind. In other words, the Mumsends are masters in the field of creeping up without being noticed. Within their community, society is designed around individuals who are particularly good at not only sneaking up on others but also avoiding being sneaked upon themselves. Whisper is the game that determines public standing in Mumsend, and while it may appear to be a silly game, the outcomes are enforceable across the town.

                Whisper has a complex set of rules, but the basic idea is that Mumsends try to sneak up on their pals and neighbors and scare them out of their minds with a quiet greeting. Those who elicit the most startles earn the greatest degrees of respect from society. For many Mumsends, the game has had a significant impact on their lives, for better or worse.
                
                Mumsends are known for moving in almost complete silence, thanks to their trait called Stilled Passage. This can allow them to sneak into areas filled with dangerous creatures or to pick pockets, making it just a bit easier for them to line their purses.`,
                rarity : 'Legendary',
                abilityName : 'Stilled Passage',
                ability : 'Move in almost complete silence.',
                abilImg : weavAbilImg,
                total : 800,
                charImg : weavImg,
            },
            {
                id : 24,
                name : 'Neverlook',
                description : `Eavesdropping and hiding brings the Neverlooks great pride.  To them, a conversation overheard is meant to be shared — and profited from`,
                rarity : 'Legendary',
                abilityName : 'Fade',
                ability : 'If crouched and motionless, you are almost invisible.',
                abilImg : weavAbilImg,
                total : 800,
                charImg : weavImg,
            },
            {
                id : 25,
                name : 'Proudhearth',
                description : `The tiny people of the world, known as “little folk,” are also known for their great pleasure and appreciation in eating and drinking. These characteristics are rather odd for a race that is much smaller than allExemplars, yet they are real.

                The most talented halfling chefs are revered in much the same way that certain royal families are in other countries, and their cuisine is suitable for any Mirandus king. The Proudhearths are known as the greatest chefs among halflings. A Proudhearth halfling’s culinary specialty is preparing a vast meal in record time, no matter how many people are involved. It is claimed that even with just a few ingredients, a Proudheart can prepare an extravagant multi-dish dinner that will be remembered fondly by the entire party for the rest of their lives.
                
                Hearthmasters are a feature found in some Proudhearths that reduces the energy cost of cooking and brewing.`,
                rarity : 'Legendary',
                abilityName : 'Hearth Master',
                ability : 'Reduced energy costs when cooking and brewing.',
                abilImg : weavAbilImg,
                total : 800,
                charImg : weavImg,
            }
        ], elves : [
            {
                id : 26,
                name : 'Allsight',
                description : `The Allsight Elves, with regard to the other Elven tribes, are a mystery. Because of this, little is known about them. The Allsight Elves have an enigmatic relationship with magic that other Elves and allExemplars, orcs, halflings and dwarves will struggle to comprehend.

                These Elves are credited with preserving time for the exemplar race on numerous occasions throughout history. They are regarded as the keepers of time by some of the nation’s oldest tales, and they have saved the world on many occasions. It is thought that they may be found in all time. If this is true, it implies that they have a unique and helpful knowledge of not just the past, but also the future. The Allsights’ exceptional expertise with projectile weapons is due to their greatly improved eyesight.
                
                Allsight Elves are exemplars. They get a bonus to ranged weapons, but perhaps more significantly, Allsight Elves have a boost to chance encounters that range from chances from the ability Futurus to advantages in battle.`,
                rarity : 'Ancient',
                abilityName : 'Satiation of Sol',
                ability : 'In daylight, you can convert evergy to health.',
                abilImg : weavAbilImg,
                total : 200,
                charImg : weavImg,
            },
            {
                id : 27,
                name : 'Brightsun',
                description : `Elves are widely dispersed through Mirandus, although they are considerably rarer than allExemplars, dwarves, and orcs. Elves come in a variety of different varieties throughout Mirandus. Despite the fact that the types vary in many ways and attribute various origins to their abilities, they all acknowledge that they are descendants of the same Elven forefathers.

                The Brightsun Elves are the elves of the sun. The sun is seen as the source of all power and the giver of everything that has been exposed to its rays. They are described as “clothed in brilliant light” and as Exemplars, they have a unique power.
                
                This talent, known as the Satiation of Sol, allows the Brightsuns to transform solar energy into health at any time of day when the sun is out.`,
                rarity : 'Ancient',
                abilityName : 'Satiation of Sol',
                ability : 'In daylight, you can convert energy to health.',
                abilImg : weavAbilImg,
                total : 200,
                charImg : weavImg,
            },
            {
                id : 28,
                name : 'Darksun',
                description : `The Darksuns are a religious order of Elves who fully embrace their dark side. They aren’t evil per se. Rather, Darksuns are often quite kind and peaceful, even compared to other Elven clans. They have a unique sense of wise acceptance towards life. The Darksuns’ longevity is largely attributed to this. They are, in essence, a Doomsday Religion with the apocalypse of darkness they anticipate as their ultimate triumph fast approaching.

                Your Darksun Elf Exemplar may not give you the otherworldly wisdom of the Darksuns, but you’ll definitely get their ability to see at night. You’ll know what’s coming in the dark. When others cannot see you, you can still see them.
                
                This ancient race believes the sun will fade away, leaving only their kind behind.`,
                rarity : 'Ancient',
                abilityName : 'Starlight Vision',
                ability : 'You see well at night, as long as you are outside.',
                abilImg : weavAbilImg,
                total : 200,
                charImg : weavImg,
            },
            {
                id : 29,
                name : 'Earthlight',
                description : `Though Elven magic is typically concentrated around the sun, not all elven skills rely on its power for their magical energy. The Earthlight Elves are one such group; like many of their brethren, they enjoy the sun but are also connected with their powers no matter where they exist.

                For these well-versed magic users, spells are still fueled by light, but the light on which they rely is an undetectable force provided by the planet rather than the sun. Earthlight Elves are far more at ease using magic than even the most experienced exemplar mages because they have the Earth beneath their feet.
                
                Earthlight Elves exemplify the Exemplars, with Serenity as a special ability that reduces the casting cost of all spells cast by them.`,
                rarity : 'Ancient',
                abilityName : 'Serenity',
                ability : 'All spells come naturally, costing less energy to cast.',
                abilImg : weavAbilImg,
                total : 200,
                charImg : weavImg,
            },
            {
                id : 30,
                name : 'Everflow',
                description : `The rarest of the intelligent species that reside in Mirandus is the magnificent Everflow Elves, and they are also among the most uncommon. The Everflow Elves have an in-depth and intuitive grasp of magical energy, but they spend a lifetime studying and meditating on the conductive flow of magic. They see magic not as a collection of “spells” that must be cast, but rather as the natural movement of energy that may be harnessed to overcome any barrier with ease.

                The Everflow Elves are wonderfully gorgeous, and those who meet them personally may profit from their powers. Exemplars of the Everflow Elves are granted a significant boost to casting speed as Exemplars.`,
                rarity : 'Ancient',
                abilityName : 'Aspect of Magic',
                ability : 'Bonus to casting speed.',
                abilImg : weavAbilImg,
                total : 200,
                charImg : weavImg,
            }
        ]
    };


/*name this fetchExemplar and use the race as a prop*/

    const FetchExemplar = () => {
        return (
            <div className='r-background'>
                {AllExemplars.map((race) => (
                    <>
                        {race.map((exemplar) => (
                            <section id={exemplar.name} key={exemplar.id}>
                                <div className='r-charName'>The {exemplar.name}</div>
                                <img src={exemplar.charImg} className='r-charImg' alt={exemplar.name}></img>
                                <div className='r-charInfoCont'>
                                    <div className='r-charDescription'>{exemplar.description}</div>
                                    <img src={exemplar.abilImg} className='r-abilImg' alt={exemplar.ability}></img>
                                    <div className='r-abilName'>Ability: {exemplar.abilityName}</div>
                                    <div className='r-abilDesc'>{exemplar.ability}</div>
                                </div>
                            </section>
                        ))}
                    </>
                ))}
            </div>
        )
    }



    const BubblesOut = () => {
        const [bool, setBool] = useState(true);
        return (
            <div className={ bool ? `r-bubbleCont notActive` : `r-bubbleCont notActive`} >
                {AllExemplars.map((exemplar) => (
                    <button className='r-bubbleBtn'>
                        <a href={'#' + exemplar.name} key={AllExemplars.charImg}>
                            <img src={exemplar.charImg} className='r-topNavBubbles' alt={exemplar.name}></img>
                            <div className='r-namePlate'>{exemplar.name}</div>
                        </a>
                    </button>
                ))}
            </div>
    )
    }

    const BubblesIn = () => {
        const [bool, setBool] = useState(false);

    return (
        <div className={ bool ? 'r-bubbleCont active' : `r-bubbleCont active`}>
            {AllExemplars.map((exemplar) => (
                <button className='r-bubbleBtn'>
                    <a href={'#' + exemplar.name} key={AllExemplars.charImg}>
                        <img src={exemplar.charImg} className='r-topNavBubbles' alt={exemplar.name}></img>
                        <div className='r-namePlate'>{exemplar.name}</div>
                    </a>
                </button>
            ))}
        </div>
    )
    }

export { BubblesIn, BubblesOut, FetchExemplar, AllExemplars }

/*
,{
    id : 5,
    name : 'Pit Fighter',
    description : `Pit Fighters are said to be the roughest and toughest of the allExemplars. With a rough beginning, the Pit Fighters are strong in fights in the arena and frequently receive the prize.`,
    rarity : 'Rare',
    abilityName : 'Unarmed Melee',
    ability : 'Bonus when fighting empty handed.',
    abilImg : pitfAbilImg,
    total : 2500,
    charImg : pitfImg,
},{
    id : 6,
    name : 'Rider of the North',
    description : `The greatest Mirandus riders are from the northern high plains, where it’s said that allExemplars are born with the wandering blood. These nomadic riders truly enjoy traveling and freewheeling adventure. A Rider of the North can cover greater distances in a day than most people do in their entire lives. Their horses are magnificent creatures of breathtaking majesty, with whom their riders have an unbreakable bond.

    It is claimed that a Rider of the North is so selfless in his valor that he would sacrifice his life for his horse at a moment’s notice if required. The horses would do the same. The Riders of the North receive Equestrian, a significant boosts to all horse-related abilities and skills.`,
    rarity : 'Rare',
    abilityName : 'Equestrian',
    ability : 'Bonus to all horse skills and abilities.',
    abilImg : rideAbilImg,
    total : 2500,
    charImg : rideImg,
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
},{
    id : 8,
    name : 'Stronghand',
    description : `Stronghands, the exemplar Exemplars known as Mirandus’ finest artisans, can be found in every corner of this extraordinary game world. Stronghands may be found in almost any town or village.

    Through the darkest nights, the wettest days, and the most hair-raising experiences, Explorers have trusted in their own hands. The Stronghands’ legacy has been passed down through many generations of the globe’s most tenacious workers. The Blacksmiths despise inactivity and take pleasure in their most productive days. For the Stronghands, inventiveness is more than a job; it’s a way of life.
    
    If you have a Stronghand for a buddy, your adventures and quests will go more smoothly. These Exemplars benefit from the Expediency Trait, which gives them a speed boost to all crafting.`,
    rarity : 'Rare',
    abilityName : 'Expediency',
    ability : 'Bonus to all crafting.',
    abilImg : stroAbilImg,
    total : 2500,
    charImg : stroImg,
},{
    id : 9,
    name : 'True Provider',
    description : `allExemplars, as the world’s first farmers and providers of food, have always possessed the greatest agricultural abilities. allExemplars experience an overpowering and inexplicable desire to care for and nurture others throughout history. They are impartial and non-discriminatory; they derive pleasure from creating, producing, and delivering the benefits of their efforts. The finest of these worldwide exemplar servant heroes are the True Providers, who are known as Exemplars.

    The endless joy they derive from their actions result in additional heroic bonuses to all farming and ranching activity.`,
    rarity : 'Rare',
    abilityName : 'Agriculturist',
    ability : 'Bonus to all farming and ranching abilities.',
    abilImg : trueAbilImg,
    total : 2500,
    charImg : trueImg,
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
}
}, orcs : {
{
    id : 11,
    name : 'Beating Heart Clan',
    description : `Orc hunters inspire terror in those who go alone in the woods, for good reason. They have a sixth sense that allows them to see the blood of their prey flowing through its veins and truly see it. The Beating Heart Clan is a clan of Exemplars who have made this sense into an amazing art form. They may be found all around the world. Hunters by profession and inclination, they are killers by instinct.

    Orcs with this ability can locate life-forms’ heat signatures around them on the hunt.`,
    rarity : 'Epic',
    abilityName : 'Pulse Perception',
    ability : 'Ability to see heat signatures.',
    abilImg : weavAbilImg,
    total : 2000,
    charImg : weavImg,
}, 
{
    id : 12,
    name : 'Bone Orc',
    description : `In the native areas of the Bone Orcs, the jagged limestone cliffs stretch for miles in all directions. These rocks are so common that Orc bands have inhabited cracks and fissures for centuries, forcing them to build their homes within. Only by chance and accident did many orcs meet their deaths as they slid or tumbled. Accidental impalements were not uncommon, especially among seasoned fighters.

    The orcs were made to be the ultimate killing machine, and they have remained so ever since. They are not known for their great dexterity or balance, but only those with the toughest flesh and the greatest ability to heal could survive and thrive throughout history. The healing orcs of this region were known by outsiders as the Bone Orcs over time. Their natural healing abilities are so potent that even broken bones are said to be mended rapidly and with ease. They have now taken pride in being referred to as Exemplars, having a talent called Improved Mending.
    
    Bone Orcs are resilient to bleeding and heal quickly.`,
    rarity : 'Epic',
    abilityName : 'Improved Mending',
    ability : 'Faster healing and almost immune to bleeding.',
    abilImg : weavAbilImg,
    total : 2000,
    charImg : weavImg,
},
{
    id : 13,
    name : 'Clear Blood',
    description : `The Clear Bloods are a particularly odd race of Mirandus orcs. With curiosity, even their fellow Mirandus orcs from other tribes regard them, and any outsider who sees their customs is likely to find them disturbing at the very least. Unlike the majority of orcs, who are uninterested in the inner workings of their bodies, the Clear Bloods have a strong focus on medicines. But to outsiders, most of their dozens of medicines are considered deadly poisons.

    Some Clear Bloods are able to build immunities not only to the effects of those poisons but also to the consequences of all other poisons in the world by regularly administering these medicines throughout their lives. In order to be initiated into the Clear Blood, orcs must endure a number of painful procedures. However, as Exemplars, Clear Bloods are immune to almost any poison because to their inherited trait called Toxin Release.`,
    rarity : 'Epic',
    abilityName : 'Toxin Release',
    ability : 'Almost immune to poisons.',
    abilImg : weavAbilImg,
    total : 2000,
    charImg : weavImg,
},
{
    id : 14,
    name : 'Orc of Certainty',
    description : `Orcs are driven by instinct. They are clever, strong, and deadly in the wild. Some people think that their natural abilities give them a distinct edge because they can think and make difficult decisions in the same way as allExemplars do. Some orc tribes have honed their most powerful instincts, giving them a decided edge in hunting, survival, and combat. The Orcs of Certainty are one such tribe. They’ve embraced a level of insight that’s well beyond the comprehension of allExemplars, allowing them to detect aggression and fear in others. These orcs are nearly impossible to deceive, since they almost always have advance warning.

    Orcs of Certainty may be exemplars or orcs, and they have a special trait called Trace of Danger, which allows them to detect hostile creatures and the greed and avarice of those guarding treasure troves.`,
    rarity : 'Epic',
    abilityName : 'Trace of Danger',
    ability : 'Can sense aggressive creatures.',
    abilImg : weavAbilImg,
    total : 2000,
    charImg : weavImg,
},
{
    id : 15,
    name : 'Orc of the Long Hunt',
    description : `Long, difficult searches are typical of their people. It provides them with a sense of adventure and excitement for lengthy amounts of time, allowing them to capture the most elusive and valuable game.`,
    rarity : 'Epic',
    abilityName : 'Satiated',
    ability : 'Can go much longer without food or sleep.',
    abilImg : weavAbilImg,
    total : 2000,
    charImg : weavImg,
}

}, dwarves : {
{
    id : 16,
    name : 'Conveyor',
    description : `The ability to move massive rocks and rich ores is highly prized, as their deity, Gravis is said to hold up the mountains deep within the ground.`,
    rarity : 'Epic',
    abilityName : 'Legs of the Pillar',
    ability : 'Bonus to Carrying Weight',
    abilImg : weavAbilImg,
    total : 2000,
    charImg : weavImg,
},
{
    id : 17,
    name : 'Deep Mountain Clan',
    description : `Some say the dwarves of the deep mountains are as numerous as the stones within which they dwell. There are dozens (perhaps hundreds) of clans under the mountains and spread throughout the veins of the planet, and many of them have not seen the sky in countless centuries. They sing songs in hypnotic deep voices of the ancient kings of Mirandus’ past. They work hard in their mines, feast heartily at the slightest occasion, and live fruitful lives of boundless joy.

    The Exemplars known as Deep Mountain Clan have evolved through generations to see without sight in the dark. It is said that a Deep Mountain Clan dwarf can sense their surroundings with great precision, even in the darkest pitch blackness.`,
    rarity : 'Epic',
    abilityName : 'Surface Sense',
    ability : 'Can see in pitch black interiors.',
    abilImg : weavAbilImg,
    total : 2000,
    charImg : weavImg,
},
{
    id : 18,
    name : 'Glimmering Clan',
    description : `The Glimmering Clan’s members are known to have developed excellent skills in finding “treasure in the trash,” as well as riches in the rubble. It has been suggested that some of the most valuable objects discovered during dwarven mining operations have gone unnoticed and been carelessly discarded. Members of the Glimmering Clan, who are constantly working to make extra money to cover their costs, are often seen searching the various dumps and scrap heaps that populate Mirandus for valuable items. The Glimmering Clan has a reputation of being very good hagglers, with members always trying to buy things cheaply and sell them for more expensive prices.

    These mining professionals, like those who search for gold or silver in streams, seem to be guided by something deeper than a desire for money. They rummage through mounds of mining debris, regardless of the size of the “waste” pile.
    
    When the Glimmering Clan appears on a busy mining site, the leaders of the operation are frequently frustrated since they find ore that had been overlooked. The Glimmering Clan is particularly useful to mining managers who wish to sift through their crew’s discards. These dwarves, as Exemplars, have a talent called Ascertain Ore that enhances mining output by a percentage.`,
    rarity : 'Epic',
    abilityName : 'Ascertain Ore',
    ability : 'Bonus to mining output.',
    abilImg : weavAbilImg,
    total : 2000,
    charImg : weavImg,
},
{
    id : 19,
    name : 'Hollower',
    description : `Living in the mountains and mines has endowed dwarves with a variety of special talents and abilities, most of which the outside world finds quite useful. Searching for the greatest riches on the stones is frequently a needle-in-a-haystack task, especially because little gems are sometimes valued by their scarcity. In these cases, it’s usually best to develop a strong working relationship with the dwarves: they will be more than happy to extract valuable minerals in exchange for some of your excess goods, and always seem to have an extra pick-ax when yours breaks. Dwarven mining equipment is famous (or infamous) for its incredible strength and reliability; an average pick-axe made out of standard brass will last through about 60,000 strikes before it needs to be replaced. Dwarven mining equipment is not normally available for purchase; one must become a valued client of the dwarves in order to procure some of their produce. However, certain nobles and wealthy merchants are rumored to own some expertly crafted dwarven pick-axes (rumored to be worth thousands of gold coins, thanks to their durability).

    The Hollowers have made intuition a priority in their history, and they’ve focused on it. They may sense unseen fractures within the stones, allowing them to extract the most out of each strike with their hammer or pick. Some even say that the greatest Hollowers can sense the exact location of the sought treasure and uncover it with no wasted time at all. Others simply make the case the Hollowers are consistently lucky.
    
    Despite the fact that these Exemplars don’t display a fracture-preventing ability, they do have a characteristic called Feel for Fractures. This trait allows them to mine without expending as much energy.`,
    rarity : 'Epic',
    abilityName : 'Feel for Fractures',
    ability : 'Reduced energy costs when mining.',
    abilImg : weavAbilImg,
    total : 2000,
    charImg : weavImg,
},
{
    id : 20,
    name : 'Iron Shaper',
    description : `Although the majority of dwarves dwell in caves, not all of them do so. For many generations, some have mingled with the numerous civilizations on Mirandus, running shops, performing trades, and providing a variety of services to its inhabitants. The Iron Shapers are one such dwarven clan. The greatest blacksmiths in the land are members of this illustrious family, and they devote their entire lives to maintaining their edge.

    The Hammer Way is an uncommon technique by which they educate their children. It creates the perceptions of young Iron Shapers about the world, always focusing on their trade’s tools. When a youngster’s very first successful hammer strike is made, it’s as if the world has suddenly changed for them.
    
    On Hammer Day, Iron Shapers from all around the world pay their respects to their newest brother or sister by bringing them gifts. Many of Iron Shapers were too young at the time to recall or comprehend the significance of Hammer Day.
    
    Iron Shapers are individuals who have been forged by the fire, and as Exemplars, they have the Way of the Anvil trait. Reduced energy costs when blacksmithing and the ability to make high-quality weapons and iron implements are among their advantages as Exemplars.`,
    rarity : 'Epic',
    abilityName : 'Way of the Anvil',
    ability : 'Reduced energy costs when blacksmithing.',
    abilImg : weavAbilImg,
    total : 2000,
    charImg : weavImg,
}
}, halflings : {
{
    id : 21,
    name : 'Evenstride',
    description : `A lesser-known aspect of the halfling race is the Evenstrides, a clan that excels at running up and down hills. The Evenstrides are a fun clan to play as due to their unique ability to run up slopes despite being so small. -> A lesser-known feature of the halfling breed is the Evenstrides, Even though halflings are shorter than most allExemplars, these movement specialists are able to perfectly organize the forces involved to create the most efficient method of running, no matter the terrain. They can almost always outrun allExemplars and orcs both in terms of sprint speed and endurance.

    Evenstrides can use running as a way of getting around because they have great balance and can manage their weight distribution. Evenstrides are the most common type of halfling.
    
    Evenstrides are able to run with less energy cost as Exemplars due to the Swiftness trait, which allows them to operate at full speed for a short duration.`,
    rarity : 'Legendary',
    abilityName : 'Swiftness',
    ability : 'Reduced energy costs when running.',
    abilImg : weavAbilImg,
    total : 800,
    charImg : weavImg,
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
    abilImg : weavAbilImg,
    total : 800,
    charImg : weavImg,
},
{
    id : 23,
    name : 'Mumsend',
    description : `Deep in the hilly halfling region, there is a little hamlet known as Mumsend, which is sometimes called the quiet village. The inhabitants of this tight-knit neighborhood are mostly members of the clan known as the Mumsends. These halflings are generally perceptive spectators who seldom speak. The Mumsends’ ability to move silently is one of a kind. In other words, the Mumsends are masters in the field of creeping up without being noticed. Within their community, society is designed around individuals who are particularly good at not only sneaking up on others but also avoiding being sneaked upon themselves. Whisper is the game that determines public standing in Mumsend, and while it may appear to be a silly game, the outcomes are enforceable across the town.

    Whisper has a complex set of rules, but the basic idea is that Mumsends try to sneak up on their pals and neighbors and scare them out of their minds with a quiet greeting. Those who elicit the most startles earn the greatest degrees of respect from society. For many Mumsends, the game has had a significant impact on their lives, for better or worse.
    
    Mumsends are known for moving in almost complete silence, thanks to their trait called Stilled Passage. This can allow them to sneak into areas filled with dangerous creatures or to pick pockets, making it just a bit easier for them to line their purses.`,
    rarity : 'Legendary',
    abilityName : 'Stilled Passage',
    ability : 'Move in almost complete silence.',
    abilImg : weavAbilImg,
    total : 800,
    charImg : weavImg,
},
{
    id : 24,
    name : 'Neverlook',
    description : `Eavesdropping and hiding brings the Neverlooks great pride.  To them, a conversation overheard is meant to be shared — and profited from`,
    rarity : 'Legendary',
    abilityName : 'Fade',
    ability : 'If crouched and motionless, you are almost invisible.',
    abilImg : weavAbilImg,
    total : 800,
    charImg : weavImg,
},
{
    id : 25,
    name : 'Proudhearth',
    description : `The tiny people of the world, known as “little folk,” are also known for their great pleasure and appreciation in eating and drinking. These characteristics are rather odd for a race that is much smaller than allExemplars, yet they are real.

    The most talented halfling chefs are revered in much the same way that certain royal families are in other countries, and their cuisine is suitable for any Mirandus king. The Proudhearths are known as the greatest chefs among halflings. A Proudhearth halfling’s culinary specialty is preparing a vast meal in record time, no matter how many people are involved. It is claimed that even with just a few ingredients, a Proudheart can prepare an extravagant multi-dish dinner that will be remembered fondly by the entire party for the rest of their lives.
    
    Hearthmasters are a feature found in some Proudhearths that reduces the energy cost of cooking and brewing.`,
    rarity : 'Legendary',
    abilityName : 'Hearth Master',
    ability : 'Reduced energy costs when cooking and brewing.',
    abilImg : weavAbilImg,
    total : 800,
    charImg : weavImg,
}
}, elves : {
{
    id : 26,
    name : 'Allsight',
    description : `The Allsight Elves, with regard to the other Elven tribes, are a mystery. Because of this, little is known about them. The Allsight Elves have an enigmatic relationship with magic that other Elves and allExemplars, orcs, halflings and dwarves will struggle to comprehend.

    These Elves are credited with preserving time for the exemplar race on numerous occasions throughout history. They are regarded as the keepers of time by some of the nation’s oldest tales, and they have saved the world on many occasions. It is thought that they may be found in all time. If this is true, it implies that they have a unique and helpful knowledge of not just the past, but also the future. The Allsights’ exceptional expertise with projectile weapons is due to their greatly improved eyesight.
    
    Allsight Elves are exemplars. They get a bonus to ranged weapons, but perhaps more significantly, Allsight Elves have a boost to chance encounters that range from chances from the ability Futurus to advantages in battle.`,
    rarity : 'Ancient',
    abilityName : 'Satiation of Sol',
    ability : 'In daylight, you can convert evergy to health.',
    abilImg : weavAbilImg,
    total : 200,
    charImg : weavImg,
},
{
    id : 27,
    name : 'Brightsun',
    description : `Elves are widely dispersed through Mirandus, although they are considerably rarer than allExemplars, dwarves, and orcs. Elves come in a variety of different varieties throughout Mirandus. Despite the fact that the types vary in many ways and attribute various origins to their abilities, they all acknowledge that they are descendants of the same Elven forefathers.

    The Brightsun Elves are the elves of the sun. The sun is seen as the source of all power and the giver of everything that has been exposed to its rays. They are described as “clothed in brilliant light” and as Exemplars, they have a unique power.
    
    This talent, known as the Satiation of Sol, allows the Brightsuns to transform solar energy into health at any time of day when the sun is out.`,
    rarity : 'Ancient',
    abilityName : 'Satiation of Sol',
    ability : 'In daylight, you can convert energy to health.',
    abilImg : weavAbilImg,
    total : 200,
    charImg : weavImg,
},
{
    id : 28,
    name : 'Darksun',
    description : `The Darksuns are a religious order of Elves who fully embrace their dark side. They aren’t evil per se. Rather, Darksuns are often quite kind and peaceful, even compared to other Elven clans. They have a unique sense of wise acceptance towards life. The Darksuns’ longevity is largely attributed to this. They are, in essence, a Doomsday Religion with the apocalypse of darkness they anticipate as their ultimate triumph fast approaching.

    Your Darksun Elf Exemplar may not give you the otherworldly wisdom of the Darksuns, but you’ll definitely get their ability to see at night. You’ll know what’s coming in the dark. When others cannot see you, you can still see them.
    
    This ancient race believes the sun will fade away, leaving only their kind behind.`,
    rarity : 'Ancient',
    abilityName : 'Starlight Vision',
    ability : 'You see well at night, as long as you are outside.',
    abilImg : weavAbilImg,
    total : 200,
    charImg : weavImg,
},
{
    id : 29,
    name : 'Earthlight',
    description : `Though Elven magic is typically concentrated around the sun, not all elven skills rely on its power for their magical energy. The Earthlight Elves are one such group; like many of their brethren, they enjoy the sun but are also connected with their powers no matter where they exist.

    For these well-versed magic users, spells are still fueled by light, but the light on which they rely is an undetectable force provided by the planet rather than the sun. Earthlight Elves are far more at ease using magic than even the most experienced exemplar mages because they have the Earth beneath their feet.
    
    Earthlight Elves exemplify the Exemplars, with Serenity as a special ability that reduces the casting cost of all spells cast by them.`,
    rarity : 'Ancient',
    abilityName : 'Serenity',
    ability : 'All spells come naturally, costing less energy to cast.',
    abilImg : weavAbilImg,
    total : 200,
    charImg : weavImg,
},
{
    id : 30,
    name : 'Everflow',
    description : `The rarest of the intelligent species that reside in Mirandus is the magnificent Everflow Elves, and they are also among the most uncommon. The Everflow Elves have an in-depth and intuitive grasp of magical energy, but they spend a lifetime studying and meditating on the conductive flow of magic. They see magic not as a collection of “spells” that must be cast, but rather as the natural movement of energy that may be harnessed to overcome any barrier with ease.

    The Everflow Elves are wonderfully gorgeous, and those who meet them personally may profit from their powers. Exemplars of the Everflow Elves are granted a significant boost to casting speed as Exemplars.`,
    rarity : 'Ancient',
    abilityName : 'Aspect of Magic',
    ability : 'Bonus to casting speed.',
    abilImg : weavAbilImg,
    total : 200,
    charImg : weavImg,
}*/