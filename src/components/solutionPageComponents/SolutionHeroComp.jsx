import React from "react";
import solutionheroimg from "../../assets/images/solutionheroimg.svg";

const SolutionHeroComp = () => {
  return (
    <div className="w-full bg-[#ffffff]">
      <div className="w-full max-w-[1535px] mx-auto px-[150px]">
        <div className="flex h-auto  gap-10 mb-[150px]">
          <div className="flex-1 mt-[142px]">
            <h1 className="text-[50px] font-[600] leading-[53px]">
              Real-Time ML Drives
            </h1>
            <h1 className="text-[50px] font-[600] leading-[53px]">
              Real Value
            </h1>
            <p className="text-justify text-[18px] font-[400] leading-[32px] mt-4">
              Whether you’re already deploying real-time predictions or about
              to, Tecton connects to leading infrastructure solutions and tools
              to make your real- time ML journey as successful as possible.
            </p>
          </div>
          <div className="flex-1 mt-[60px]">
            <img
              src={solutionheroimg}
              alt="Image"
              className="w-[100%] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionHeroComp;
