import React from "react";
import consultation from "../../assets/images/consultation.svg";

const ConnsultationComp = () => {
  return (
    <div className="w-full h-[380px] px-[150px] bg-[#F0F4F7] rounded-md">
      <div className="w-full flex items-center justify-between gap-10 py-[70px]">
        <div className="w-[45%]">
          <img src={consultation} alt="Image" className="object-cover" />
        </div>
        <div className="w-[45%]">
          <h3 className="text-[18px] font-bold mb-5 flex">
            Health Connsultation
          </h3>
          <p>
            Track health progress easily. Our dashboard consolidates activities
            and offers support, ensuring employee well-being stays a priority.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConnsultationComp;
