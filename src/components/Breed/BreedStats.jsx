import { useEffect, useState } from "react";
import { nanoid } from "nanoid";

const BreedStats = ({ breed }) => {
  /* -------------------- States -------------------- */

  const [stats, setStats] = useState([
    "adaptability",
    "affection_level",
    "child_friendly",
    "grooming",
    "intelligence",
    "health_issues",
    "social_needs",
    "stranger_friendly",
  ]);

  const [statElems, setStatElems] = useState([]);

  /* -------------------- Effects -------------------- */

  useEffect(() => {
    setStatElems(addBars(breed, stats));
  }, [breed]);

  return (
    <div className=" flex justify-between md:w-10/12">
      <ul>
        <li className=" font-bold capitalize  mt-8">Adaptability:</li>
        <li className=" font-bold capitalize  mt-8">Affection level:</li>
        <li className=" font-bold capitalize  mt-8">Child Friendly:</li>
        <li className=" font-bold capitalize  mt-8">Grooming:</li>
        <li className=" font-bold capitalize  mt-8">Intelligence:</li>
        <li className=" font-bold capitalize  mt-8">Health issues:</li>
        <li className=" font-bold capitalize  mt-8">Social needs:</li>
        <li className=" font-bold capitalize  mt-8">Stranger friendly:</li>
      </ul>
      <div>
        {statElems.map((elem) => (
          <div key={nanoid()} className="mt-8">
            {elem}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BreedStats;

function addBars(breed, arr) {
  const elems = arr.map((name) => {
    const elems = [];
    for (let i = 0; i < 5; i++) {
      if (i < breed[name]) {
        elems.push(
          <span
            key={nanoid()}
            className="inline-block w-[3vw] h-2  md:h-3 bg-[#544439] rounded-lg m-1 md:mx-2"
          ></span>
        );
      } else {
        elems.push(
          <span
            key={nanoid()}
            className="inline-block w-[3vw] h-2  md:h-3 bg-gray-200 rounded-lg m-1 md:mx-2"
          ></span>
        );
      }
    }
    return elems;
  });
  return elems;
}
