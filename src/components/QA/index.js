import PropTypes from "prop-types";

const QA = ({ question, answer, questionClassName, answerClassName }) => {
  return (
    <div>
      <h1
        className={`pr-2 pl-2 pt-4 text-gray-500 text-sm ${questionClassName}`}
      >
        {question}
      </h1>
      <p className={`pl-2 text-gray-400 text-sm ${answerClassName}`}>
        {answer}
      </p>
    </div>
  );
};

export default QA;

QA.propTypes = {
  question: PropTypes.string,
  answer: PropTypes.string,
  questionClassName: PropTypes.string,
  answerClassName: PropTypes.string,
};
