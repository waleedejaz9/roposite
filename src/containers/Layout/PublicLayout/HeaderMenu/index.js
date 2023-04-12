import {
  Box,
  Text,
  Stack,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const RopoHeaderMenu = ({ List }) => {
  const renderMenu = (List, isLevelZero) => {
    const menu = [];
    List.forEach((item) => {
      if (item.subMenus.length > 0) {
        menu.push(
          <Box>
            <Popover
              trigger={"hover"}
              placement={isLevelZero ? "bottom" : "right"}
            >
              <PopoverTrigger>
                {isLevelZero ? (
                  <Link
                    href="#"
                    color={"primary"}
                    _hover={{
                      textDecoration: "none",
                      color: "#2a6192",
                    }}
                    textTransform="uppercase"
                  >
                    {item.text}
                  </Link>
                ) : (
                  <div className="grid grid-cols-2 hover:cursor-pointer hover:bg-gray-50 p-2">
                    {item.text}
                    <div className="pl-14 flex items-center">
                      <FontAwesomeIcon
                        className="text-gray-300 w-2 h-3"
                        icon={["fas", "chevron-right"]}
                      />
                    </div>
                  </div>
                )}
              </PopoverTrigger>

              <PopoverContent
                bg={"white"}
                width="120px"
                fontStyle="bold"
                boxShadow="dark-lg"
                textTransform="capitalize"
                right="10px"
                borderRadius="0"
              >
                {renderMenu(item.subMenus, false)}
              </PopoverContent>
            </Popover>
          </Box>
        );
      } else if (item.link.includes("http")) {
      } else {
        menu.push(
          <div
            className={
              isLevelZero
                ? "hover:cursor-pointer"
                : "hover:cursor-pointer hover:bg-gray-50"
            }
          >
            <Stack direction={"row"} align="center">
              <Box>
                <Text
                  trigger={"hover"}
                  color={isLevelZero ? "primary" : ""}
                  textTransform={isLevelZero ? "uppercase" : "capitalize"}
                  p={isLevelZero ? "" : "2"}
                >
                  {item.text}
                </Text>
              </Box>
            </Stack>
          </div>
        );
      }
    });
    return menu;
  };

  return (
    <Stack direction={"row"} spacing={4}>
      {renderMenu(List, true)}
    </Stack>
  );
};

export default RopoHeaderMenu;
