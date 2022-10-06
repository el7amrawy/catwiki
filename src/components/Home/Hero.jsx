import hero from "../../assets/images/HeroImagelg.png";
import logo from "../../assets/CatwikiLogo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import apiHost from "../../config";
import { Link } from "react-router-dom";
import search from "../../services/search";
import { nanoid } from "nanoid";
import Search_mob from "./Search_mob";

const Hero = () => {
  /* -------------------- States -------------------- */

  const [search_string, setSearch_string] = useState("");
  const [data, setData] = useState([]);
  const [show_search_mob, setShow_search_mob] = useState(false);

  /* -------------------- Ref -------------------- */

  const search_resRef = useRef(null);

  /* -------------------- Effects -------------------- */

  useEffect(() => {
    if (!search_string.length) {
      axios
        .get(apiHost)
        .then(({ data }) => {
          setData(data);
        })
        .catch((err) => {
          console.error(`${err}`);
        });
    }
  }, [search_string]);

  useEffect(() => {
    if (search_string.length) {
      search_resRef.current.classList.remove("hidden");
    } else {
      search_resRef.current.classList.add("hidden");
    }
  }, [search_string]);

  useEffect(() => {
    if (search_string.length) {
      const res = search(data, search_string);
      setData(res);
    }
  }, [search_string]);

  useEffect(() => {
    if (show_search_mob) {
      document.documentElement.classList.add("stop-scrolling");
    } else {
      document.documentElement.classList.remove("stop-scrolling");
    }
  }, [show_search_mob]);

  /* -------------------- Handlers -------------------- */

  function changeHandler(ev) {
    setSearch_string(ev.target.value);
  }

  function clickHandler(ev) {
    setShow_search_mob(true);
  }

  /* -------------------- Elems -------------------- */

  const searchElems = data.map((elem) => (
    <li className=" mb-4" key={nanoid()}>
      <Link to={"breeds/" + elem.name.toLowerCase().split(" ").join("_")}>
        <span>{elem.name}</span>
      </Link>
    </li>
  ));

  return (
    <section className=" mt-7">
      {show_search_mob && (
        <Search_mob
          setShow_search_mob={setShow_search_mob}
          search_string={search_string}
          searchElems={searchElems}
          setSearch_string={setSearch_string}
        />
      )}
      <div className="overflow-hidden text-white rounded-t-[42px] relative">
        <img className=" w-full" src={hero} />
        <div className=" absolute top-6 left-6 sm:top-7 sm:left-7 md:top-9 md:left-9 w-full md:h-full">
          <h2 className=" sm:hidden font-mystery text-sm ">CatWiki</h2>
          <img
            src={logo}
            alt="logo"
            className=" hidden sm:block  invert contrast-[150%]"
          />
          <p className=" text-xs md:text-2xl  w-40 md:w-96 mt-3 sm:mt-4 md:mt-5">
            Get to know more about your cat breed
          </p>
          <div className="mt-3 sm:mt-4 md:mt-5">
            {!show_search_mob && (
              <div className="md:hidden">
                <button
                  onClick={clickHandler}
                  className=" cursor-pointer py-2 px-4 bg-white text-gray-900 text-xs font-medium rounded-full"
                >
                  Search
                  <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    className="text-[8px] ml-3 shadow-sm"
                  />
                </button>
              </div>
            )}
            <div className="hidden md:block text-[#291507] relative  w-[fit-content]">
              <input
                placeholder="Search your breed"
                required
                value={search_string}
                onChange={changeHandler}
                className=" w-96  shadow-sm py-5 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 outline-blue-200  px-6 bg-white  placeholder:text-lg font-medium  rounded-full"
              />
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className=" absolute top-6 right-6 text-base"
              />
              <ul
                ref={search_resRef}
                className="scrollbar w-full max-h-60 overflow-y-auto  hidden bg-white text-black font-medium text-lg  mt-4 rounded-3xl shadow p-5"
              >
                {searchElems}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
