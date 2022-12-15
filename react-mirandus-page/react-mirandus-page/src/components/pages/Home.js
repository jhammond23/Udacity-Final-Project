import React from "react";
import {useState} from 'react';
import '../../mirandushub/mirandushub.css'
import { useRef } from "react";
import { setProperty } from 'react';
import ReactPlayer from 'react-player';

export default function Home () {
  const [index, setIndex] = useState(null);

      const menu = document.getElementById("menu");

      Array.from(document.getElementsByClassName("menu-item"))
        .forEach((item, index) => {
          item.onmouseover = () => {
            menu.dataset.activeIndex = index;
          }
        });

    return (
        <section>
            <div id="menu">
                <div id="menu-items">
                    <div class='menu-item one' onMouseEnter={() => setIndex(1)}>ABOUT</div>
                    <div class='two menu-item' onMouseEnter={() => setIndex(2)}>EXPLORE</div>
                    <div class="menu-item three" onMouseEnter={() => setIndex(3)}>CREATORS</div>
                    <a class="menu-item four"href="https://discord.gg/pDgS8P2Jm9" onMouseEnter={() => setIndex(4)}>
                        <div class="menu-item four">GUILDS</div>
                    </a>
                </div>
                <div id="menu-background-pattern"></div>
                <div id="menu-background-image"></div>
            </div>
            <div className="orb"></div>
            <div className="orb2"></div>
            <div className="orb3"></div>
            <div className="orb4"></div>
            <div className="orb5"></div>
            <div className="homeMirandusDescriptionContainer">
                <h1 className="homeHeader">What is Mirandus?</h1>
                <div className="homeinfocont">
                  <div className="container">
                    <div className="homeDescription">Are you ready to step into the world of Mirandus, the most exciting medieval fantasy MMORPG on the blockchain? In this game, you'll be able to engage in epic boss battles and earn valuable loot along the way.
                    <br/><br/>
                    As you explore the lands of Mirandus, you'll encounter a wide range of powerful bosses, each with their own unique abilities and challenges. From towering, giant trolls to cunning, sneaky goblins, these bosses will push you to your limits. But with skill and determination, you'll be able to overcome them and earn valuable rewards.
                    <br/><br/>
                    One of the most challenging boss fights in Mirandus will be against the fearsome, ancient Minotaur King. This mighty beast is guards a hoard of treasure, and defeating it will require all of your wits and strength. With the right strategy and a powerful team of exemplars, you might just be able to claim his treasure as your own.
                    <br/><br/>
                    In addition to thrilling boss battles, Mirandus also offers a wide range of loot to be earned. From powerful weapons and armor to rare and valuable items, there's always something new to discover. And with the game's blockchain technology, you can be sure that your loot is safe and secure.
                    <br/><br/>
                    So why wait? Join the adventure and play Mirandus today! Explore the lands, engage in epic battles, and earn valuable rewards on your quest to become the ultimate hero. The world of Mirandus awaits!
                    </div>
                  </div>
                  <ReactPlayer
                  url="https://youtu.be/chbT1p99ziM"
                  width="45%"
                  height="auto"
                  controls
                  />
                </div>
            </div>
        </section>
    )
}