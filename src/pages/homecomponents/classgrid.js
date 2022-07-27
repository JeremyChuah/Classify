import React from "react";
import Classcard from "./classcard.js";
import Geography from "./cardimages/geography.svg";
import Math from "./cardimages/math.svg";
import History from "./cardimages/history.svg";
import Science from "./cardimages/science.svg";
import English from "./cardimages/english.svg";
import "../homecomponents/classgrid.css";

function classgrid() {
  return (
    <div className="main-container">
      <div className="flex flex-col justify-center items-center mx-auto mt-10 w-4/5 z-10 content">
        <div className="md:grid md:grid-cols-3 justify-center items-center gap-7">
          <div className="flex flex-col md:justify-self-start md:items-start">
            <div className="text-2xl text-classifyBlue font-bold text-center">
              Classes We Offer
            </div>
            <div className="md:text-left text-center">
              We provide in-depth and analytical descriptions for the essential
              core class subjects and electives
            </div>
          </div>
          <Classcard
            image={Math}
            name="Math"
            description="Applications of mathematics in problem solving, probability, statistics, geometry, and calculus."
          />
          <Classcard
            image={Science}
            name="Science"
            description="Study the basics of life, genetics, microbiology, plant science, animal science, evolution, and chemistry."
          />
          <Classcard
            image={History}
            name="History"
            description="Explores important chapters of the human past from the earliest civilizations through the 15th century."
          />
          <Classcard
            image={English}
            name="English"
            description="The development of critical reading and writing skills and the application in real world context."
          />
          <Classcard
            image={Geography}
            name="Electives"
            description="Classes that pertain to career readiness or the arts, meant to be more enjoyable and to cater to your strengths."
          />
        </div>
      </div>
    </div>
  );
}

export default classgrid;
