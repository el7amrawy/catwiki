const CatType = ({ img, type, className }) => {
  return (
    <div className=" overflow-hidden rounded-xl">
      <img src={img} alt="cat image" className="w-full" />
      <p className=" text-xs font-semibold my-3">{type}</p>
    </div>
  );
};

export default CatType;
