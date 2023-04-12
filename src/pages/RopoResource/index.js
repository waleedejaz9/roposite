import SubPagesMenuSection from "../../components/SubPagesMenuSection";
import RopoContainer from "../../components/RopoContainer";

const array = [
  { text: "CenterPoint Energy", link: "/", subMenuItems: [] },
  { text: "City of Houston", link: "/", subMenuItems: [] },
  { text: "Harris county Voting Information", link: "/", subMenuItems: [] },
  { text: "Looscan Neighbourhood Library", link: "/", subMenuItems: [] },
  { text: "State of Taxes", link: "/", subMenuItems: [] },
  { text: "Contact Us", link: "/", subMenuItems: [] },
];

const RopoResource = () => {
  return (
    <div className="bg-blue-400 flex flex justify-center items-center">
      <RopoContainer customClassName="max-w-screen-xl">
        <SubPagesMenuSection menuItems={array} />
      </RopoContainer>
    </div>
  );
};

export default RopoResource;
