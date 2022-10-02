import hero from "../../assets/images/HeroImagelg.png";
import logo from "../../assets/CatwikiLogo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Hero = () => {
  return (
    <section className=" mt-7">
      <div className="overflow-hidden text-white rounded-t-[42px] relative">
        <img className=" w-full" src={hero} />
        <h2 className=" sm:hidden font-mystery text-sm  absolute top-6 left-6">
          CatWiki
        </h2>
        <img
          src={logo}
          alt="logo"
          className=" hidden sm:block  absolute top-6 left-6 invert contrast-[150%]"
        />
        <p className=" text-xs md:text-2xl absolute top-6 left-6 w-40 md:w-96 mt-7 sm:top-14">
          Get to know more about your cat breed
        </p>
        <button className="md:hidden cursor-pointer py-2 px-4 bg-white text-gray-900 text-xs font-medium absolute left-6 bottom-4 sm:bottom-6 rounded-full">
          Search
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="text-[8px] ml-3 shadow-sm"
          />
        </button>
        <div className="hidden md:block absloute absolute left-6 bottom-10 text-[#291507]">
          <input
            placeholder="Enter your breed"
            required
            className=" w-96 shadow-sm py-5 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 outline-blue-200  px-6 bg-white  placeholder:text-lg font-medium  rounded-full"
          />
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className=" absolute top-6 right-6 text-base"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
