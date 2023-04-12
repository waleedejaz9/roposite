import PropTypes from "prop-types";

const RopoContainer = ({ customClassName, children }) => {
  return (
    <div className={`${customClassName} container mx-auto`}>{children}</div>
  );
};

export default RopoContainer;

RopoContainer.defaultProps = {
  customClassName: "",
};

RopoContainer.propTypes = {
  customClassName: PropTypes.string,
};
