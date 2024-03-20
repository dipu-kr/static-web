import React from "react";
import heroImg from "../assets/images/homeimg.png";

const HeroRightComp = () => {
  return (
    <div className="w-full pl-4 lg:pl-0 lg:flex lg:justify-end">
      <img src={heroImg} alt="img" className="lg:w-[100%] bg-cover" />
    </div>
  );
};

export default HeroRightComp;
