import React from "react";
import { Helmet } from "react-helmet";

import ResetPasswordForm from "../../containers/AppForms/ResetPasswordForm";
import HeroBottomSection from "../../components/HeroBottomSection";
import Hero from "../../components/Hero";
import RopoContainer from "../../components/RopoContainer";

const ResetPage = () => {
  return (
    <>
      <Helmet>
        <title>Forget password</title>
      </Helmet>
      <Hero image="/images/banner.png" />
      <HeroBottomSection />
      <div className="flex justify-center mt-12 mb-36">
        <div className="flex flex-col justify-center max-w-md w-5/6">
          <div
            className="h-5 bg-cover bg-center min-w-24"
            style={{
              backgroundImage: 'url("/images/notfound.png")',
            }}
          ></div>
          <RopoContainer>
            <h6 className="p-2 mt-4 text-4xl text-center whitespace-pre-line font-serif">
              Reset Password
            </h6>
            <hr className="leading-normal border-color:white"></hr>
            <div className="flex flex-col justify-center items-center">
              <ResetPasswordForm />
            </div>
          </RopoContainer>
        </div>
      </div>
    </>
  );
};

export default ResetPage;
