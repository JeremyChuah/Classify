import React from "react";
import Navbar from "../components/navbar/navbar.js";
import HomeHero from "./homecomponents/home-hero.js";
import Classgrid from "./homecomponents/classgrid.js";

function Home() {
  return (
    <div>
      <Navbar />
      <HomeHero />
      <Classgrid />
    </div>
  );
}

export default Home;
