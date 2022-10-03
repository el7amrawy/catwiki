import { useState, useEffect } from "react";
import axios from "axios";
import apiHost from "../../config";
import CatType from "./CatType";

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
      <h1 className=" font-bold text-lg mt-4">
        {length}+ Breeds For you to discover
      </h1>
      <div className=" flex flex-row flex-wrap justify-between mb-8 mt-7 text-[#291507]">
        {breedsElems}
      </div>
    </section>
  );
};

export default Breeds;
