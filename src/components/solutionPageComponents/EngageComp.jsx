import React, { useState, useEffect } from "react";
import solutionEngageimg from "../../assets/images/solutionEngageimg.svg";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { FaPlus } from "react-icons/fa";

const EngageComp = ({ id }) => {
  const [showContent, setShowContent] = useState(false);
  const [selectTab, setSelectTab] = useState(1);
  console.log(selectTab);

  useEffect(() => {
    setShowContent(false);
    const timeout = setTimeout(() => {
      setShowContent(true);
    }, 200);

    return () => clearTimeout(timeout);
  }, [id]);

  const engageTabs = [
    {
      id: 1,
      tab: "Engagement Dashboard",
    },
    {
      id: 2,
      tab: "Announcements & Posts",
    },
    {
      id: 3,
      tab: "Poll Checks for Real-Time Insights:",
    },
    {
      id: 4,
      tab: "Survey Mechanism for Employee Feedback:",
    },
    {
      id: 5,
      tab: "Quick Survey Templates",
    },
    {
      id: 6,
      tab: "Enhanced Employee Engagement",
    },
  ];

  const engageData = [
    {
      id: 1,
      image: "Engagement Dashboard",
      des: "Share concise updates on diverse topics, fostering quick communication to increase employee engagement and morale.",
    },
    {
      id: 2,
      image: "Engagement Dashboard",
      des: "Share diverse content--memes, articles, org-wide updates. Whether short or long form, encourage engagement and knowledge sharing across the organization, enhancing communication and team cohesion.",
    },
    {
      id: 3,
      image: "Engagement Dashboard",
      des: "Allows organizations to gauge real-time sentiments and opinions among employees.",
    },
    {
      id: 4,
      image: "Engagement Dashboard",
      des: "Enables organizations to collect comprehensive feedback from employees.",
    },
    {
      id: 5,
      image: "Engagement Dashboard",
      des: "Helps you choose from pre-defined survey templates on various topics that will help shape decision-making in your organization",
    },
    {
      id: 6,
      image: "Engagement Dashboard",
      des: "Integrate announcements, articles, polls, surveys for engaging workplace. Helps boost internal communication, participation, and employee experience.",
    },
  ];

  return (
    <>
      {/*for mobile size */}
      <div className="lg:hidden">
        <h3 className="flex pl-3">
          <span className="flex text-[22px] font-[600] text-[#1A73E8] leading-[30px] border-b-2 border-[#1A73E8]">
            Engage
          </span>
          <span>
            <FaPlus size={15} className="text-[#1A73E8]" />
          </span>
        </h3>
      </div>
      {/* -------------------- */}
      <div className="w-full px-[12px] lg:px-[40px] bg-[#F0F4F7] rounded-[14px]">
        <div
          className="w-full flex items-center flex-col lg:flex-row justify-between gap-5 lg:gap-10 py-[20px] lg:py-[70px]"
          style={{
            opacity: showContent ? 1 : 0,
            transition: showContent ? "opacity 0.4s ease" : "",
          }}
        >
          <div className="w-full lg:w-[55%] border border-green-500">
            <img
              src={solutionEngageimg}
              alt="Image"
              className="w-full lg:w-[600px] object-cover"
            />
            <p className="text-[16px] font-[400] leading-[25px] text-[#000000] mt-[12px]">
              Share diverse content--memes, articles, org-wide updates. Whether
              short or long form, encourage engagement and knowledge sharing
              across the organization, enhancing communication and team
              cohesion.
            </p>
          </div>
          <div className="w-full lg:w-[45%]">
            {engageTabs?.map((val) => (
              <div
                key={val?.id}
                className="w-full flex items-center gap-[15px] mb-5"
              >
                <p
                  onClick={() => setSelectTab(val?.id)}
                  className="w-full h-[43px] flex items-center text-[20px]font-[400] leading-[30px] text-[#000000] border border-red-500"
                >
                  {val?.tab}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default EngageComp;
