import tmp_img from "../assets/images/image 2.png";

const MostSearched = () => {
  return (
    <main className=" w-5/6  my-10 mx-auto font-montserrat text-[#291507]">
      <section>
        <div>
          <h1 className=" text-2xl  sm:text-3xl md:text-4xl font-bold">
            Top 10 most searched breeds
          </h1>
          <ul className=" list-none mt-5 ">
            <li className=" md:flex justify-between md:mt-12">
              <div className=" md:w-44 md:h-44 md:mr-3 overflow-hidden">
                <img className="w-full h-full" src={tmp_img} alt="cat photo" />
              </div>
              <div className=" mt-5 md:mt-0 md:w-9/12">
                <h3 className=" text-xl sm:text-2xl md:text-4xl font-semibold">
                  1. Bengal
                </h3>
                <p className=" md:text-lg my-6">
                  Bengals are a lot of fun to live with, but they're definitely
                  not the cat for everyone, or for first-time cat owners.
                  Extremely intelligent, curious and active, they demand a lot
                  of interaction and woe betide the owner who doesn't provide
                  it.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default MostSearched;
