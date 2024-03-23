import React from "react";
import featureIcon1 from "../assets/images/featureIcon1.svg";
import featureIcon2 from "../assets/images/featureIcon2.svg";
import featureIcon3 from "../assets/images/featureIcon3.svg";
import featureIcon4 from "../assets/images/featureIcon4.svg";
import featureIcon5 from "../assets/images/featureIcon5.svg";
import featureIcon6 from "../assets/images/featureIcon6.svg";

const HomeFeatureComp = () => {
  const dataList = [
    {
      id: 1,
      icon: featureIcon1,
      title: "Align Recognition with Goals",
      para: "Linking recognition to goals? It's not just a strategy; it's a game-changer! Watch productivity soar as every 'thank you' aligns with your team's objectives.",
    },
    {
      id: 2,
      icon: featureIcon2,
      title: "Manager Insights",
      para: "Linking recognition to goals? It's not just a strategy; it's a game-changer! Watch productivity soar as every 'thank you' aligns with your team's objectives.",
    },
    {
      id: 3,
      icon: featureIcon3,
      title: "AI Enable Employee Engagement",
      para: "Linking recognition to goals? It's not just a strategy; it's a game-changer! Watch productivity soar as every 'thank you' aligns with your team's objectives.",
    },
    {
      id: 4,
      icon: featureIcon4,
      title: "Long Service Awards",
      para: "Linking recognition to goals? It's not just a strategy; it's a game-changer! Watch productivity soar as every 'thank you' aligns with your team's objectives.",
    },
    {
      id: 5,
      icon: featureIcon5,
      title: "Social Recognition",
      para: "Linking recognition to goals? It's not just a strategy; it's a game-changer! Watch productivity soar as every 'thank you' aligns with your team's objectives.",
    },
    {
      id: 6,
      icon: featureIcon6,
      title: "Employee Wellness",
      para: "Linking recognition to goals? It's not just a strategy; it's a game-changer! Watch productivity soar as every 'thank you' aligns with your team's objectives.",
    },
  ];
  return (
    <div className="w-full h-auto bg-[#ffffff]">
      <div className="w-full max-w-[1535px] mx-auto px-[20px] sm:px-[40px] lg:px-[100px] xl:px-[150px]">
        <div className="w-full flex justify-center items-center flex-col pt-[70px] lg:pt-[100px] pb-[70px] lg:pb-[130px]">
          <h5 className="text-[#FF7301] text-[14px] lg:text-[18px] leading-[20px] font-[700] uppercase tracking-wider text-center mb-2 lg:mb-0">
            Battle tested for the enterprise
          </h5>
          <h2 className="text-[24px] lg:text-[38px] font-[600] leading-[30px] lg:leading-[46px] text-center">
            Retain top talent with our exclusive{" "}
            <span className="text-[#FF7301]">personalized</span> features
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-[80px] lg:px-[50px] mt-10">
            {dataList?.map((val) => (
              <div key={val?.id} className="w-full flex gap-5">
                <div className="w-[130px] lg:w-[80px] h-[80px]">
                  <img src={val?.icon} alt={`Icon ${val?.id}`} />
                </div>
                <div>
                  <h5 className="text-[16px] lg:text-[20px] font-[500] leading-[20px] lg:leading-[26px] mb-2 text-[#000000]">
                    {val?.title}
                  </h5>
                  <p className="text-justify text-[14px] font-[400] text-[#7F7F7F]">
                    {val?.para}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeFeatureComp;
