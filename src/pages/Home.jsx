import hero from "../assets/images/HeroImagelg.png";
import logo from "../assets/CatwikiLogo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faArrowRightLong,
} from "@fortawesome/free-solid-svg-icons";
import CatType from "../components/CatType";
/* */
import cat1 from "../assets/images/image 1.png";
import cat2 from "../assets/images/image 2.png";
import cat3 from "../assets/images/image 3.png";

const Home = () => {
  return (
    <main className=" w-11/12 sm:w-4/5 mx-auto font-montserrat">
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
          <input
            placeholder="Enter your breed"
            required
            // focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2
            className=" hidden md:block shadow-sm py-5 text-black focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 outline-blue-200  px-6 bg-white  placeholder:text-lg font-medium absolute left-6 bottom-8 rounded-full"
          />
        </div>
      </section>
      <section className=" bg-[#E3E1DC] px-7 py-5 text-gray-900 font-medium rounded-b-[42px]">
        <h4 className=" text-xs py-2 relative after:content-[''] after:inline-block after:bg-black after:absolute after:w-2/12 after:h-[3px] after:bottom-0 after:left-0">
          Most Searched Breeds
        </h4>
        <h1 className=" font-bold text-lg mt-4">
          66+ Breeds For you to discover
        </h1>
        <div className=" flex flex-row flex-wrap justify-between mb-8 mt-7 text-[#291507]">
          <CatType img={cat2} type="Norwegian Forest Cat" />
          <CatType img={cat2} type="Norwegian Forest Cat" />
          <CatType img={cat2} type="Norwegian Forest Cat" />
          <CatType img={cat2} type="Norwegian Forest Cat" />
        </div>
      </section>
      <section className=" my-12 text-[#291507]">
        <div className=" mt-4 md:flex  justify-between">
          <div className="md:w-[45%] md:mt-20">
            <div className=" w-2/12 h-[3px] bg-black"></div>
            <h2 className=" font-bold text-4xl ">Why should you have a cat?</h2>
            <p className=" font-medium text-lg">
              Having a cat around you can actually trigger the release of
              calming chemicals in your body which lower your stress and anxiety
              leves
            </p>
            <button className=" uppercase pointer text-xs text-gray-500">
              read more
              <FontAwesomeIcon icon={faArrowRightLong} className=" ml-3" />
            </button>
          </div>
          <div className="md:w-[50%] flex flex-wrap justify-between my-7 md:mt-0">
            {/* sm:w-10/12 sm:mx-auto */}
            <div className=" w-[45%]">
              <img src={cat2} alt="cat" className=" my-2" />
              <img src={cat1} alt="cat" className=" my-2 w-3/4 float-right" />
            </div>
            <div className=" w-[45%]">
              <img src={cat3} alt="cat" className=" my-2" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
