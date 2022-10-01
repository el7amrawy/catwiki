import logo from "../assets/CatwikiLogo.svg";

const Header = () => {
  return (
    <header className=" font-mystery">
      <nav className=" w-11/12 md:w-4/5 mx-auto py-3">
        <div className=" font-normal text-2xl flex items-start">
          <img src={logo} />
        </div>
      </nav>
    </header>
  );
};

export default Header;
