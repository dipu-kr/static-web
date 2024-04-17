import React, { useEffect } from "react";
import engage from "../assets/images/engage.svg";
import grow from "../assets/images/grow.svg";
import meet from "../assets/images/meet.svg";
import ai from "../assets/images/ai.svg";
import health from "../assets/images/health.svg";
import { GoArrowRight } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import AOS from "aos";

const HomeMiddlePageComp = () => {
  const navigate = useNavigate();
  useEffect(() => {
    AOS.init({
      duration: 400,
      offset: 120,
      easing: "ease",
    });
  }, []);
  const data = [
    {
      id: 1,
      img: engage,
      heading: "Engage",
      para: "Drive interaction and knowledge sharing with Articles, Announcements, Polls, and Surveys.",
    },
    {
      id: 2,
      img: grow,
      heading: "Grow",
      para: "Nurture employee overall development with customized learning pathways and recognition badges.",
    },
    {
      id: 3,
      img: meet,
      heading: "Meet",
      para: "Conduct agenda-based meetings, set milestones, and track team goals effortlessly.",
    },
    {
      id: 4,
      img: ai,
      heading: "AI",
      para: "Streamline recruitment with insights into candidate behavior and confidence levels.",
    },
    {
      id: 5,
      img: health,
      heading: "Health",
      para: "Foster a culture of wellness with personalized health support and curated resources.",
    },
  ];
  return (
    <div className="w-full bg-[#ffffff]">
      <div className="w-full max-w-[1535px] mx-auto px-[20px] sm:px-[40px] lg:px-[100px] xl:px-[150px] overflow-y-hidden">
        <div className=" h-auto py-[40px] lg:py-[91px] flex flex-col justify-around">
          <div className="text-center" data-aos="fade-up">
            <h6 className="text-[15px] lg:text-[16.2px] font-[600] leading-[19.98px] uppercase text-[#092B59] mb-5">
              More than just a feature store
            </h6>
            <h1 className="text-[24px] lg:text-[38px] font-[600] text-[#000E21] leading-[30px] lg:leading-[46px]">
              Making Work Fun with Super Features
            </h1>
            <h1 className="text-[24px] lg:text-[38px] font-[600] text-[#000E21] leading-[30px] lg:leading-[46px]">
              for Super Teams
            </h1>
            <p className="w-[100%] lg:w-[85%] xl:w-[70%] text-[16px] lg:text-[24px] font-[400] leading-[26px] lg:leading-[35px] mx-auto text-[#4C4C4C] mt-3">
              Empower your workforce for an ever-changing landscape with
              Inimble's dynamic features. Adapt, evolve, and excel effortlessly.
              Streamline operations, harness insights, and craft engaging
              experiences. Welcome to the future of employee engagement.
            </p>
          </div>
          <div className="flex flex-wrap gap-6 mt-[50px] lg:mt-[90px]">
            {data?.map((item) => (
              <div
                key={item?.id}
                className="flex-1 flex flex-col gap-4 justify-between items-center"
                data-aos="fade-up"
              >
                <div className="w-[110px] h-[110px] lg:w-[128px] lg:h-[128px]">
                  <img
                    src={item?.img}
                    alt="svg-img"
                    className="w-full object-contain"
                  />
                </div>
                <h4>
                  <span className="text-[24px] lg:text-[26px] font-[600] leading-[31.85px]">
                    {item?.heading}
                  </span>
                  <span className="text-[45px] font-[400] leading-[55.13px]">
                    +
                  </span>
                </h4>
                <p className="text-center text-[16px] font-[400] text-[#000000] leading-[19.41px]">
                  {item?.para}
                </p>
                <button
                  onClick={() => navigate("/solution")}
                  className="w-[180px] h-[42px] bg-[#FF7301] text-[16px] leading-[600] text-[#FFFFFF] flex items-center justify-center gap-1 rounded"
                >
                  Learn More
                  <span>
                    <GoArrowRight />
                  </span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeMiddlePageComp;
