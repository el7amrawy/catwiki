import axios from "axios";
import { useEffect } from "react";
import apiHost from "../../config";
import BreedStats from "./BreedStats";

const BreedDetails = ({ breed }) => {
  useEffect(() => {
    if (breed.id?.length) {
      // console.log(breed);
      axios
        .post(apiHost + "/rank?limit=10", {
          breed,
        })
        .then(({ data }) => {
          if (!data.length) {
            throw new Error("couldn't update breeds rank");
          }
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [breed]);

  return (
    <section className=" flex flex-col items-center lg:items-start lg:flex-row justify-around flex-wrap ">
      <div className="w-96 h-96 overflow-hidden rounded-3xl max-w-[90%]">
        <img
          src={breed.image?.url}
          alt="cat image"
          className=" w-full h-full object-cover "
        />
      </div>
      <div className=" w-4/5 lg:w-7/12 text-black mt-7 lg:m-0">
        <div>
          <h2 className=" text-4xl font-semibold mb-5">{breed.name}</h2>
          <p className=" text-lg">{breed.description}</p>
        </div>
        <ul className="">
          <li className=" font-bold capitalize  mt-8">
            Temperament:{" "}
            <span className=" text-lg font-normal normal-case">
              {breed.temperament}
            </span>
          </li>
          <li className=" font-bold capitalize  mt-8">
            origin:{" "}
            <span className=" text-lg font-normal normal-case">
              {breed.origin}
            </span>
          </li>
          <li className=" font-bold capitalize  mt-8">
            life span:{" "}
            <span className=" ca text-lg font-normal normal-case">
              {breed.life_span}
            </span>
          </li>
        </ul>
        <BreedStats breed={breed} />
      </div>
    </section>
  );
};

export default BreedDetails;
