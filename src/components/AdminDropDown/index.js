import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

const AdminDropDown = ({ menuItems, title }) => {
  return (
    <div className="h-12 bg-gray-300 text-sm pt-1">
      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
          {title}
        </MenuButton>
        <MenuList>
          {menuItems.map((item, index) => (
            <div className="flex justify-between p-4">
              <MenuItem>{item.text}</MenuItem>
            </div>
          ))}
        </MenuList>
      </Menu>
    </div>
  );
};
export default AdminDropDown;
