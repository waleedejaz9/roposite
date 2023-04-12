import { Helmet } from "react-helmet";

import FaqMenu from "../../components/FaqMenu";
import QA from "../../components/QA";
import RopoContainer from "../../components/RopoContainer";
import Hero from "../../components/Hero";
import HeroBottomSection from "../../components/HeroBottomSection";

const menuItems = [
  { text: "Parks", link: "/", subMenuItems: [] },
  { text: "Pets", link: "/", subMenuItems: [] },
  { text: "Noise and Work Hours", link: "/", subMenuItems: [] },
  { text: "Using Property for Business", link: "/", subMenuItems: [] },
  { text: "Patrol", link: "/", subMenuItems: [] },
  { text: "Coyotes", link: "/", subMenuItems: [] },
  { text: "Garbage", link: "/", subMenuItems: [] },
  { text: "Signs", link: "/", subMenuItems: [] },
  { text: "Recycling", link: "/", subMenuItems: [] },
  { text: "How Maintenance Fees are Calculated", link: "/", subMenuItems: [] },
  { text: "Statues/Fountains/Play Equipment", link: "/", subMenuItems: [] },
  { text: "Renting", link: "/", subMenuItems: [] },
];

const Faq = () => {
  return (
    <RopoContainer>
      <Helmet>
        <title>FAQ</title>
      </Helmet>
      <Hero image="/images/banner.png" text="FAQ'S" />
      <HeroBottomSection />
      <div className="flex justify-center mt-12 mb-36">
        <div className="flex flex-col justify-center w-6/12">
          <div
            className="h-5 bg-cover bg-center min-w-24"
            style={{
              backgroundImage: 'url("/images/notfound.png")',
            }}
          ></div>
          <h6 className="p-2 mt-4 text-2xl text-primary text-center whitespace-pre-line font-serif">
            Frequently Asked Questions
          </h6>
          <hr className="leading-normal border-color:white"></hr>
          <h6 className="p-1 mt-1 text-sm text-center whitespace-pre-line font-serif">
            Below are some subjects that are frequently searched.
          </h6>
          <div className="mt-4 pt-2 flex justify-center">
            <FaqMenu menuItems={menuItems} />
          </div>
        </div>
      </div>
      <h1 className="ml-2 pl-4 pb-6 text-4xl text-primary">Parks</h1>
      <hr className="leading-normal border-color:white"></hr>
      <QA
        question={"Does ROPO own the parks and green spaces in River oak?"}
        answer={
          "NO. ROPO owns no park or green space. ALL parks and green parks are the property of the city of houston, except the courtyatds on stanmore and sharp place."
        }
      />
      <QA
        question={"How many parks are there in River Oaks?"}
        answer={
          "Actually, there is only one area designated by the city of housoton as a park. the rest of the area are green spaces."
        }
      />

      <h1 className="ml-2 mt-12 pl-4 pb-6 pt-6 text-4xl text-primary">
        Garbage
      </h1>
      <hr className="leading-normal border-color:white"></hr>
      <QA
        question={"Republic did not pick up the trash today,What do i do?"}
        answer={
          "To report a missed trash pick up directly to Republic waste, click here. you may also call them ay 713-726-7300. contacting Republic directly results in a case being opened to review your master. if ROPP staff calss. a case ios not generated. it is better for you to contact Republic, rather than ROPO staff calling or emailing Republic"
        }
      />
      <QA
        question={"When is my trash picked up?"}
        answer={
          "Each household in River Oaks has trash picked up twice in a week.On Thursday, and fridays, home East of River Oaks Blvd, are scheduled for pick-up."
        }
      />
    </RopoContainer>
  );
};

export default Faq;
