import { Link } from "react-router-dom";

const CatType = ({ breed, className }) => {
  return (
    <div className="md:m-2 sm:m-1 ">
      <div
        className={`overflow-hidden rounded-xl w-[134px] h-[134px] md:w-[220px] md:h-[220px]  ${
          className ? className : ""
        }`}
      >
        <img
          src={breed.image.url}
          alt="cat image"
          className="w-full h-full object-cover transition duration-300 hover:scale-110"
        />
      </div>
      <Link
        to={breed.name.toLowerCase().split(" ").join("_")}
        className="block text-xs md:text-lg font-semibold my-3 md:my-5 cursor-pointer"
      >
        {breed.name}
      </Link>
    </div>
  );
};

export default CatType;
