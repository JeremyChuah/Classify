import React, { useState, useEffect } from "react";
import OurTeamProfile from "./OurTeamProfile";
import Jay from "./square.jpeg";
import Jeremy from "./1650497222877.jpg";
import Faizan from "./sqq.jpg";
import Jad from "./sq2.png";

var profiles = [
    {
     img: Jad,   
     name: 'Jad Baziam',
     title: 'Business Lead',
    },
   
    {
     img: Jeremy,   
     name: 'Jeremy Chuah',
     title: 'VP of Engineering & Product',
    },
   
    {
     img: Jay,
     name: 'Jay Bhalala',
     title: 'Chief Operating Officer & Developer',
    },
    {
     img: Faizan,   
     name: 'Faizan Kalam',
     title: 'Marketing Lead',
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