import React from "react";
import languageproficiency from "../../assets/images/languageproficiency.svg";
import culturalfitassesment from "../../assets/images/culturalfitassesment.svg";
import comparativeanalysis from "../../assets/images/comparativeanalysis.svg";

const LanguageProficiency = ({ activeTab }) => {
  return (
    <div className="w-full min-h-[380px] px-[40px] bg-[#F0F4F7] rounded-[14px]">
      {activeTab === 1 && (
        <div className="w-full flex items-center justify-between gap-10 py-[70px]">
          <div className="w-[50%]">
            <h3 className="text-[20px] font-[600] leading-[40px]">
              Language Proficiency
            </h3>
            <p className="text-[16px] font-[400]">
              Track health progress easily. Our dashboard consolidates
              activities
            </p>
            <p className="text-[16px] font-[400]">
              {" "}
              and offers support, ensuring employee well-being stays a priority.
            </p>
          </div>
          <div className="w-[50%]">
            <img
              src={languageproficiency}
              alt="Image"
              className="w-[600px] object-cover"
            />
          </div>
        </div>
      )}
      {/* -------------second tab----------- */}
      {activeTab === 2 && (
        <div className="w-full flex items-center justify-between gap-10 py-[70px]">
          <div className="w-[50%]">
            <h3 className="text-[20px] font-[600] leading-[40px]">
              Cultural Fit Assessment
            </h3>
            <p className="text-[16px] font-[400]">
              Track health progress easily. Our dashboard consolidates
              activities
            </p>
            <p className="text-[16px] font-[400]">
              {" "}
              and offers support, ensuring employee well-being stays a priority.
            </p>
          </div>
          <div className="w-[50%]">
            <img
              src={culturalfitassesment}
              alt="Image"
              className="w-[600px] object-cover"
            />
          </div>
        </div>
      )}
      {/* -------------third tab----------- */}
      {activeTab === 3 && (
        <div className="w-full flex items-center justify-between gap-10 py-[70px]">
          <div className="w-[50%]">
            <h3 className="text-[20px] font-[600] leading-[40px]">
              Comparative Analysis
            </h3>
            <p className="text-[16px] font-[400]">
              Track health progress easily. Our dashboard consolidates
              activities
            </p>
            <p className="text-[16px] font-[400]">
              {" "}
              and offers support, ensuring employee well-being stays a priority.
            </p>
          </div>
          <div className="w-[50%]">
            <img
              src={comparativeanalysis}
              alt="Image"
              className="w-[600px] object-cover"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageProficiency;
