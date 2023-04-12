import { Helmet } from "react-helmet";
import RopoContainer from "../../components/RopoContainer";
import { APP_IMAGES } from "../../constants";
import Hero from "../../components/Hero";
import HeroBottomSection from "../../components/HeroBottomSection";

const AccessDenied = () => {
  return (
    <>
      <Helmet>
        <title>Access Denied</title>
      </Helmet>
      <Hero image="/images/banner.png" text="ACCESS DENIED" />
      <HeroBottomSection />
      <RopoContainer>
        <div className="flex justify-center mt-12 mb-36">
          <div className="flex flex-col justify-center w-8/12">
            <div className="flex justify-center">
              <img src={APP_IMAGES.LOGO_ICON} alt="icon" className="w-24" />
            </div>
            <h6 className="p-2 mt-4 text-2xl text-primary text-center whitespace-pre-line font-serif">
              You Do Not Have Permission to Access This Page
            </h6>
            <hr className="leading-normal border-color:white "></hr>

            <h6 className="p-1 mt-1 text-sm text-center whitespace-pre-line font-serif">
              if you feel this is in error please contact us
            </h6>
          </div>
        </div>
      </RopoContainer>
    </>
  );
};
export default AccessDenied;
