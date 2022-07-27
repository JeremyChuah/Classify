import React, { useState, useEffect } from "react";
import OurTeamProfile from "./OurTeamProfile";
import Jay from "./square.jpg";
import Jeremy from "./1650497222877.jpg";
import Faizan from "./sqqqq.jpg";
import Jad from "./sq2.png";

var profiles = [
    {
     img: Jad,   
     name: 'Jad Bazian',
     title: 'Project Lead/Business Lead',
    },
   
    {
     img: Jeremy,   
     name: 'Jeremy Chuah',
     title: 'Lead Engineering & Product',
    },
   
    {
     img: Jay,
     name: 'Jay Bhalala',
     title: 'Chief Operating Officer & Developer',
    },
    {
     img: Faizan,   
     name: 'Faizan Kalam',
     title: 'Chief Marketing Officer',
    },
   
   ];

function About() {

  return (
    <div>
        <h5>Our Co-Founders</h5>
        {profiles.map((profile, index)=>
            <OurTeamProfile 
            img={profile.img}
            name = {profile.name}
            title={profile.title}
            key={index} /> 
        )}
    </div>
  );
}

export default About;