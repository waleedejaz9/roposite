import React from "react";
import { Helmet } from "react-helmet";

import ForgetForm from "../../containers/AppForms/ForgetPasswordForm";
import HeroBottomSection from "../../components/HeroBottomSection";
import Hero from "../../components/Hero";
import RopoContainer from "../../components/RopoContainer";
import { APP_IMAGES } from "../../constants";

const ForgetPage = () => {
  return (
    <>
      <Helmet>
        <title>Forget password</title>
      </Helmet>
      <Hero image="/images/banner.png" text="FORGET PASSWORD" />
      <HeroBottomSection />
      <div className="flex justify-center mt-12 mb-36">
        <div className="flex flex-col justify-center max-w-md w-5/6">
          <div className="flex justify-center">
            <img src={APP_IMAGES.LOGO_ICON} alt="icon" className="w-24" />
          </div>
          <RopoContainer>
            <h6 className="p-2 mt-4 text-4xl text-center whitespace-pre-line font-serif">
              Forget Password
            </h6>
            <hr className="leading-normal border-color:white"></hr>
            <div className="flex flex-col justify-center items-center">
              <ForgetForm />
            </div>
          </RopoContainer>
        </div>
      </div>
    </>
  );
};

export default ForgetPage;
