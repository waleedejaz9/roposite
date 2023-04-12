import { Helmet } from "react-helmet";

import HouseCheckForm from "../../containers/AppForms/HouseCheckForm";
import HeroBottomSection from "../../components/HeroBottomSection";
import PagesMenu from "../../components/SubPagesMenuSection";
import RopoContainer from "../../components/RopoContainer";
import Hero from "../../components/Hero";

const array = [{ text: "House Check History", link: "/", subMenuItems: [] }];

const HouseCheckPage = () => {
  return (
    <>
      <Helmet>
        <title>House Check</title>
      </Helmet>
      <Hero image="/images/banner.png" text="HOUSE CHECK" />

      <HeroBottomSection />
      <div className="bg-bgSection h-36">
        <RopoContainer customClassName="mx-auto md:max-w-screen-lg">
          <PagesMenu menuItems={array} />
        </RopoContainer>
      </div>

      <RopoContainer>
        <h1 className="text-4xl font-serif text-ropocardview text-center pl-4 pr-4 pt-4 md:pb-4 md:pt-10 heading-text">
          House Check
        </h1>
        <div className="flex justify-center md:p-6">
          <hr className="md:w-full w-10/12 bg-primary max-w-2xl"></hr>
        </div>
        <h1 className="text-gray-400 text-center pt-2 md:pt-0 paragraph-text">
          Please Describe Your Request Here
        </h1>
        <div className="flex justify-center">
          <h1 className="text-center text-gray-500 w-8/12 md:w-11/12 pt-4 md:pt-10 md:leading-10 paragraph-text">
            Please complete the form for scheduling house check.All information
            is strictly confidential and will only be viewed by members of the
            patrol department. Due to postal regulations, officers are not able
            to remove mail or deliveries from a resident;s property
          </h1>
        </div>

        <div className="flex justify-center">
          <HouseCheckForm />
        </div>
        <div className="flex justify-center md:pt-10">
          <h1 className="text-center text-gray-500 w-8/12 md:w-11/12 pt-4 md:pt-0 md:leading-10 md:text-xl text-xs">
            If you want to avoid to enter your house check information every
            time you use this service. you can complete the information on your
            profile page and save it in your profile. When next you click the
            'Put My House on House Check' link. your information will
            automatically be placed in the form. you may edit your information
            at any time in your profile
          </h1>
        </div>
      </RopoContainer>
    </>
  );
};
export default HouseCheckPage;
