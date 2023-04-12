import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SubMenuItem = ({ item }) => {
  return (
    <>
      <p className="text-center font-bold">hello</p>
      <div className="flex justify-between p-4">
        <h1 className="pl-2 font-bold">world</h1>
        <FontAwesomeIcon
          className="text-gray-300"
          icon={["fas", "chevron-right"]}
        />
      </div>
    </>
  );
};
export default SubMenuItem;
