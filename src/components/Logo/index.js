import { APP_IMAGES } from "../../constants";

const Logo = ({ className }) => (
  <img src={APP_IMAGES.logo} alt="logo" className={`${className}`} />
);

export default Logo;
