import './App.css';
import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";
import Header from './components/Header';
import Navigation from './components/Navigation';
import Main from './components/Main';
import Post from './components/Post';
import Gallery from './components/Gallery';
import Contacts from './components/Contacts';

import StarWars from "./assets/img/starwars.png";
import Anakin from "./assets/img/Anakin_Skywalker.jpeg";
import AnakinPost from "./assets/img/Ray_Skywalker.jpeg";
import Padmé_Amidala from "./assets/img/Padmé_Amidala.jpeg";
import PadméAmidalaPost from "./assets/img/sunset.jpeg";
import Leia_Organa from "./assets/img/Leia_Organa.jpeg";
import LeiaOrganaPost from "./assets/img/selfie.jpeg";

const description = 'The Star Wars franchise depicts the adventures of characters "A long time ago in a galaxy far, far away", in which humans and many species of aliens (often humanoid) co-exist with robots, or "droids", who may assist them in their daily routines; space travel between planets is common due to lightspeed hyperspace technology. Spacecraft range from small starfighters, to huge capital ships such as the Star Destroyers, to space stations such as the moon-sized Death Stars. Telecommunication includes two-way audio and audiovisual screens, and holographic projections. A mystical power known as the Force is described in the original film as "an energy field created by all living things ... [that] binds the galaxy together". Through training and meditation, those whom "the Force is strong with" are able to perform various superpowers (such as telekinesis, precognition, telepathy, and manipulation of physical energy). The Force is wielded by two major knightly orders at conflict with each other: the Jedi, peacekeepers of the Galactic Republic who act on the light side of the Force through non-attachment and arbitration, and the Sith, who use the dark side by manipulating fear and aggression. While Jedi Knights can be numerous, the Dark Lords of the Sith (or "Darths") are intended to be limited to two: a master and their apprentice.Force-wielders are very limited in numbers in comparison to the population. The Jedi and Sith prefer the use of a weapon called a lightsaber, a blade of energy that can cut through virtually any surface and deflect energy bolts. The rest of the population, as well as renegades and soldiers, use laser-powered blaster firearms. In the outer reaches of the galaxy, crime syndicates such as the Hutt cartel are dominant. Bounty hunters are often employed by both gangsters and governments. Illicit activities include smuggling and slavery.';

const post = [
  {
    name: "Anakin Skywalker",
    photo: Anakin,
    nickname: "@dart_vader",
    content: "WTF? Who is Ray? Why she is Skywalker? Luke...?",
    image: AnakinPost,
    date: "26 февр.",
    comments: 482,
    shares: 146,
    likes: 887
  },{
    name: "Padmé Amidala",
    photo: Padmé_Amidala,
    nickname: "@amiii",
    content: "Look! What a SUNSET today😍",
    image: PadméAmidalaPost,
    date: "18 февр.",
    comments: 300,
    shares: 119,
    likes: 1237
  },{
    name: "Leia Organa",
    photo: Leia_Organa,
    nickname: "@leila_organa",
    content: "It's time to post selfie!!)",
    image: LeiaOrganaPost,
    date: "3 февр.",        
    comments: 165,
    shares: 29,
    likes: 943
  }
];
 
function App() {
  return (
    <div className="container">
      <Router>
        <Header heading={'Star Wars Blog'}/>
        <Navigation/>
        <Routes>
          <Route path="/js-21" element={<Main  picture={StarWars} description={description}/>}/>
          <Route path="/post" element={ post.map((post) => <Post post={post}/>)}/>
          <Route path="/gallery" element={<Gallery/>}  />
          <Route path="/contacts" element={<Contacts/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;