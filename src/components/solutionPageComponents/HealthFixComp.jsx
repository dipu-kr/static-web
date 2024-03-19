import React from "react";
import healthfix from "../../assets/images/healthfix.svg";

const HealthFixComp = () => {
  return (
    <div className="w-full min-h-[380px] px-[40px] bg-[#F0F4F7] rounded-md">
      <div className="w-full flex items-center justify-between gap-10 py-[70px]">
        <div className="w-[50%]">
          <img src={healthfix} alt="Image" className="w-[600px] object-cover" />
        </div>
        <div className="w-[50%]">
          <h3 className="text-[20px] font-[600] leading-[40px]">Health Fix</h3>
          <p className="text-[16px] font-[400]">
            Track health progress easily. Our dashboard consolidates activities
            and offers support, ensuring employee well-being stays a priority.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HealthFixComp;
