import React from "react";
import HeroCard from "./HeroCard";

const HeroSection = () => {
  return (
    <div className="hero">
      <div className="headingContainer">
        <div className="lineOne">
          <h1>METAVERSE</h1>
          <div className="box"> FOR </div>
        </div>
        <div className="lineTwo">
          <div className="videoBtn">
            <img src="src/assets/play button.svg" alt="" />
            <h4>Watch Video</h4>
          </div>
          <h1>ARTISTS</h1>
        </div>
      </div>

      <HeroCard />
    </div>
  );
};

export default HeroSection;
