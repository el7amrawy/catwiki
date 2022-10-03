import BreedDetails from "../components/Breed/BreedDetails";
import OtherPhotos from "../components/Breed/OtherPhotos";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import apiHost from "../config";

const Breed = () => {
  /* -------------------- States -------------------- */

  const [breed, setBreed] = useState({});
  const { breedName } = useParams();

  /* -------------------- Effects -------------------- */

  useEffect(() => {
    axios
      .get(apiHost + `/${breedName}`)
      .then(({ data }) => {
        setBreed(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <main className="w-11/12  my-10 mx-auto font-montserrat text-[#291507]">
      <BreedDetails breed={breed} />
      <OtherPhotos breedId={breed.id} />
    </main>
  );
};

export default Breed;
