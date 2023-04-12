import { Helmet } from "react-helmet";

import CardView from "../../components/CardView";
import HeroBottomSection from "../../components/HeroBottomSection";
import QA from "../../components/QA";
import RopoContainer from "../../components/RopoContainer";
const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>

      <img
        style={{ objectPosition: "47% 50%" }}
        className="object-cover w-full min-h-300"
        src="/images/banner.png"
        alt="banner"
      ></img>
      <HeroBottomSection />
      <RopoContainer>
        <div className="p-4 grid grid-cols-2 md:grid-cols-4">
          <div className="pr-4 pl-4 pb-2 md:border-r-2 sm:border-0 ">
            <CardView
              image={"/images/house-check.png"}
              description="hi"
              title="House Check"
            />
          </div>
          <div className="pr-4 pl-4 pb-2 md:border-r-2  sm:border-0 xs:border-0">
            <CardView
              image={"/images/house-check.png"}
              description="hi"
              title="House Check"
            />
          </div>
          <div className="pr-4 pl-4 pb-2 md:border-r-2 sm:border-0  xs:border-0">
            <CardView
              image={"/images/house-check.png"}
              description="hi"
              title="House Check"
            />
          </div>
          <div className="pr-4 pl-4 pb-2 sm:border-0  xs:border-0">
            <CardView
              image={"/images/house-check.png"}
              description="hi"
              title="House Check"
            />
          </div>
          <div className="pr-4 pl-4 pb-2 md:border-r-2 sm:border-0  xs:border-0">
            <CardView
              image={"/images/house-check.png"}
              description="hi"
              title="House Check"
            />
          </div>
          <div className="pr-4 pl-4 pb-2 md:border-r-2 sm:border-0  xs:border-0">
            <CardView
              image={"/images/house-check.png"}
              description="hi"
              title="House Check"
            />
          </div>
          <div className="pr-4 pl-4 pb-2 md:border-r-2 sm:border-0  xs:border-0">
            <CardView
              image={"/images/house-check.png"}
              description="hi"
              title="House Check"
            />
          </div>
          <div className="pr-4 pl-4 pb-2 sm:border-0  xs:border-0">
            <CardView
              image={"/images/house-check.png"}
              description="hi"
              title="House Check"
            />
          </div>
        </div>
      </RopoContainer>
      <div className="h-20 bg-primary"></div>
      <RopoContainer>
        <div className="p-4 grid grid-cols-2 md:gap-x-24">
          <div className="items-center">
            <h1 className="p-2 text-primary text-4xl font-serif flex justify-center">
              Accouncements
            </h1>
            <hr className="w-full bg-primary"></hr>
            <div className="flex flex-col flex-wrap">
              <h1 className="text-primary text-2xl pt-8">Work on Kirby Dr.</h1>
              <QA answer="text" />
              <QA question="text" />
              <h1 className="text-primary text-2xl pt-8">Work on Kirby Dr.</h1>
              <QA answer="text" />
              <QA question="text" />
            </div>
          </div>
          <div className="items-center">
            <h1 className="p-2 text-primary text-4xl font-serif flex justify-center">
              Calendar
            </h1>
            <hr className="w-full bg-primary"></hr>
            <div className="grid grid-cols-2">
              calendar
              <div className="flex flex-col">
                <h1 className="text-primary text-2xl pt-8">Thu, Feb 4</h1>
                <QA answer="text" />
                <QA question="text" />
                <h1 className="text-primary text-2xl pt-8">Fri, Feb 4</h1>
                <QA answer="text" />
                <QA question="text" />
                <h1 className="text-primary text-2xl pt-8">Mon, Feb 4</h1>
                <QA answer="text" />
                <QA question="text" />
              </div>
            </div>
          </div>
        </div>
      </RopoContainer>
    </>
  );
};
export default HomePage;
