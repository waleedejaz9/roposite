import { Box } from "@chakra-ui/react";

import RopoButton from "../Form/Button";

const Pagination = ({ text, className }) => {
  return (
    <div>
      <ul className="flex p-1">
        <li>
          <Box
            as="button"
            borderRadius="none"
            bg="primary"
            color="white"
            px={1}
            h={8}
          >
            {text}
          </Box>
        </li>
      </ul>
    </div>
  );
};
export default Pagination;
