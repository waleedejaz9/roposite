import PropTypes from "prop-types";

import RopoRadioButton from "./radio";

const RadioQuestionAnswer = ({ text, options }) => {
  console.log(options);
  return (
    <div className="flex flex-col">
      <h1 className="text-xl font-base font-serif">{text}</h1>
      <RopoRadioButton options={options} />
    </div>
  );
};
export default RadioQuestionAnswer;

RadioQuestionAnswer.defaultProps = {
  className: "",
  text: "",
};

RadioQuestionAnswer.propTypes = {
  options: PropTypes.array.isRequired,
  className: PropTypes.string,
  text: PropTypes.string.isRequired,
};
