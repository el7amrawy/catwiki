import axios from "axios";
import { useEffect, useState } from "react";
import apiHost from "../../config";

const OtherPhotos = ({ breedId }) => {
  /* -------------------- States -------------------- */

  const [images, setImages] = useState([]);

  /* -------------------- Effects -------------------- */

  useEffect(() => {
    if (breedId) {
      axios
        .get(apiHost + `/images?id=${breedId}&limit=8`)
        .then(({ data }) => {
          setImages(data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [breedId]);

  /* ---------------------------------------- */

  const imgElems = images.map((img) => (
    <div
      key={img.id}
      className=" overflow-hidden rounded-3xl w-72 h-72 my-3 mx-2"
    >
      <img
        className="  object-cover transition duration-300 hover:scale-110 w-full h-full"
        src={img?.url}
        alt="cat photo"
      />
    </div>
  ));

  return (
    <section className=" text-center md:text-start my-20">
      <h2 className=" text-4xl font-semibold">Other photos</h2>
      <div className=" my-10 flex flex-col md:flex-row items-center flex-wrap justify-between">
        {imgElems}
      </div>
    </section>
  );
};

export default OtherPhotos;
