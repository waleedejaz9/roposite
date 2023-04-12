import PropTypes from "prop-types";

const HeadingText = ({ heading, text, headingClassName, textClassName }) => {
  return (
    <>
      <h2 className={` ${headingClassName}`}>{heading}</h2>
      <div className="flex justify-center p-6">
        <hr className="w-full bg-primary max-w-7xl"></hr>
      </div>
      <p className={`${textClassName}`}>{text}</p>
    </>
  );
};

export default HeadingText;

HeadingText.defaultProps = {
  heading: "",
  text: "",
  headingClassName: "",
  textClassName: "",
};

HeadingText.propTypes = {
  heading: PropTypes.string,
  text: PropTypes.string,
  headingClassName: PropTypes.string,
  textClassName: PropTypes.string,
};
