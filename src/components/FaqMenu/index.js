import FaqMenuItems from "./FaqMenuItem";

const FaqMenu = ({ menuItems }) => {
  return (
    <div className="text-primary grid grid-cols-2 gap-1">
      {menuItems.map((item, index) => (
        <FaqMenuItems key={index} {...item} />
      ))}
    </div>
  );
};

export default FaqMenu;
