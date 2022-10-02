import cat from "../assets/images/image 2.png";

const Breed = (breed) => {
  return (
    <main className="w-11/12 sm:w-4/5 my-10 mx-auto font-montserrat text-[#291507]">
      <div className="flex justify-between w-96 h-96 overflow-hidden rounded-3xl">
        <img
          src={cat}
          alt="cat image"
          className=" w-full h-full object-cover transition duration-300 hover:scale-110"
        />
        <div>
          <h2 className=" text-4xl font-semibold">Bengal</h2>
          <p className=" text-lg">
            Bengals are a lot of fun to live with, but they're definitely not
            the cat for everyone, or for first-time cat owners. Extremely
            intelligent, curious and active, they demand a lot of interaction
            and woe betide the owner who doesn't provide it.
          </p>
          <ul></ul>
        </div>
      </div>
    </main>
  );
};
