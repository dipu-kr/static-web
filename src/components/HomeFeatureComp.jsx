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
    <div className="w-full px-[150px]">
      <div className="w-full flex justify-center items-center flex-col pt-[50px] pb-[100px]">
        <h5 className="text-[#FF7301] font-medium uppercase tracking-wider">
          Battle tested for the enterprise
        </h5>
        <h2 className="text-[30px] font-extrabold">
          Retain top talent with our exclusive{" "}
          <span className="text-[#FF7301]">personalized</span> features
        </h2>
        <div className="grid grid-cols-2 gap-[80px] px-[50px] mt-10">
          {dataList?.map((val) => (
            <div key={val?.id} className="w-full flex gap-5">
              <div className="w-[80px] h-[80px]">
                <img
                  src={val?.icon}
                  alt={`Icon ${val?.id}`}
                  className="object-contain"
                />
              </div>
              <div>
                <h5 className="text-[17px] font-bold mb-2">{val?.title}</h5>
                <p className="text-justify font-normal">{val?.para}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeFeatureComp;
