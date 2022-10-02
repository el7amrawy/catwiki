import BreedDetails from "../components/Breed/BreedDetails";
import OtherPhotos from "../components/Breed/OtherPhotos";

const Breed = (breed) => {
  return (
    <main className="w-11/12  my-10 mx-auto font-montserrat text-[#291507]">
      <BreedDetails />
      <OtherPhotos />
    </main>
  );
};

export default Breed;
