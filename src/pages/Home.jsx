import React from "react";
import Layout from "../components/Layout/Layout";
import HeroLeftComp from "../components/HeroLeftComp";
import HeroRightComp from "../components/HeroRightComp";
import LogoComp from "../components/LogoComp";
import HomeMiddlePageComp from "../components/HomeMiddlePageComp";
import HomeMiddlePageComp2 from "../components/HomeMiddlePageComp2";
import HomeElevateComp from "../components/HomeElevateComp";
import HomeElevateNav from "../components/HomeElevateNav";
import HomeWhyComp from "../components/HomeWhyComp";
import CustomerStoriesComp from "../components/CustomerStoriesComp";
import HomeFeatureComp from "../components/HomeFeatureComp";
import HomeBottomComp from "../components/HomeBottomComp";

const Home = () => {
  return (
    <Layout>
      <div className="h-auto border">
        <div className="min-h-[85vh] flex">
          <div className="ml-[150px] flex-1">
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
          <HomeElevateNav />
        </div>
        <div>
          <HomeWhyComp />
        </div>
        <div>
          <CustomerStoriesComp />
        </div>
        <div>
          <HomeFeatureComp />
        </div>
        <div>
          <HomeBottomComp />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
