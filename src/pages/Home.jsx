import Hero from "../components/Home/Hero";
import Breeds from "../components/Home/Breeds";
import HaveCat from "../components/Home/HaveCat";

const Home = () => {
  return (
    <main className=" w-11/12 sm:w-4/5 mx-auto font-montserrat">
      <Hero />
      <Breeds />
      <HaveCat />
    </main>
  );
};

export default Home;
