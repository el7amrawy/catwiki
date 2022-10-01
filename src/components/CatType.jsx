const CatType = ({ img, type, className }) => {
  return (
    <div
      className={`overflow-hidden rounded-xl w-[134px] md:w-[220px] sm:m-1 md:m-2 ${
        className && className
      }`}
    >
      <img src={img} alt="cat image" className="w-full" />
      <p className=" text-xs font-semibold my-3">{type}</p>
    </div>
  );
};

export default CatType;
