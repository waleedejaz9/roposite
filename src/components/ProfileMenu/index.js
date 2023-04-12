import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import RopoContainer from "../RopoContainer";

const ProfileMenu = ({ text, subText, showIcon, icon }) => {
  return (
    <>
      <RopoContainer>
        <div className="border border-gray-200 border-r-2 border-l-2 border-t-2 border-b-2 flex flex-row">
          <div className="flex p-4 pl-10 hover:cursor-pointer">
            <FontAwesomeIcon className="text-primary text-3xl" icon={icon} />
          </div>
          <div className="flex flex-col pt-4 pl-10">
            <p className="col-primary text-xs font-bold">{text}</p>
            <p className="col-primary text-xs text-gray-500">{subText}</p>
          </div>
        </div>
      </RopoContainer>
    </>
  );
};

export default ProfileMenu;

ProfileMenu.defaultProps = {
  showIcon: true,
};

ProfileMenu.propTypes = {
  text: PropTypes.string.isRequired,
};
