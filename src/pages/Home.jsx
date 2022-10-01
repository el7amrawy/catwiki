import hero from "../assets/images/HeroImagelg.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import CatType from "../components/CatType";
/* */
import cat2 from "../assets/images/image 2.png";

const Home = () => {
  return (
    <main className=" w-11/12 mx-auto font-montserrat">
      <section>
        <div className="overflow-hidden text-white rounded-t-[42px] relative">
          <img className=" w-full  " src={hero} />
          <h2 className="CatWiki font-mystery text-sm  absolute top-6 left-6">
            CatWiki
          </h2>
          <p className=" text-xs absolute top-6 left-6 w-40 mt-7">
            Get to know more about your cat breed
          </p>
          <button className=" cursor-pointer py-2 px-4 bg-white text-gray-900 text-xs font-medium absolute left-6 bottom-4 rounded-full">
            Search
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="text-[8px] ml-3"
            />
          </button>
        </div>
      </section>
      <section className=" bg-[#E3E1DC] px-7 py-5 text-gray-900 font-medium">
        <h4 className=" text-xs py-2 relative after:content-[''] after:inline-block after:bg-black after:absolute after:w-2/12 after:h-[3px] after:bottom-0 after:left-0">
          Most Searched Breeds
        </h4>
        <h1 className=" font-bold text-lg mt-4">
          66+ Breeds For you to discover
        </h1>
        <div className=" flex flex-row flex-wrap text-[#291507]">
          <CatType img={cat2} type="Norwegian Forest Cat" />
        </div>
      </section>
    </main>
  );
};

export default Home;
