import React from "react";
import heroImg from "../assets/images/hero.svg";

const HeroRightComp = () => {
  return (
    <div className="h-[85vh] flex justify-end  relative">
      <img
        src={heroImg}
        alt="img"
        className="bg-cover absolute bottom-[40px]"
      />
    </div>
  );
};

export default HeroRightComp;
