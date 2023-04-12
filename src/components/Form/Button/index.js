import PropTypes from "prop-types";

import { Button } from "@chakra-ui/react";
import "./style.scss";

const RopoButton = ({
  size,
  type,
  children,
  customClassName,
  variant,
  colorScheme,
  btnRef,
}) => {
  return (
    <Button
      ref={btnRef}
      colorScheme={colorScheme}
      type={type}
      className={`p-2 text-center text-sm	ropo-btn radius-none ${customClassName}`}
      variant={variant}
      size={size}
    >
      {children}
    </Button>
  );
};

export default RopoButton;

RopoButton.defaultProps = {
  type: "button",
  variant: "solid",
};

RopoButton.propTypes = {
  type: PropTypes.string,
  customClassName: PropTypes.string,
  variant: PropTypes.oneOf(["solid", "outline", "ghost", "link"]),
};
