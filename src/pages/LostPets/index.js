import React from "react";
import { Helmet } from "react-helmet";

import HeroBottomSection from "../../components/HeroBottomSection";
import LostPetsFrom from "../../containers/AppForms/LostpetsForm";
import QA from "../../components/QA";
import RopoContainer from "../../components/RopoContainer";
import Hero from "../../components/Hero";
import "./style.scss";

const LostPets = () => {
  return (
    <>
      <Helmet>
        <title>LostPets</title>
      </Helmet>
      <Hero image="/images/banner.png" text="LOST PETS" />

      <HeroBottomSection />
      <RopoContainer customClassName="mx-auto max-w-screen-lg">
        <h6 className="flex mt-16 text-primary justify-center font-normal font-serif heading-text">
          Lost Pets
        </h6>
        <div className="flex justify-center p-6">
          <hr className="md:w-7/12 w-9/12 bg-primary"></hr>
        </div>

        <h6 className="text-gray-400 md:pr-12 md:mr-12 font-serif text-center lost-pets-paragraph ">
          please complete the following feilds and than select Submit
        </h6>

        <LostPetsFrom />

        <h6 className="flex mt-16 text-primary justify-center font-normal font-serif heading-text">
          Found Pets
        </h6>
        <div className="flex justify-center p-6">
          <hr className="md:w-7/12 w-9/12"></hr>
        </div>

        <h6 className=" text-gray-400 font-serif text-center found-pets-paragraph">
          Below are the pets that have been found. Please contact us if this is
          your pet or you have information
        </h6>
        <div className="flex justify-center">
          <div className="grid md:grid-cols-2 grid-cols-1 max-w-screen-sm ">
            <div className="p-4 flex justify-center">
              <img src="logo.png" alt="logo"></img>
            </div>

            <div className="p-4 flex flex-col">
              <QA answer="posted: Monday january 21, 2021" />
              <QA question="Found on 2500 block Kiby Dr." />
              <QA question="contact us if you have information." />
            </div>
          </div>
        </div>
      </RopoContainer>
    </>
  );
};

export default LostPets;
