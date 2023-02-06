import React from "react";
import Carousel from "./Carousel";

const HeroCard = (child) => {
  return (
    <div className="heroCard">
      <img className="cardSvg" src="public/assets/card.svg" alt="" />
      <h1 className="cardTitle">HAPPENING IS SPASTRIAL</h1>

      <div className="cardContent">
        <div className="carousel">
          <Carousel />
        </div>
        <div className="content">
          <h6>Special Spring Fest by GDSC TIU</h6>
          <h2>DEVFEST 2022</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In
            voluptatum fuga consequatur corrupti eius rerum, minima repellendus
            vitae facilis. Totam! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Officiis, quo.
          </p>
          <button>Register Now </button>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
