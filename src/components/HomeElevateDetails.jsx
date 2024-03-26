import React, { useState, useEffect } from "react";
import elevateEngage from "../assets/images/elevateEngage.jpg";
import elevateGrow from "../assets/images/elevateGrow.jpg";
import elevateMeet from "../assets/images/elevateMeet.jpg";
import elevateHealth from "../assets/images/elevateHealth.jpg";
import elevateRobo from "../assets/images/elevateRobo.jpg";
import elevateMarket from "../assets/images/elevateMarket.jpg";
import tab1 from "../assets/images/tab1.svg";
import tab2 from "../assets/images/tab2.svg";
import tab3 from "../assets/images/tab3.svg";
import tab4 from "../assets/images/tab4.svg";
import tab5 from "../assets/images/tab5.svg";
import tab6 from "../assets/images/tab6.svg";

const HomeElevateDetails = ({ activeTab }) => {
  const elevateDetails = [
    {
      id: 1,
      title: "Engage",
      icon: tab1,
      paragraph:
        "Amplify voices, share updates, and uncover insights with a diverse array of features including articles, polls, announcements, surveys, and pulse checks. Dive deep into employee sentiments and preferences to bridge perspectives and encourage active participation. Inspire with insightful reads on industry trends and personal growth while keeping everyone aligned with essential updates.",
      image: elevateEngage,
    },
    {
      id: 2,
      title: "Grow",
      icon: tab2,
      paragraph:
        "Elevate employee skills, drive engagement, and unlock potential through tailored learning experiences. With tailor-made learning paths for personalized growth and empowerment through mentorship and knowledge sharing, Inimble Learning Management ensures smooth transitions, even in remote setups. Celebrate achievements and foster a culture of appreciation with every step of the learning journey.",
      image: elevateGrow,
    },
    {
      id: 3,
      title: "Meet",
      icon: tab3,
      paragraph:
        "With Inimble L10 Meeting App, streamline discussions, track goals, and resolve issues effectively to propel organizational progress. Simplify meeting planning using pre-defined templates and coordinate meetings effortlessly with intuitive scheduling. Measure success through real-time performance metrics, while setting clear objectives and tracking progress seamlessly.",
      image: elevateMeet,
    },
    {
      id: 4,
      title: "Health",
      icon: tab4,
      paragraph:
        "Empower your employees to thrive with Inimble Health's access to personalized sessions, expert consultations, and curated health packs. Dive into a wealth of health and wellness content, thoughtfully curated by HR to support sustained well-being. Connect with health experts for personalized advice and explore tailored packs designed to enhance your journey to wellness.",
      image: elevateHealth,
    },
    {
      id: 5,
      title: "Robo",
      icon: tab5,
      paragraph:
        "Harness advanced insights with Inimble Candidate Analyzer to effortlessly evaluate candidates' language proficiency, cultural fit, and communication skills. Assess fluency, pronunciation, and proficiency while aligning candidates seamlessly with organizational ethos. Gauge clarity, engagement, and articulation, thereby benchmarking candidates for informed decision-making.",
      image: elevateRobo,
    },
    {
      id: 6,
      title: "Market",
      icon: tab6,
      paragraph:
        "Connect with trusted vendors, streamline event planning, and offer seamless services to your employees through the Inimble Vendor Marketplace. Showcase your skills and services effortlessly while opening doors to diverse event opportunities. Stay organized and never miss an event, enhancing event experiences through continuous feedback and improvement.",
      image: elevateMarket,
    },
  ];
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setShowContent(false);
    const timeout = setTimeout(() => {
      setShowContent(true);
    }, 250);

    return () => clearTimeout(timeout);
  }, [activeTab]);

  return (
    <>
      <div className="w-full my-[50px] hidden lg:block">
        {elevateDetails?.map(
          (val) =>
            val?.id === activeTab && (
              <div
                key={val?.id}
                className={`flex items-center px-[30px] gap-[70px] ${
                  activeTab % 2 === 0 && "flex-row-reverse"
                }`}
                style={{
                  opacity: showContent ? 1 : 0,
                  transition: showContent ? "opacity 0.4s ease" : "",
                }}
              >
                <div className="w-[50%]">
                  <h1 className="flex text-[26px] font-[600] leading-[35px]">
                    <span>{val?.title}</span>
                    <span className="font-[400] text-[35px] leading-[35px]">
                      +
                    </span>
                  </h1>
                  <p className="my-2 font-[]400 text-[16.5px] leading-[30px]">
                    {val?.paragraph}
                  </p>
                </div>
                <div className="w-[50%]">
                  <img
                    src={val?.image}
                    alt={`${val?.title}-Image`}
                    className="w-[100%] h-[370px] object-contain border border-gray-100 shadow-md bg-white rounded-md"
                  />
                </div>
              </div>
            )
        )}
      </div>
      {/* ------------mobile and tab screen-------------- */}
      <div className="w-full lg:my-[50px] lg:hidden">
        {elevateDetails?.map((val) => (
          <div
            key={val?.id}
            className={`flex items-center flex-col lg:px-[30px] gap-3 mb-7`}
            data-aos="fade-up"
          >
            <div className="w-[100%] lg:w-[50%]">
              <img src={val?.icon} />
              <h1 className="flex text-[22px] lg:text-[26px] font-[600] leading-[35px]">
                <span>{val?.title}</span>
                <span className="font-[400] text-[35px] leading-[35px]">+</span>
              </h1>
              <p className=" my-2 font-[400] text-[14px] leading-[24px] lg:text-[16px] lg:leading-[30px]">
                {val?.paragraph}
              </p>
            </div>
            <div className="w-[100%] lg:w-[50%]">
              <img
                src={val?.image}
                alt={`${val?.title}-Image`}
                className="w-[100%] h-auto lg:h-[370px] object-contain border border-gray-100 shadow-md bg-white rounded-md"
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default HomeElevateDetails;
