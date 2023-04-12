import { Input, InputGroup, InputRightElement, Button } from "@chakra-ui/react";
import * as React from "react";

function RopoPasswordInput({ name, value, onChange, placeholder, className }) {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  return (
    <InputGroup size="md">
      <Input
        pr="4.5rem"
        type={show ? "text" : "password"}
        placeholder="Enter password"
        name={name}
        value={value}
        onChange={onChange}
        className={` ${className}`}
      />
      <InputRightElement width="4.5rem">
        <Button h="1.75rem" size="sm" onClick={handleClick}>
          {show ? "Hide" : "Show"}
        </Button>
      </InputRightElement>
    </InputGroup>
  );
}
export default RopoPasswordInput;
