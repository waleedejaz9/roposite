import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./style.scss";
import Logo from "../../../../components/Logo";
import data from "../Header/data";

const Footer = () => {
  const list = data.menus.filter((item) => item.name === "header");
  return (
    <footer className="mb-6 border-t-2 border-gray-100 flex flex-wrap sm:justify-between md:justify-between">
      <div className="desktop-mobile-logo">
        <Logo className="md:w-8/12 lg:w-8/12 pl-20 pr-28 mr-7 w-full md:p-5 pt-5" />
      </div>

      <div className="flex flex-col">
        <div className="md:pt-11 text-xs flex flex-col items-center md:items-start">
          <div className="pt-2 flex justify-between md:w-full h-full ">
            <div className="pl-9 md:pt-4 desktop-mobile-menu-text-size"></div>
            <div className="flex flex-col hidden md:block pr-20 pb-7">
              <div className="flex justify-center ">
                <FontAwesomeIcon
                  className="text-primary"
                  icon={["fas", "chevron-up"]}
                />
              </div>
              <p className="text-primary text-xs">BACK TO TOP</p>
            </div>
          </div>
          <p className="text-center lg:text-start md:text-start ml-4 pl-28 pr-28 text-2xs md:text-sm md:pr-20 md:pl-5">
            Rivers Oak property,inc hountsman, 3923 SM Felipe Rd,Houston, TX
            77027 Phone 713-622-0001 | Fax - 713-623-3221 |
            <span className="text-primary pl-1">Disclaimer</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
