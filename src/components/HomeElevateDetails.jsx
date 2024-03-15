import React from "react";
import tab1 from "../assets/images/tab1.svg";
import tab2 from "../assets/images/tab2.svg";
import tab3 from "../assets/images/tab3.svg";
import tab4 from "../assets/images/tab4.svg";
import tab5 from "../assets/images/tab5.svg";
import tab6 from "../assets/images/tab6.svg";
import { HiPlus } from "react-icons/hi";

const HomeElevateDetails = () => {
  const data = [
    {
      id: 1,
      icon: tab1,
      title: "Engage",
    },
    {
      id: 2,
      icon: tab2,
      title: "Grow",
    },
    {
      id: 3,
      icon: tab3,
      title: "Meet",
    },
    {
      id: 4,
      icon: tab4,
      title: "Health",
    },
    {
      id: 5,
      icon: tab5,
      title: "Robo",
    },
    {
      id: 6,
      icon: tab6,
      title: "Market",
    },
  ];
  return (
    <div className="w-full px-[100px]">
      <div className="flex gap-8">
        <div className="w-[20%] border border-red-500 py-5">
          {data?.map((val) => (
            <div
              key={val?.id}
              className="flex items-center gap-1 border bg-orange-300 rounded mb-1 "
            >
              <img
                src={val?.icon}
                alt="icon"
                className="w-[40px] h-[40px] object-contain"
              />
              <h4 className="flex">
                <span>{val?.title}</span>
                <span>
                  <HiPlus />
                </span>
              </h4>
            </div>
          ))}
        </div>
        <div className="w-[78%] border">
          <h1>Content</h1>
        </div>
      </div>
    </div>
  );
};

export default HomeElevateDetails;
