import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function MobileMenu({ menuItems }) {
  return (
    <div className="text-menuTextColor">
      {menuItems.map((item, index) => (
        <div className="flex justify-between p-4">
          <Link to={item.link} className=" pr-4 font-bold">
            {item.text}
          </Link>
          <div className="hover:cursor-pointer">
            <FontAwesomeIcon
              className="text-gray-300"
              icon={["fas", "chevron-right"]}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default MobileMenu;
