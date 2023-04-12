import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Icon,
  AddIcon,
} from "@chakra-ui/react";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDisclosure } from "@chakra-ui/react";

import SearchInput from "../SearchInput";
import MobileMenu from "../MobileMenu";

const menuItems = [
  { text: "HOME", link: "/", subMenuItems: [{ level2: "hi" }] },
  { text: "RESIDENTS", link: "/", subMenuItems: [] },
  { text: "COMMUNITY", link: "/", subMenuItems: [] },
  { text: "FRIENDS", link: "/", subMenuItems: [] },
  { text: "RESOURCES", link: "/", subMenuItems: [] },
  { text: "CONTACT US", link: "/", subMenuItems: [] },
];

function RopoDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <>
      <Icon onClick={onOpen} as={AddIcon} color="primary" cursor="pointer">
        <FontAwesomeIcon
          className="text-gray-500 w-16 h-12 text-primary "
          icon={["fas", "bars"]}
        />
      </Icon>
      <>
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
          opacity={"0.95"}
        >
          <DrawerOverlay />
          <DrawerContent>
            <div className="flex justify-evenly max-w-xs">
              <div className="flex justify-center pl-16 pr-4 pt-2">
                <h1 className="text-sm text-gray-500 w-16 pt-3">Sign In</h1>

                <SearchInput
                  className="w-4/6 h-1/6 p-3"
                  iconClassName="h-6 pl-1 pr-1 pt-0.5 pb-1.5"
                />
              </div>

              <DrawerCloseButton width="7" />
            </div>
            <MobileMenu menuItems={menuItems} />
          </DrawerContent>
        </Drawer>
      </>
    </>
  );
}

export default RopoDrawer;
