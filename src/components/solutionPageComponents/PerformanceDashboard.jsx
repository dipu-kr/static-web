import React from "react";
import Frame from "../../assets/images/Frame.svg";
import Frame1 from "../../assets/images/Frame1.svg";
import Frame2 from "../../assets/images/Frame2.svg";
import Frame3 from "../../assets/images/Frame3.svg";
import Frame4 from "../../assets/images/Frame4.svg";
import Frame5 from "../../assets/images/Frame5.svg";

const PerformanceDashboard = ({ activeTab }) => {
  const tabData = [
    {
      id: 1,
      image: Frame,
      title: "Performance Dashboard",
      description:
        "Track health progress easily. Our dashboard consolidates activities and offers support, ensuring employee well-being stays a priority.",
    },
    {
      id: 2,
      image: Frame1,
      title: "Milestones",
      description:
        "Track health progress easily. Our dashboard consolidates activities and offers support, ensuring employee well-being stays a priority.",
    },
    {
      id: 3,
      image: Frame2,
      title: "To-Dos",
      description:
        "Track health progress easily. Our dashboard consolidates activities and offers support, ensuring employee well-being stays a priority.",
    },
    {
      id: 4,
      image: Frame3,
      title: "Meetings",
      description:
        "Track health progress easily. Our dashboard consolidates activities and offers support, ensuring employee well-being stays a priority.",
    },
    {
      id: 5,
      image: Frame4,
      title: "Proccesses",
      description:
        "Track health progress easily. Our dashboard consolidates activities and offers support, ensuring employee well-being stays a priority.",
    },
    {
      id: 6,
      image: Frame5,
      title: "Strategy Cockpit",
      description:
        "Track health progress easily. Our dashboard consolidates activities and offers support, ensuring employee well-being stays a priority.",
    },
  ];
  return (
    <div className="w-full min-h-[380px] px-[40px] bg-[#F0F4F7] rounded-[14px]">
      {tabData?.map(
        (val) =>
          val?.id === activeTab && (
            <div
              key={val?.id}
              className="w-full flex items-center justify-between gap-10 py-[70px]"
            >
              <div className="w-[50%]">
                <img
                  src={val?.image}
                  alt="Image"
                  className="w-[600px] h-[350px] object-cover"
                />
              </div>
              <div className="w-[50%]">
                <h3 className="text-[20px] font-[600] leading-[40px]">
                  {val?.title}
                </h3>
                <p className="text-[16px] font-[400]">{val?.description}</p>
              </div>
            </div>
          )
      )}
    </div>
  );
};

export default PerformanceDashboard;
