import hero from "../../assets/images/HeroImagelg.png";
import logo from "../../assets/CatwikiLogo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Hero = () => {
  return (
    <section className=" mt-7">
      <div className="overflow-hidden text-white rounded-t-[42px] relative">
        <img className=" w-full" src={hero} />
        <div className=" absolute top-6 left-6 sm:top-7 sm:left-7 md:top-9 md:left-9 w-full md:h-full">
          <h2 className=" sm:hidden font-mystery text-sm ">CatWiki</h2>
          <img
            src={logo}
            alt="logo"
            className=" hidden sm:block  invert contrast-[150%]"
          />
          <p className=" text-xs md:text-2xl  w-40 md:w-96 mt-3 sm:mt-4 md:mt-5">
            Get to know more about your cat breed
          </p>
          <div className="mt-3 sm:mt-4 md:mt-5">
            <button className="md:hidden cursor-pointer py-2 px-4 bg-white text-gray-900 text-xs font-medium rounded-full">
              Search
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="text-[8px] ml-3 shadow-sm"
              />
            </button>
            <div className="hidden md:block text-[#291507] relative  w-[fit-content]">
              <input
                placeholder="Enter your breed"
                required
                className=" w-96  shadow-sm py-5 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 outline-blue-200  px-6 bg-white  placeholder:text-lg font-medium  rounded-full"
              />
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className=" absolute top-6 right-6 text-base"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
