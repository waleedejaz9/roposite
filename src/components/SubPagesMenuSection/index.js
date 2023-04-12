import PropTypes from "prop-types";

import PagesMenuItem from "./PagesMenuItem";

const PagesMenu = ({ menuItems }) => {
  return (
    <div className="p-8 text-white grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 lg:grid-cols-4  gap-x-16 gap-y-4">
      {menuItems.map((item, index) => (
        <PagesMenuItem key={index} {...item} />
      ))}
    </div>
  );
};

export default PagesMenu;

PagesMenu.propTypes = {
  menuItems: PropTypes.array.isRequired,
};
