import React from "react";
import tab1 from "../assets/images/tab1.svg";
import tab2 from "../assets/images/tab2.svg";
import tab3 from "../assets/images/tab3.svg";
import tab4 from "../assets/images/tab4.svg";
import tab5 from "../assets/images/tab5.svg";
import tab6 from "../assets/images/tab6.svg";
import { HiPlus } from "react-icons/hi";

// import test from "../assets/images/test.png";
import test2 from "../assets/images/test2.jpg";
import elevateEngage from "../assets/images/elevateEngage.jpg";
import elevateGrow from "../assets/images/elevateGrow.jpg";
import elevateMeet from "../assets/images/elevateMeet.jpg";
import elevateHealth from "../assets/images/elevateHealth.jpg";
import elevateRobo from "../assets/images/elevateRobo.jpg";
import elevateMarket from "../assets/images/elevateMarket.jpg";

import HomeElevateDetails from "./HomeElevateDetails";

const HomeElevateNav = ({ isElevateNavScrolled }) => {
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

  const elevateDetails = [
    {
      id: 1,
      title: "Engage",
      paragraph:
        "Amplify voices, share updates, and uncover insights with a diverse array of features including articles, polls, announcements, surveys, and pulse checks. Dive deep into employee sentiments and preferences to bridge perspectives and encourage active participation. Inspire with insightful reads on industry trends and personal growth while keeping everyone aligned with essential updates.",
      image: elevateEngage,
    },
    {
      id: 2,
      title: "Grow",
      paragraph:
        "Elevate employee skills, drive engagement, and unlock potential through tailored learning experiences. With tailor-made learning paths for personalized growth and empowerment through mentorship and knowledge sharing, Inimble Learning Management ensures smooth transitions, even in remote setups. Celebrate achievements and foster a culture of appreciation with every step of the learning journey.",
      image: elevateGrow,
    },
    {
      id: 3,
      title: "Meet",
      paragraph:
        "With TAVA L10 Meeting App, streamline discussions, track goals, and resolve issues effectively to propel organizational progress. Simplify meeting planning using pre-defined templates and coordinate meetings effortlessly with intuitive scheduling. Measure success through real-time performance metrics, while setting clear objectives and tracking progress seamlessly.",
      image: elevateMeet,
    },
    {
      id: 4,
      title: "Health",
      paragraph:
        "Empower your employees to thrive with Inimble Health's access to personalized sessions, expert consultations, and curated health packs. Dive into a wealth of health and wellness content, thoughtfully curated by HR to support sustained well-being. Connect with health experts for personalized advice and explore tailored packs designed to enhance your journey to wellness.",
      image: elevateHealth,
    },
    {
      id: 5,
      title: "Robo",
      paragraph:
        "Harness advanced insights with TAVA Candidate Analyzer to effortlessly evaluate candidates' language proficiency, cultural fit, and communication skills. Assess fluency, pronunciation, and proficiency while aligning candidates seamlessly with organizational ethos. Gauge clarity, engagement, and articulation, thereby benchmarking candidates for informed decision-making.",
      image: elevateRobo,
    },
    {
      id: 6,
      title: "Market",
      paragraph:
        "Connect with trusted vendors, streamline event planning, and offer seamless services to your employees through the TAVA Vendor Marketplace. Showcase your skills and services effortlessly while opening doors to diverse event opportunities. Stay organized and never miss an event, enhancing event experiences through continuous feedback and improvement.",
      image: elevateMarket,
    },
  ];
  return (
    <div className="w-full px-[150px]">
      <div className="flex gap-8 mt-5">
        {/* -------------tab- div------ */}
        <div className={`w-[16%]`}>
          {data?.map((val) => (
            <div
              key={val?.id}
              className="flex items-center gap-2 border bg-[#FFE6D1] rounded-md mb-1 py-1 px-2 "
            >
              <img
                src={val?.icon}
                alt="icon"
                className="w-[38px] h-[38px] object-contain"
              />
              <h4 className="flex text-[16px] font-[400]">
                <span className="text-[14px]">{val?.title}</span>
                <span>
                  <HiPlus />
                </span>
              </h4>
            </div>
          ))}
        </div>
        {/* -------------content div--------------- */}
        <div className="w-[82%]">
          <div>
            {elevateDetails?.map((val) => (
              <HomeElevateDetails
                key={val?.id}
                title={val?.title}
                image={val?.image}
                para={val?.paragraph}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeElevateNav;
