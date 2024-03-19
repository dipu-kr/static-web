import React from "react";
import { HiPlus } from "react-icons/hi";

const HomeElevateDetails = ({ title, para, image }) => {
  return (
    <div className="w-full mb-8">
      <div>
        <h1 className="flex text-[26px] font-[400] leading-[35px]">
          <span>{title}</span>
          <span className="font-[400] text-[35px] leading-[35px]">+</span>
        </h1>
        <p className="text-justify my-2 font-[]400 text-[16.5px] leading-[30px]">
          {para}
        </p>
        <div className="w-full mt-5">
          <img
            src={image}
            alt={`${title}-Image`}
            className="w-[100%] object-cover border border-gray-100 shadow-md bg-white rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeElevateDetails;
