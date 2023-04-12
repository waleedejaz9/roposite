import "./style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SearchInput = ({ className, iconClassName }) => {
  return (
    <div className="p-2 flex flex-row">
      <input
        type="text"
        id="searchInput"
        name="searchInput"
        placeholder="search"
        className={`pl-2 search-input bg-gray-200 focus:ring-transparent ${className}`}
      />
      <div className={`bg-primary p-2 hover:cursor-pointer  ${iconClassName}`}>
        <FontAwesomeIcon
          className={`text-white text-xl ${iconClassName}`}
          icon={["fas", "search"]}
        />
      </div>
    </div>
  );
};
export default SearchInput;
