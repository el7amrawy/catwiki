import cat from "../../assets/images/image 2.png";
import BreedStats from "./BreedStats";

const BreedDetails = () => {
  return (
    <section className=" flex flex-col items-center lg:items-start lg:flex-row justify-around flex-wrap ">
      <div className="w-96 h-96 overflow-hidden rounded-3xl max-w-[90%]">
        <img
          src={cat}
          alt="cat image"
          className=" w-full h-full object-cover "
        />
      </div>
      <div className=" w-4/5 lg:w-7/12 text-black mt-7 lg:m-0">
        <div>
          <h2 className=" text-4xl font-semibold mb-5">Bengal</h2>
          <p className=" text-lg">
            Bengals are a lot of fun to live with, but they're definitely not
            the cat for everyone, or for first-time cat owners. Extremely
            intelligent, curious and active, they demand a lot of interaction
            and woe betide the owner who doesn't provide it.
          </p>
        </div>
        <ul className="">
          <li className=" font-bold capitalize  mt-8">
            Temperament:{" "}
            <span className=" text-lg font-normal normal-case">
              Alert, Agile, Energetic, Demanding, Intelligent
            </span>
          </li>
          <li className=" font-bold capitalize  mt-8">
            origin:{" "}
            <span className=" text-lg font-normal normal-case">
              United States
            </span>
          </li>
          <li className=" font-bold capitalize  mt-8">
            life span:{" "}
            <span className=" ca text-lg font-normal normal-case">
              12 - 15 years
            </span>
          </li>
        </ul>
        <BreedStats />
      </div>
    </section>
  );
};

export default BreedDetails;
