import React from "react";
import "./About.css";
import Jay from "./square.jpg";
import Jeremy from "./1650497222877.jpg";
import Faizan from "./sqqqq.jpg";
import Jad from "./sq2.png";

function About() {

  return (
    <div>
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
            <p class="role">Project Lead/Business Lead</p>
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
            <p class="role">Lead Engineering & Product</p>
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