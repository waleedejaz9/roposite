import { Link } from "react-router-dom";

const MenuItem = ({ text, link, subMenuItems }) => (
  <Link to={link} className="col-blue pr-4">
    {text}
  </Link>
);

export default MenuItem;
