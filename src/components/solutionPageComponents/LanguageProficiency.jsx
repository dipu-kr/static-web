import React from "react";
import languageproficiency from "../../assets/images/languageproficiency.svg";
import culturalfitassesment from "../../assets/images/culturalfitassesment.svg";
import comparativeanalysis from "../../assets/images/comparativeanalysis.svg";

const LanguageProficiency = ({ activeTab }) => {
  return (
    <div className="w-full h-[380px] px-[150px] bg-[#F0F4F7] rounded-md">
      {activeTab === 1 && (
        <div className="w-full flex items-center justify-between gap-10 py-[70px]">
          <div className="w-[48%]">
            <h3 className="text-[18px] font-bold mb-5 flex">
              Language Proficiency
            </h3>
            <p>
              Track health progress easily. Our dashboard consolidates
              activities
            </p>
            <p>
              {" "}
              and offers support, ensuring employee well-being stays a priority.
            </p>
          </div>
          <div className="w-[48%]">
            <img
              src={languageproficiency}
              alt="Image"
              className="object-cover"
            />
          </div>
        </div>
      )}
      {/* -------------second tab----------- */}
      {activeTab === 2 && (
        <div className="w-full flex items-center justify-between gap-10 py-[70px]">
          <div className="w-[48%]">
            <h3 className="text-[18px] font-bold mb-5 flex">
              Cultural Fit Assessment
            </h3>
            <p>
              Track health progress easily. Our dashboard consolidates
              activities
            </p>
            <p>
              {" "}
              and offers support, ensuring employee well-being stays a priority.
            </p>
          </div>
          <div className="w-[48%]">
            <img
              src={culturalfitassesment}
              alt="Image"
              className="object-cover"
            />
          </div>
        </div>
      )}
      {/* -------------third tab----------- */}
      {activeTab === 3 && (
        <div className="w-full flex items-center justify-between gap-10 py-[70px]">
          <div className="w-[48%]">
            <h3 className="text-[18px] font-bold mb-5 flex">
              Comparative Analysis
            </h3>
            <p>
              Track health progress easily. Our dashboard consolidates
              activities
            </p>
            <p>
              {" "}
              and offers support, ensuring employee well-being stays a priority.
            </p>
          </div>
          <div className="w-[48%]">
            <img
              src={comparativeanalysis}
              alt="Image"
              className="object-cover"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageProficiency;
