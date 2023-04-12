import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Logo from "../../../../components/Logo";
import RopoHeaderMenu from "../../../../containers/Layout/PublicLayout/HeaderMenu";
import SearchInput from "../../../../components/SearchInput";
import RopoDrawer from "../../../../components/Drawer";

import data from "./data";

const Header = () => {
  const list = data.menus.filter((item) => item.name === "header");
  return (
    <div className="p-4 pr-4 flex justify-between">
      <div className="p-4 w-72">
        <Logo />
      </div>
      <div className="flex flex-col justify-end hidden md:block">
        <div className="pt-2 flex flex-wrap justify-end mr-2">
          <div className="flex flex-row pt-2">
            <FontAwesomeIcon
              className="text-gray-500 w-12 h-9"
              icon={["fa", "user"]}
            />
            <pre className="text-base pt-2"> Logged In | </pre>
          </div>
          <div className="hidden md:block">
            <SearchInput />
          </div>
        </div>
        <div className="pr-3">
          <RopoHeaderMenu List={list[0].subMenus} />
        </div>
      </div>
      <div className="md:hidden pt-6 pr-6">
        <RopoDrawer />
      </div>
    </div>
  );
};

export default Header;
