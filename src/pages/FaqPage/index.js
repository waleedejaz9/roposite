import RopoAccordian from "../../components/Accordian";
import QA from "../../components/QA";

import { Helmet } from "react-helmet";

import RopoContainer from "../../components/RopoContainer";
import Hero from "../../components/Hero";
import HeroBottomSection from "../../components/HeroBottomSection";

const FaqPage = () => {
  return (
    <>
      <Helmet>
        <title>FAQ</title>
      </Helmet>
      <Hero image="/images/banner.png" text="FAQ'S" />
      <HeroBottomSection />
      <RopoContainer>
        <h6 className="p-2 mt-4 text-2xl text-primary text-center whitespace-pre-line font-serif">
          Frequently Asked Questions
        </h6>
        <div className="flex justify-center">
          <hr className="w-1/2 col-underLineColor"></hr>
        </div>
        <h6 className="p-1 mt-1 text-xs text-center text-gray-400 font-serif">
          Below are some subjects that are frequently searched.
        </h6>
        <div className="flex justify-center">
          <div className="grid grid-rows  w-6/12">
            <RopoAccordian
              title={"Perks"}
              description={
                <QA
                  question="hello world"
                  answer="hi there."
                  questionClassName="font-bold text-black"
                />
              }
            />
            <RopoAccordian
              title={"Perks"}
              description={
                <QA
                  question="hello world"
                  answer="hi there."
                  questionClassName="font-bold text-black"
                />
              }
            />
          </div>
        </div>
      </RopoContainer>
    </>
  );
};

export default FaqPage;
