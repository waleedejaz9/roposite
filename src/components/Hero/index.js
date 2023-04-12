import React from "react";
import PropTypes from "prop-types";

const Hero = ({ text, image }) => {
  return (
    <div
      className="h-48 bg-cover bg-center flex flex-row justify-center items-end "
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      {text && (
        <h1 className="pb-6 text-white font-bold text-5xl heading-text">
          {text}
        </h1>
      )}
    </div>
  );
};

export default Hero;

Hero.propTypes = {
  image: PropTypes.string.isRequired,
  text: PropTypes.string,
};
