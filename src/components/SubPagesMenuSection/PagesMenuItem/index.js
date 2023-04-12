import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

const SectionMenuItem = ({ text, link, showIcon }) => (
  <div className="border flex flex-row justify-between max-w-7xl">
    <div className="flex justify-center flex-wrap p-2 pl-6 items-center">
      <Link to={link} className="col-primary text-sm">
        {text}
      </Link>
    </div>
    <div className="flex items-center p-4 hover:cursor-pointer">
      <FontAwesomeIcon className="text-white" icon={["fas", "chevron-right"]} />
    </div>
  </div>
);

export default SectionMenuItem;

SectionMenuItem.defaultProps = {
  showIcon: true,
};

SectionMenuItem.propTypes = {
  text: PropTypes.string.isRequired,
};
