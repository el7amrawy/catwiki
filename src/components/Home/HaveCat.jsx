import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import cat1 from "../../assets/images/image 1.png";
import cat2 from "../../assets/images/image 2.png";
import cat3 from "../../assets/images/image 3.png";

const HaveCat = () => {
  return (
    <section className=" my-12 text-[#291507]">
      <div className=" mt-4 md:flex  justify-between">
        <div className="md:w-[45%] md:mt-20">
          <div className=" w-2/12 h-[3px] bg-black"></div>
          <h2 className=" font-bold text-4xl ">Why should you have a cat?</h2>
          <p className=" font-medium text-lg">
            Having a cat around you can actually trigger the release of calming
            chemicals in your body which lower your stress and anxiety leves
          </p>
          <button className=" uppercase pointer text-xs text-gray-500  transition hover:translate-x-2">
            <a href="https://www.helpguide.org/articles/healthy-living/joys-of-owning-a-cat.htm">
              read more
            </a>
            <FontAwesomeIcon icon={faArrowRightLong} className=" ml-3" />
          </button>
        </div>
        <div className="md:w-[50%] flex flex-wrap justify-between my-7 md:mt-0">
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
  );
};

export default HaveCat;
