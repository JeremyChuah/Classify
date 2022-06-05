import React from "react";
import Classcard from "./classcard.js";
import Icon from "./cardimages/Icon-4.svg";
import "../homecomponents/classgrid.css";

function classgrid() {
  return (
    <div className="main-container">
      <div className="flex flex-col justify-center items-center mx-auto mt-10 w-4/5 z-10 content">
        <div className="md:grid md:grid-cols-3 justify-center items-center gap-7">
          <div className="flex flex-col md:justify-self-start md:items-start">
            <div className="text-2xl text-classifyBlue font-bold">
              Classes We Offer
            </div>
            <div className="md:text-left text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incidid
            </div>
          </div>
          <Classcard
            image={Icon}
            name="math"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid"
          />
          <Classcard
            image={Icon}
            name="math"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid"
          />
          <Classcard
            image={Icon}
            name="math"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid"
          />
          <Classcard
            image={Icon}
            name="math"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid"
          />
          <Classcard
            image={Icon}
            name="math"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid"
          />
        </div>
      </div>
    </div>
  );
}

export default classgrid;
