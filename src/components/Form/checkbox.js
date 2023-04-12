import PropTypes from "prop-types";
import { Checkbox } from "@chakra-ui/react";

const RopoCheckBox = ({ text, onChange, value, name }) => {
  return (
    <Checkbox
      name={name}
      onChange={(e) => onChange(e.target.checked)}
      isChecked={value}
    >
      <span>{text}</span>
    </Checkbox>
  );
};

export default RopoCheckBox;

RopoCheckBox.propTypes = {
  text: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.bool.isRequired,
};
