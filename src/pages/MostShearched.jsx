import axios from "axios";
import { useEffect, useState } from "react";
import apiHost from "../config";
import { nanoid } from "nanoid";
import { Link } from "react-router-dom";

const MostSearched = () => {
  const [top10, setTop10] = useState([]);

  useEffect(() => {
    axios.get(apiHost + "/rank?limit=10").then(({ data }) => {
      setTop10(data);
    });
  }, []);

  const top10Elems = top10.map((breed, i) => (
    <li className=" md:flex justify-between md:mt-12" key={nanoid()}>
      <div className=" md:w-44 md:h-44 md:mr-3 overflow-hidden ">
        <img
          className="w-full h-full object-cover"
          src={breed.image?.url}
          alt="cat photo"
        />
      </div>
      <div className=" mt-5 md:mt-0 md:w-9/12">
        <Link to={"/breeds/" + breed.name.toLowerCase().split(" ").join("_")}>
          <h3 className=" text-xl sm:text-2xl md:text-4xl font-semibold">
            {i + 1}. {breed.name}
          </h3>
        </Link>
        <p className=" md:text-lg my-6">{breed.description}</p>
      </div>
    </li>
  ));

  return (
    <main className=" w-5/6  my-10 mx-auto font-montserrat text-[#291507]">
      <section>
        <div>
          <h1 className=" text-2xl  sm:text-3xl md:text-4xl font-bold">
            Top 10 most searched breeds
          </h1>
          <ul className=" list-none mt-5 ">{top10Elems}</ul>
        </div>
      </section>
    </main>
  );
};

export default MostSearched;
