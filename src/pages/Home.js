import React from "react";
import Navbar from "./navbar/navbar.js";
import HomeHero from "./homecomponents/home-hero.js";
import Classgrid from "./homecomponents/classgrid.js";
import Aboutgrid from "./homecomponents/aboutgrid.js";

function Home() {
  return (
    <div>
      <HomeHero />
      <Classgrid />
      <Aboutgrid />
    </div>
  );
}

export default Home;
