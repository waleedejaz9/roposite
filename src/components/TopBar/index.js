import AdminDropDown from "../AdminDropDown";

const menuItems = [
  { text: "HOME", link: "/" },
  { text: "RESIDENTS", link: "/", subMenuItems: [] },
  { text: "COMMUNITY", link: "/", subMenuItems: [] },
  { text: "FRIENDS", link: "/", subMenuItems: [] },
  { text: "RESOURCES", link: "/", subMenuItems: [] },
  { text: "CONTACT US", link: "/", subMenuItems: [] },
];
const PageItems = [{ text: "Create Page" }];

const TopBar = () => {
  return (
    <div className="h-12 bg-gray-300 text-sm flex">
      <AdminDropDown menuItems={menuItems} title="Menus" />
      <AdminDropDown menuItems={PageItems} title="Pages" />
      <AdminDropDown menuItems={menuItems} title="Lost Pets" />
      <AdminDropDown menuItems={menuItems} title="Properties" />
    </div>
  );
};
export default TopBar;
