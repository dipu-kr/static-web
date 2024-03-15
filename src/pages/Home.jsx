import React from "react";
import Layout from "../components/Layout/Layout";
import HeroLeftComp from "../components/HeroLeftComp";
import HeroRightComp from "../components/HeroRightComp";
import LogoComp from "../components/LogoComp";
import HomeMiddlePageComp from "../components/HomeMiddlePageComp";
import HomeMiddlePageComp2 from "../components/HomeMiddlePageComp2";
import HomeElevateComp from "../components/HomeElevateComp";
import HomeElevateDetails from "../components/HomeElevateDetails";

const Home = () => {
  return (
    <Layout>
      <div className="h-auto">
        <div className="h-[85vh] flex">
          <div className="ml-[100px] flex-1">
            <HeroLeftComp />
          </div>
          <div className="flex-1">
            <HeroRightComp />
          </div>
        </div>
        <div>
          <LogoComp />
        </div>
        <div>
          <HomeMiddlePageComp />
        </div>
        <div>
          <HomeMiddlePageComp2 />
        </div>
        <div>
          <HomeElevateComp />
        </div>
        <div>
          <HomeElevateDetails />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
