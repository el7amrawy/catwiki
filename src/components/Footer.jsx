import logo from "../assets/CatwikiLogo.svg";

const Footer = () => {
  return (
    <footer className="w-11/12  mx-auto bg-black rounded-t-[42px] text-white overflow-hidden p-9 flex flex-wrap justify-between">
      <img src={logo} alt="logo" className="invert contrast-[150%] w-20" />
      <div className="text-xs flex flex-wrap items-center ">
        <p className=" ">©</p>
        <p className=" ml-1">
          created by{" "}
          <a
            className=" underline text-sm "
            href="https://www.linkedin.com/in/aly-hamdy/"
          >
            Aly Hamdy
          </a>{" "}
          - devChallenge.io {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
