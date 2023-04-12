import React from "react";
import { Helmet } from "react-helmet";

import LoginForm from "../../containers/AppForms/LoginForm";
import RopoContainer from "../../components/RopoContainer";
import { APP_IMAGES } from "../../constants";
import Hero from "../../components/Hero";
import HeroBottomSection from "../../components/HeroBottomSection";
const LoginPage = () => {
  return (
    <>
      <Helmet>
        <title>Login Page</title>
      </Helmet>
      <Hero image="/images/banner.png" text="SIGN IN" />
      <HeroBottomSection />
      <div className="flex justify-center mt-12 mb-36">
        <div className="flex flex-col justify-center max-w-md w-5/6">
          <div className="flex justify-center">
            <img src={APP_IMAGES.LOGO_ICON} alt="icon" className="w-24" />
          </div>

          <RopoContainer>
            <h6 className="p-2 mt-4 text-4xl text-center whitespace-pre-line font-serif">
              Sign into your account
            </h6>
            <hr className="leading-normal border-color:white"></hr>
            <div className="flex flex-col justify-center items-center">
              <LoginForm />
            </div>
          </RopoContainer>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
