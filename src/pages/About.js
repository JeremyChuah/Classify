import React from "react";
import "./About.css";
import Jay from "./square.jpg";
import Jeremy from "./1650497222877.jpg";
import Faizan from "./sqqqq.jpg";
import Jad from "./sq2.png";

function About() {
  return (
    <div className="mt-10">
      <div className="bg-gray-100 text-center py-6 flex md:flex-row flex-col justify-around items-center lg:mx-20 mx-10 rounded-md">
        <div className="text-4xl font-bold text-black">Our mission</div>
        <div className="lg:w-1/2 lg:text-xl px-5 lg:px-0">
          Here at Classify we strive to help students one class at a time! From
          helping students find out more information on classes to helping
          preview schedules, Classify has all students covered!
        </div>
      </div>
      <div class="wrapper">
        <h1 className="about-us-text4">Our Co-Founders</h1>
        <div class="team">
          <div class="team_member">
            <div class="team_img">
              <img
                class="rounded-circle z-depth-2"
                src={Jad}
                alt="Team_image"
              />
            </div>
            <h3>Jad Bazian</h3>
            <p class="role">Chief Executive Officer</p>
          </div>
          <div class="team_member">
            <div class="team_img">
              <img
                class="rounded-circle z-depth-2"
                src={Jeremy}
                alt="Team_image"
              />
            </div>
            <h3>Jeremy Chuah</h3>
            <p class="role">Chief Technology Officer</p>
          </div>
          <div class="team_member">
            <div class="team_img">
              <img
                class="rounded-circle z-depth-2"
                src={Jay}
                alt="Team_image"
              />
            </div>
            <h3>Jay Bhalala</h3>
            <p class="role">Chief Operating Officer & Developer</p>
          </div>
          <div class="team_member">
            <div class="team_img">
              <img
                class="rounded-circle z-depth-2"
                src={Faizan}
                alt="Team_image"
              />
            </div>
            <h3>Faizan Kalam</h3>
            <p class="role">Chief Marketing Officer</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
