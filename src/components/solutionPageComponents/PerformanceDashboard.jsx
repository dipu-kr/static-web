import React from "react";
import Frame from "../../assets/images/Frame.svg";
import Frame1 from "../../assets/images/Frame1.svg";
import Frame2 from "../../assets/images/Frame2.svg";
import Frame3 from "../../assets/images/Frame3.svg";
import Frame4 from "../../assets/images/Frame4.svg";
import Frame5 from "../../assets/images/Frame5.svg";

const PerformanceDashboard = ({ activeTab }) => {
  return (
    <div className="w-full h-[380px] px-[150px] bg-[#F0F4F7] rounded-md">
      {activeTab === 1 && (
        <div className="w-full flex items-center justify-between gap-10 py-[70px]">
          <div className="w-[45%]">
            <img src={Frame} alt="Image" className="object-cover" />
          </div>
          <div className="w-[45%]">
            <h3 className="text-[18px] font-bold mb-5 flex">
              Performance Dashboard
            </h3>
            <p>
              Track health progress easily. Our dashboard consolidates
              activities and offers support, ensuring employee well-being stays
              a priority.
            </p>
          </div>
        </div>
      )}
      {/* -----------second tab------------ */}
      {activeTab === 2 && (
        <div className="w-full flex items-center justify-between gap-10 py-[70px]">
          <div className="w-[45%]">
            <img src={Frame1} alt="Image" className="object-cover" />
          </div>
          <div className="w-[45%]">
            <h3 className="text-[18px] font-bold mb-5 flex">Milestones</h3>
            <p>
              Track health progress easily. Our dashboard consolidates
              activities and offers support, ensuring employee well-being stays
              a priority.
            </p>
          </div>
        </div>
      )}
      {/* -----------third tab------------ */}
      {activeTab === 3 && (
        <div className="w-full flex items-center justify-between gap-10 py-[70px]">
          <div className="w-[45%]">
            <img src={Frame2} alt="Image" className="object-cover" />
          </div>
          <div className="w-[45%]">
            <h3 className="text-[18px] font-bold mb-5 flex">To-Dos</h3>
            <p>
              Track health progress easily. Our dashboard consolidates
              activities and offers support, ensuring employee well-being stays
              a priority.
            </p>
          </div>
        </div>
      )}
      {/* -----------forth tab------------ */}
      {activeTab === 4 && (
        <div className="w-full flex items-center justify-between gap-10 py-[70px]">
          <div className="w-[45%]">
            <img src={Frame3} alt="Image" className="object-cover" />
          </div>
          <div className="w-[45%]">
            <h3 className="text-[18px] font-bold mb-5 flex">Meetings</h3>
            <p>
              Track health progress easily. Our dashboard consolidates
              activities and offers support, ensuring employee well-being stays
              a priority.
            </p>
          </div>
        </div>
      )}
      {/* -----------forth tab------------ */}
      {activeTab === 5 && (
        <div className="w-full flex items-center justify-between gap-10 py-[70px]">
          <div className="w-[45%]">
            <img src={Frame4} alt="Image" className="object-cover" />
          </div>
          <div className="w-[45%]">
            <h3 className="text-[18px] font-bold mb-5 flex">Proccesses</h3>
            <p>
              Track health progress easily. Our dashboard consolidates
              activities and offers support, ensuring employee well-being stays
              a priority.
            </p>
          </div>
        </div>
      )}
      {/* ---------fifth tab--------------- */}
      {activeTab === 6 && (
        <div className="w-full flex items-center justify-between gap-10 py-[70px]">
          <div className="w-[45%]">
            <img src={Frame5} alt="Image" className="object-cover" />
          </div>
          <div className="w-[45%]">
            <h3 className="text-[18px] font-bold mb-5 flex">
              Strategy Cockpit
            </h3>
            <p>
              Track health progress easily. Our dashboard consolidates
              activities and offers support, ensuring employee well-being stays
              a priority.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default PerformanceDashboard;
