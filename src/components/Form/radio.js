import PropTypes from "prop-types";

import { Radio, RadioGroup, Stack } from "@chakra-ui/react";

const RopoRadioButton = ({ options, value }) => {
  return (
    <RadioGroup defaultValue="1">
      <Stack spacing={4} direction="row">
        {options.map((item, index) => (
          <Radio value={item.value} key={index}>
            {item.text}
          </Radio>
        ))}
      </Stack>
    </RadioGroup>
  );
};

export default RopoRadioButton;

RopoRadioButton.propTypes = {
  options: PropTypes.array.isRequired,
};
