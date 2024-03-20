import React from "react";
import heroImg from "../assets/images/homeimg.png";

const HeroRightComp = () => {
  return (
    <div className=" flex justify-end">
      <img src={heroImg} alt="img" className="w-[100%] bg-cover" />
    </div>
  );
};

export default HeroRightComp;
