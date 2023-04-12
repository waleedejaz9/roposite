import React from "react";
import PropTypes from "prop-types";

const HeroBottomSection = ({ text }) => {
  return <div className="h-6 bg-primary text-sm">{text}</div>;
};

export default HeroBottomSection;

HeroBottomSection.propTypes = {
  text: PropTypes.string,
};
