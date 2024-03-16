import React from "react";
import { HiPlus } from "react-icons/hi";

const HomeElevateDetails = ({ title, para, image }) => {
  return (
    <div className="w-full mb-8">
      <div>
        <h1 className="flex text-[20px] font-bold">
          <span>{title}</span>
          <span>
            <HiPlus />
          </span>
        </h1>
        <p className="text-justify my-2 font-normal">{para}</p>
        <div className="w-full mt-5">
          <img
            src={image}
            alt={`${title}-Image`}
            className="w-[100%] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeElevateDetails;
