import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

const FaqMenuItem = ({ text, link }) => (
  <div>
    <Link to={link} className="col-primary pr-4">
      {text}
    </Link>
    <FontAwesomeIcon
      className="text-gray-300"
      icon={["fas", "chevron-right"]}
    />
  </div>
);

export default FaqMenuItem;

FaqMenuItem.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};
