import PropTypes from "prop-types";

const CardView = ({ image, title, description }) => {
  return (
    <div className="flex flex-col">
      <div className="relative">
        <img
          className="h-full w-full object-cover items-center"
          src={image}
          alt="card"
        ></img>
        <div className="w-full bg-ropocardview absolute bottom-0 opacity-75 text-white p-4 font-bold">
          {title}
        </div>
      </div>
      {description && (
        <div className="pt-2 text-sm text-gray-600">{description}</div>
      )}
    </div>
  );
};
export default CardView;

CardView.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
};
