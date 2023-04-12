import { Textarea } from "@chakra-ui/react";
import PropTypes from "prop-types";

const RopoTextArea = ({
  className,
  name,
  onChange,
  placeholder,
  value,
  size,
}) => (
  <Textarea
    name={name}
    className={`ropo-text-area ${className}`}
    onChange={onChange}
    placeholder={placeholder}
    size={size}
    value={value}
  />
);

export default RopoTextArea;

RopoTextArea.defaultProps = {
  className: "",
  name: "",
  placeholder: "",
};

RopoTextArea.propTypes = {
  option: PropTypes.array,
};
