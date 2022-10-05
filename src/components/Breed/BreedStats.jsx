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
        <div id="adaptability" className="mt-8">
          {statElems[0]}
        </div>
        <div id="affection_level" className="mt-8">
          {statElems[1]}
        </div>
        <div id="child_friendly" className="mt-8">
          {statElems[2]}
        </div>
        <div id="grooming" className="mt-8">
          {statElems[3]}
        </div>
        <div id="intelligence" className="mt-8">
          {statElems[4]}
        </div>
        <div id="health_issues" className="mt-8">
          {statElems[5]}
        </div>
        <div id="social_needs" className="mt-8">
          {statElems[6]}
        </div>
        <div id="stranger_friendly" className="mt-8">
          {statElems[7]}
        </div>
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
