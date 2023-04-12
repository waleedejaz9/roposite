import PropTypes from "prop-types";

import { Select } from "@chakra-ui/react";

const RopoSelectInput = ({
  className,
  placeholder,
  options,
  onChange,
  name,
  value,
}) => (
  <Select
    name={name}
    value={value}
    placeholder={placeholder}
    className={`ropo-select-input ${className}`}
    onChange={onChange}
  >
    {options.map((item, index) => (
      <option value={item.value} key={index}>
        {item.text}
      </option>
    ))}
  </Select>
);

export default RopoSelectInput;

RopoSelectInput.defaultProps = {
  className: "",
};

RopoSelectInput.propTypes = {
  options: PropTypes.array,
};
