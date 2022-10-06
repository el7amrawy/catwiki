import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useRef, useEffect } from "react";

const Search_mob = ({
  setShow_search_mob,
  search_string,
  searchElems,
  setSearch_string,
}) => {
  const search_Ref = useRef(null);

  useEffect(() => {
    if (search_string.length) {
      search_Ref.current.classList.remove("hidden");
    } else {
      search_Ref.current.classList.add("hidden");
    }
  }, [search_string]);
  return (
    <div className="text-[#291507] rounded-xl z-10 border bg-white w-[92vw] px-4 py-5 fixed top-20 left-[4vw] shadow-md">
      <div
        className="flex justify-end"
        onClick={() => setShow_search_mob(false)}
      >
        <FontAwesomeIcon icon={faXmark} className="cursor-pointer" />
      </div>
      <div className="relative mt-6 ">
        <input
          value={search_string}
          onChange={(ev) => setSearch_string(ev.target.value)}
          placeholder="Search your breed"
          required
          className="w-full  shadow-sm py-3 border border-black focus:outline-none   px-6 bg-white  font-medium  rounded-full"
        />
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className=" absolute top-4 right-5 text-base"
        />
        <ul
          ref={search_Ref}
          className="scrollbar w-full max-h-60 overflow-y-auto  hidden bg-white text-black font-medium text-lg  mt-4 rounded-3xl  p-5"
        >
          {searchElems}
        </ul>
      </div>
    </div>
  );
};

export default Search_mob;
