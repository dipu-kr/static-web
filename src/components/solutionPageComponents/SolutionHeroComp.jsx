import React from "react";
import solutionheroimg from "../../assets/images/solutionheroimg.png";

const SolutionHeroComp = () => {
  return (
    <div className="w-full px-[150px]">
      <div className="flex h-[85vh] items-center gap-10">
        <div className="flex-1">
          <h1 className="text-[40px] font-bold leading-7">
            Real-Time ML Drives
          </h1>
          <h1 className="text-[40px] font-bold">Real Value</h1>
          <p className="text-justify font-normal mt-4">
            Whether you’re already deploying real-time predictions or about to,
            Tecton connects to leading infrastructure solutions and tools to
            make your real- time ML journey as successful as possible.
          </p>
        </div>
        <div className="flex-1">
          <img
            src={solutionheroimg}
            alt="Image"
            className="w-[100%] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default SolutionHeroComp;
