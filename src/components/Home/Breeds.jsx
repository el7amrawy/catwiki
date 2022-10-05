import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import apiHost from "../../config";
import CatType from "./CatType";
import { Link } from "react-router-dom";

const Breeds = () => {
  /*---------------------- States ----------------------*/

  const [breeds, setBreeds] = useState([]);
  const [length, setLength] = useState(null);

  /*---------------------- Effects ----------------------*/

  useEffect(() => {
    axios
      .get(apiHost + "?limit=4")
      .then(({ data }) => {
        setBreeds(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get(apiHost + "/length")
      .then(({ data }) => {
        setLength(data.length - breeds.length);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [length, breeds]);

  /*--------------------------------------------*/

  const breedsElems = breeds.map((elem) => (
    <CatType key={elem.id} breed={elem} />
  ));

  return (
    <section className=" bg-[#E3E1DC] px-7 py-5 text-gray-900 font-medium rounded-b-[42px]">
      <h4 className=" text-xs py-2 relative after:content-[''] after:inline-block after:bg-black after:absolute after:w-2/12 after:h-[3px] after:bottom-0 after:left-0">
        Most Searched Breeds
      </h4>
      <div className=" mt-4 md:flex justify-between">
        <h1 className=" font-bold text-lg ">
          {length}+ Breeds For you to discover
        </h1>
        <Link to="/most_shearched">
          <button className="hidden md:inline-block uppercase pointer text-xs text-gray-500">
            see more
            <FontAwesomeIcon icon={faArrowRightLong} className=" ml-3" />
          </button>
        </Link>
      </div>
      <div className=" flex flex-row flex-wrap justify-between mb-8 mt-7 text-[#291507]">
        {breedsElems}
      </div>
    </section>
  );
};

export default Breeds;
