import { Input } from "@chakra-ui/react";
const RopoInput = ({ name, value, onChange, placeholder, className }) => (
  <Input
    className={`ropo-input ${className}`}
    name={name}
    value={value}
    placeholder={placeholder}
    onChange={onChange}
  />
);

export default RopoInput;
